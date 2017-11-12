import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";
import GeneralNavigator from "../components/GeneralNavigation"


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the home screen. </Text>
      </View>
    );
  }
}



