import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from '../../../styles/colors';
import FeatureCard from '../reusable/cards/FeatureCard';

function MorePlaceholder(props) {
    return (
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 64 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%', marginTop: 16, marginBottom: 32 }}>
                <Image style={{ width: 84, height: 32 }} source={"https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYahoo_Finance_Logo_blk_480w.b79813ed.png&w=3840&q=75"} />
                <Image style={{ width: 120, height: 30 }} source={"https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPress-BodyImages-Medium.aa3ef308.png&w=3840&q=75"} />
                <Image style={{ width: 80, height: 24 }} source={"https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCEO-Weekly.ce0c2502.png&w=3840&q=75"} />
            </View>


            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuresContainer}>
                <View style={styles.whyChooseUs}><Text style={{ fontSize: 23, fontWeight: 'bold' }}>Why{"\n"}Choose{"\n"}<Text style={{ color: colors.primary }}>CarShair?</Text></Text></View>

                <View style={styles.divider} />
                <FeatureCard
                    title="Superior"
                    desc="Quality"
                    source={"https://www.carshair.com/_next/static/media/Quality-Icon.b565de8f.svg"}
                />
                <View style={styles.divider} />
                <FeatureCard
                    title="Insurance"
                    desc="Covered"
                    source={"https://www.carshair.com/_next/static/media/Insurance-Covered-Icon.6bb9e7cf.svg"}
                />
                <View style={styles.divider} />
                <FeatureCard
                    title="Industry"
                    desc="Authentication"
                    source={"https://www.carshair.com/_next/static/media/Vetted-icon.c45ca3cf.svg"}
                />
                <View style={styles.divider} />
                <FeatureCard
                    title="Flexible"
                    desc="Cancellations"
                    source={"https://www.carshair.com/_next/static/media/close.f7ce8fba.svg"}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    featuresContainer: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        overflow: 'scroll',
        boxShadow: "0px 22px 29px 7px rgba(1,104,249,0.08)"
    },

    whyChooseUs: {
        fontSize: 24,
        padding: 16,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    divider: {
        width: 6, height: '100%', backgroundColor: "#bddfff",
        boxShadow: "inset 0px -50px 40px -8px #FFFFFF"
    }
})

export default MorePlaceholder;