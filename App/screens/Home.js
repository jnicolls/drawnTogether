import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> This is the home screen. </Text>
      </View>
    );
  }
}



