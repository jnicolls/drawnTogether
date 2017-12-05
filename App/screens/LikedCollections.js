import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"
import CollectionGrid from "../components/PhotoGrid";


export default class LikedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Liked',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the liked collections screen. </Text>
        <CollectionGrid/>
      </View>
    );
  }
}