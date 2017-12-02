import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, ScrollView} from 'react-native';
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
      <ScrollView>
      <GeneralButton
        destination="MakeCollection"
        navigation={this.props.navigation}
        buttonTitle="Make a collection"
      />
      <GeneralButton
        destination="Login"
        navigation={this.props.navigation}
        buttonTitle="Login"
      />
      <GeneralButton
        destination="CreateUser"
        navigation={this.props.navigation}
        buttonTitle="Create a new profile"
      />
      <GeneralButton
        destination="ProfileEditor"
        navigation={this.props.navigation}
        buttonTitle="Edit your profile"
      />
      </ScrollView>

      </View>

    );
  }
}
