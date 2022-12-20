import React from 'react';
import { View, Image, Text } from 'react-native';
import { colors } from '../../../styles/colors';
import { dummyCarPhotos } from '../search/filters/dummydata';

function Navbar(props) {
    return (
        <View style={{ paddingVertical: 12, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={"https://www.cirrus-erp.com/images/menu-icon.png"}
                    style={{ width: 26, height: 26, borderRadius: '100%' }} />
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginHorizontal: 12, color: colors.title }}>Search</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Image source={"https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png"}
                    style={{ width: 20, height: 20, marginHorizontal: 8 }}
                /> */}
                <Image source={"https://media-exp1.licdn.com/dms/image/C4D03AQHWF65Xo7hYig/profile-displayphoto-shrink_400_400/0/1577273024540?e=1654128000&v=beta&t=P5Q5aDIakoNg7u8jJEUxFw22SF0mp3nXfC5POb-nDQU"}
                    style={{ width: 38, height: 38, borderRadius: '100%' }} />
            </View>
        </View>
    );
}

export default Navbar;