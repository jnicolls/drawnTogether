import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { Header } from 'react-native-elements';
import styles from "../config/styles";
import SearchBar from "../components/SearchBar"
import CollectionOverview from "../components/CollectionOverview"

export default class HomeScreen extends React.Component {

  render() {

    return (

      <View style={styles.container}>
        <SearchBar navigation={this.props.navigation} />
        <CollectionOverview
          collectionTitle="Collection 1"
          navigation={this.props.navigation}
        />
        <CollectionOverview
          collectionTitle="Collection 2"
          navigation={this.props.navigation}
        />
        <CollectionOverview
          collectionTitle="Collection 3"
          navigation={this.props.navigation}
        />
        <Text > This is the home screen </Text>
      </View>
    );
  }
}
