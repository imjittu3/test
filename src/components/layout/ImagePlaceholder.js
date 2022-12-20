import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../styles/colors';

function ImagePlaceholder(props) {
    return (
        <View style={{ alignItems: 'center', marginBottom: 32, position: 'relative' }}>
            {/* Cover image */}
            <Image source={"https://smart.brwskagroup.com:2323/public/uploads/civic2.jpeg"}
                style={{ width: '100%', height: 260 }} />

            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

            {/* Great Deals */}
            <View style={styles.container}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginBottom: 8 }}>View Great Deals!</Text>
                    <Text style={{ opacity: .6, fontSize: 12, color: 'white' }}>Now starting at only over $100/day</Text>
                </View>
                <View style={{ backgroundColor: 'white', color: colors.primary, borderRadius: 14, padding: 16 }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>GO</Text></View>
            </View>


            {/* Press */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -20,
        backgroundColor: colors.primary,
        borderRadius: 18,
        width: '90%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: "inset -17px 0px 22px 6px rgba(0,0,0,0.24)"
    }
})

export default ImagePlaceholder;