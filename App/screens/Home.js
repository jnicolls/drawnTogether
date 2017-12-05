import React from 'react';
import {StyleSheet, Text, TextInput, View,ScrollView, Dimensions} from 'react-native';
import { Header, Button } from 'react-native-elements';
import styles from "../config/styles";
import Search from "../components/SearchBar"
import CollectionOverview from "../components/CollectionOverview"
import GeneralButton from "../components/GeneralButton"
import CollectionGrid from "../components/PhotoGrid";

const win = Dimensions.get('window');

export default class HomeScreen extends React.Component {



  render() {

    return (

      <View style={styles.container}>
        <Search navigation={this.props.navigation} />
        <ScrollView>

            <CollectionGrid/>
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
