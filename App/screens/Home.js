import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';
import styles from "../config/styles";
import SearchBar from "../components/SearchBar"


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (    

      <View style={styles.container}>
        <SearchBar />
        <Text > This is the home screen. </Text>
      </View>
    );
  }
}



