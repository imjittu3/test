import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles/colors';

function Footer(props) {
    return (
        <View style={styles.container}>
            {/* <Text>hi</Text> */}
            <View style={styles.selectedMenu}>
                <Image source={"https://smart.brwskagroup.com:2323/public/uploads/home2.png"} style={{ width: 24, height: 24 }} />
                <View style={{ width: 8 }} />
                <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Home</Text>
            </View>
            <Image source={"https://smart.brwskagroup.com:2323/public/uploads/seach.png"} style={{ width: 24, height: 24 }} />
            <Image source={"https://smart.brwskagroup.com:2323/public/uploads/settings.png"} style={{ width: 24, height: 24 }} />
            <Image source={"https://smart.brwskagroup.com:2323/public/uploads/profile.png"} style={{ width: 24, height: 24 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: 'center',
        flexDirection: 'row',
        // paddingHorizontal: 8,
        position: 'fixed', bottom: 0, width: '100%', height: 70, backgroundColor: 'white', zIndex: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: "0px -7px 48px 11px rgba(0,0,0,0.09)",
    },

    selectedMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 24,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: colors.light,
    }
})

export default Footer;