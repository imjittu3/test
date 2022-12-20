import axios, * as others from 'axios';
import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../../styles/colors';
import { Context } from '../../SearchProvider';
import BasicFilters from './BasicFilters';

function SearchFilters(props) {
    const { state, dispatch } = React.useContext(Context);

    React.useEffect(() => {
        dispatch({ type: 'setLoadingCarResults', value: true })
        // generate the api, make a get request, and dispatch our current result
        const hostPath = "https://vpic.nhtsa.dot.gov";
        const api = "/api/vehicles/GetModelsForMakeYear"
        const yearQuery = state.carYear !== 'any' ? '/modelyear/' + state.carYear : "";
        const typeQuery = state.carType !== 'any' ? '/vehicletype/' + state.carType : "";
        const query = `/make/${state.carMake}${yearQuery}${typeQuery}`
        const format = "format=json"

        axios.get(hostPath + api + query + "?" + format)
            .then(res => {
                dispatch({ type: 'setCarResults', value: res.data.Results })
                dispatch({ type: 'setLoadingCarResults', value: false })
            })
    }, [state.carType, state.carMake, state.carYear])

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.title, marginBottom: 16 }}>Start Searching</Text>
            <BasicFilters />
        </View>
    );
}

export default SearchFilters;