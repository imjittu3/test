import React from 'react';
import { Image, Text, View } from 'react-native';
import { colors } from '../../../../styles/colors';

function FeatureCard(props) {
    return (
        <View style={{ paddingVertical: 16, paddingHorizontal: 32 }}>
            <Image style={{ width: 50, height: 50, marginBottom: 8 }} source={props.source} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.primary }}>{props.title}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: colors.title }}>{props.desc}</Text>
        </View>
    );
}

export default FeatureCard;