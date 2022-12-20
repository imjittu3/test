import React from 'react';
import { StyleSheet, Text, Picker, View, ScrollView } from 'react-native';
import { colors } from '../../../../styles/colors';
import { Context } from '../../SearchProvider';
import { dummyCarMakes, dummyCarTypes, dummyCarYear } from './dummydata';

function BasicFilters(props) {
    const { state, dispatch } = React.useContext(Context);

    const handleCarMakeChange = e => dispatch({ type: 'setCarMake', value: e })
    const handleCarYearChange = e => dispatch({ type: 'setCarYear', value: e })
    const handleCarTypeChange = e => dispatch({ type: 'setCarType', value: e })

    return (
        <View styles={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                <Picker style={styles.pickerStyle} mode="dropdown" selectedValue={state.carMake} onValueChange={handleCarMakeChange}>
                    {dummyCarMakes.map(make => (
                        <Picker.Item key={make.value} value={make.value} label={make.name} />
                    ))}
                </Picker>

                <View style={{ width: 16 }} />

                <Picker style={styles.pickerStyle} mode="dropdown" selectedValue={state.carYear} onValueChange={handleCarYearChange}>
                    {dummyCarYear.map(make => (
                        <Picker.Item key={make.value} value={make.value} label={make.name} />
                    ))}
                </Picker>
            </View>

            <Text>{"\n"}</Text>

            <ScrollView horizontal style={{ flexDirection: 'row', margin: -16, padding: 16 }} showsHorizontalScrollIndicator={false}>
                {dummyCarTypes.map(type => (
                    <Text
                        key={type.value}
                        style={state.carType === type.value ? styles.carsFilterTypeSelected : styles.carsFilterType}
                        onPress={e => handleCarTypeChange(type.value)}
                    >
                        {type.name}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerStyle: {
        height: 40,
        flex: 1,
        color: colors.primary,
        fontFamily: "Roboto-Regular",
        borderRadius: 8,
        backgroundColor: colors.content,
        borderColor: colors.content,
        fontWeight: 'bold',
        border: '1px solid ' + colors.primary,
        padding: 8,
        fontSize: 14
    },

    carsFilterType: {
        color: colors.primary,
        paddingHorizontal: '12px',
        paddingVertical: '8px',
        border: '1px solid ' + colors.primary,
        borderRadius: 24,
        marginHorizontal: 4,
        backgroundColor: colors.content,
        cursor: 'pointer',
        transition: 'all .2s',
        fontWeight: 'bold'
        // fontSize: '16px',
    },

    carsFilterTypeSelected: {
        // fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: '12px',
        paddingVertical: '8px',
        border: '1px solid ' + colors.primary,
        borderRadius: 24,
        marginHorizontal: 4,
        backgroundColor: colors.primary
    },

})

export default BasicFilters;