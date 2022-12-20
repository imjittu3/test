import axios, * as others from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/components/search';
import './'
import { colors } from './styles/colors';
import Navbar from './src/components/layout/Navbar';
import ImagePlaceholder from './src/components/layout/ImagePlaceholder';
import Footer from './src/components/layout/Footer';
import MorePlaceholder from './src/components/layout/MorePlaceholder';
import Divider from './src/components/reusable/cards/Divider';

export default function App() {
  const [data, setData] = React.useState([]);

  return (
    <View style={styles.container}>
      <Navbar />
      <Footer />
      <ImagePlaceholder />
      <MorePlaceholder />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.bg,
  },
});
