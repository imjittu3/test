import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { colors } from '../../../../styles/colors';
import { dummyCarPhotos } from '../../search/filters/dummydata';

function CarBoxCard(props) {
    return (
        <View style={styles.card}>
            <Image
                source={props.index >= dummyCarPhotos.length ? dummyCarPhotos[dummyCarPhotos.length - 1] : dummyCarPhotos[props.index]}
                style={{ width: '100%', height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            />

            <View style={{ padding: 12, }}>
                <Text style={{ opacity: .6, fontSize: 10 }}>{props.make}</Text>
                <Text style={{ color: colors.primary, fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>{props.model}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>$140 <Text style={{ opacity: .6, fontSize: 10, fontWeight: 'normal' }}>/Day</Text></Text>
                        <Text style={{ fontWeight: 'bold', opacity: '.6' }}>Toronto, Tim Horton</Text>
                    </View>
                    <Text style={{ backgroundColor: colors.primary, color: 'white', padding: 12, borderRadius: 6 }} >RENT NOW</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // width: '100%',
        overflow: 'hidden',
        flex: 1,
        backgroundColor: colors.content,
        borderRadius: 6,
        marginBottom: 16,
        transition: 'all 0s'
    }
})

export default CarBoxCard;