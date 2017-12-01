import React from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import {Button} from "react-native-elements"
import styles from "../config/styles.js";
import GeneralButton from "../components/GeneralButton"

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      interests: [],
      collections: [],
      bio: "",
    };


  }


  static navigationOptions = {
    tabBarLabel: 'Profile',
  };


  render() {
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
      <Button
        backgroundColor="#00ADDC"
        font="avenir"
        buttonStyle = {
          {
            justifyContent:'center',
            alignSelf:"center",
            margin: 10
          }
        }
        onPress={() =>
          this.props.navigation.navigate('MakeCollection')
        }
        title={"Make your own collection"}
      />
      <Button
        backgroundColor="#00ADDC"
        font="avenir"
        buttonStyle = {
          {
            justifyContent:'center',
            alignSelf:"center",
            margin: 10
          }
        }
        onPress={() =>
          this.props.navigation.navigate('Login')
        }
        title={"Log in"}
      />
      <Button
        backgroundColor="#00ADDC"
        font="avenir"
        buttonStyle = {
          {
            justifyContent:'center',
            alignSelf:"center",
            margin: 10
          }
        }
        onPress={() =>
          this.props.navigation.navigate('CreateUser')
        }
        title={"Create a new profile"}
      />
      <Button
        backgroundColor="#00ADDC"
        font="avenir"
        buttonStyle = {
          {
            justifyContent:'center',
            alignSelf:"center",
            margin: 10
          }
        }
        onPress={() =>
          this.props.navigation.navigate('ProfileEditor')
        }
        title={"Make changes to your profile"}
      />

      </View>

    );
  }
}
