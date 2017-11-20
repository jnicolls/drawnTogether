import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> This is the profile screen. </Text>
      </View>
    );
  }
}
