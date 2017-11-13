import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import styles from "../config/styles";
import Title from "../components/Title"


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (    

      <View style={styles.container}>
        
        <Text > This is the home screen. </Text>
      </View>
    );
  }
}



