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
    const { navigation, screenProps } = this.props
    return (
      <View style={styles.container}>

        <Text> This is the 'Your collections' screen. </Text>
        <GeneralButton
          buttonTitle="Make your own collection"
          destination="MakeCollection"
          db={screenProps.firebaseDatabase}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
