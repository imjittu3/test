import React from 'react';
import { View } from 'react-native';

function Divider(props) {
    return (
        <View style={{
            height: 2,
            width: '90%',
            alignItems: 'center',
            backgroundColor: '#eee'
        }} />
    );
}

export default Divider;