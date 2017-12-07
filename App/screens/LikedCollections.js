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
        <Text style={[styles.baseText, styles.title]}> Liked Collections </Text>
        <CollectionGrid/>
      </View>
    );
  }
}