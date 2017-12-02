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
        <Button
  				backgroundColor="#00ADDC"
          font="avenir"
  				buttonStyle = {
  					{
  						flex:1,
              justifyContent:'center',
  						alignSelf:"center",
              margin: 10
  					}
  				}
          onPress={() =>
            this.props.navigation.navigate('Collection', {collectionTitle: "Rejecting Anatomy" })
          }
  				title={"Rejecting Anatomy Revelations"}
  			/>
        <Button
  				backgroundColor="#00ADDC"
          font="avenir"
  				buttonStyle = {
  					{
  						flex:1,
              justifyContent:'center',
  						alignSelf:"center",
              margin: 10,
  					}
  				}
          onPress={() =>
            this.props.navigation.navigate('Collection', {collectionTitle: "Rejecting Anatomy" })
          }
  				title={"Rejecting Anatomy Another One"}
  			/>
      </ScrollView>
      </View>
    );
  }
}
