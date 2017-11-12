import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class YourCollectionsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Your Collections',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> This is the 'Your collections' screen. </Text>
      </View>
    );
  }
}