import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"

export default class CollectionsScreen extends React.Component {
  static navigationOptions = {
    title: {this.props.navigation.state.params.collectionTitle},
  };

  render() {

    const{navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text> These are the search results for {this.props.navigation.state.params.collectionTitle} </Text>
      </View>
    );
  }
}
