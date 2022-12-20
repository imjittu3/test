import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../styles/colors';
import { Context } from '../SearchProvider';
import CarList from './CarList';
import SearchFilters from './filters';

function SearchView(props) {
    const { state, dispatch } = React.useContext(Context);

    return (
        <View style={{ backgroundColor: colors.bg, padding: 16, marginBottom: 64 }}>
            <SearchFilters />
            <Text>{"\n\n"}</Text>
            <CarList />
        </View>
    );
}



export default SearchView;