import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GeneralButton from "../components/GeneralButton";
import styles from "../config/styles.js";


export default class YourCollectionsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Your Collections',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
        console.log("the database in your_collections is")
        console.log({this.props.navigation.params.db})
        </Text>
        <Text> This is the 'Your collections' screen. </Text>
        <GeneralButton
          buttonTitle="Make your own collection"
          destination="MakeCollection"
          db={this.props.db}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
