import React from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
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
        <GeneralButton
          buttonTitle="Make your own collection"
          destination="MakeCollection"
          navigation={this.props.navigation}
        />
        <GeneralButton
          buttonTitle="Login"
          destination="Login"
          navigation={this.props.navigation}
        />
        <GeneralButton
          buttonTitle="Create A New Profile"
          destination="CreateUser"
          navigation={this.props.navigation}
        />
        <GeneralButton
        buttonTitle="Make changes to current profile."
        destination="ProfileEditor"
        navigation={this.props.navigation}
        />

      </View>

    );
  }
}
