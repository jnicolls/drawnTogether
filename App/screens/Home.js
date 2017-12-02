import React from 'react';
import {StyleSheet, Text, TextInput, View,ScrollView, Dimensions} from 'react-native';
import { Header, Button } from 'react-native-elements';
import styles from "../config/styles";
import SearchBar from "../components/SearchBar"
import CollectionOverview from "../components/CollectionOverview"
import GeneralButton from "../components/GeneralButton"

const win = Dimensions.get('window');

export default class HomeScreen extends React.Component {



  render() {

    return (

      <View style={styles.container}>
        <SearchBar navigation={this.props.navigation} />
        <ScrollView>
        <GeneralButton
          destination="Collection"
          navigation={this.props.navigation}
          collectionTitle="Rejecting Anatomy"
          buttonTitle="Rejecting Anatomy"
  			/>
        <GeneralButton
          destination="Collection"
          navigation={this.props.navigation}
          collectionTitle="Rejecting Anatomy"
          buttonTitle="It's time for the anatomy to end."
  			/>
        <GeneralButton
          destination="Collection"
          navigation={this.props.navigation}
          collectionTitle="Rejecting Anatomy"
          buttonTitle="Anatomy Park: Revengance"
  			/>
      </ScrollView>
      </View>
    );
  }
}
