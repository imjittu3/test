import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { colors } from '../../../styles/colors';
import CarBoxCard from '../reusable/cards/CarBoxCard';
import { Context } from '../SearchProvider';

function CarList(props) {
    const { state, dispatch } = React.useContext(Context);

    const renderItem = ({ item, index }) => {
        return <CarBoxCard index={index} make={item.Make_Name} model={item.Model_Name} />
    };

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.title }}>Available Near You</Text>
            <Text>{"\n"}</Text>
            {/* if request is loading show activity indicator, if result is empty show a not found warning, otherwise show the list of cars */}
            {state.loadingCarResults ?
                <ActivityIndicator style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }} size="large" />
                :
                state.carResults?.length <= 0 ?
                    <>
                        <Image source={"https://smart.brwskagroup.com:2323/public/uploads/notfound.png"}
                            style={{ height: 200, marginVertical: 16 }} resizeMode="contain" />
                        <Text style={{ textAlign: 'center' }}>No Vehicle Available</Text>
                    </> :
                    <>
                        <FlatList
                            style={{ width: '100%' }}
                            data={state.carResults}
                            renderItem={renderItem}
                            keyExtractor={item => item.Model_ID}
                        />
                    </>
            }
        </View>
    );
}

export default CarList;