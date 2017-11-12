import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class LikedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Liked',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> This is the liked collections screen. </Text>
      </View>
    );
  }
}