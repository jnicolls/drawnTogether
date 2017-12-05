import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from "react-native-elements"
import styles from "../config/styles.js";
import GeneralButton from "../components/GeneralButton"
import CollectionGrid from "../components/PhotoGrid";

const profilePhoto = require('./joseph.png');
const win = Dimensions.get('window');

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

      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={{width: win.width/4, height: 100, alignItems: 'center'}}>
            <Image source={profilePhoto} style={styles.profilePhoto}/>
          </View>
          <View style={{width: (3*win.width)/4, height: 100}}>
            <Text style={[styles.baseText, styles.profileName, styles.textPadding]}>Joseph Nicolls</Text>
            <Text style={[styles.baseText, styles.textPadding]}>User for X years</Text>
            <Text style={[styles.baseText, styles.textPadding]}>Curated X digital collections</Text>
          </View>
        </View>

        <View style={[styles.profileDetailContainer]}>
          <View style={{width: win.width/3, height: 50}}>
            <Text style={[styles.baseText, styles.textPadding, styles.bold]}>Focuses</Text>
          </View>
          <View style={{width: (2*win.width)/3, height: 50}}>
            <Text style={[styles.baseText, styles.textPadding]}>anatomy, contemporary art</Text>
          </View>
        </View>

        <View style={[styles.profileDetailContainer]}>
          <View style={{width: win.width/3, height: 80}}>
            <Text style={[styles.baseText, styles.textPadding, styles.bold]}>Favorite artists</Text>
          </View>
          <View style={{width: (2*win.width)/3, height: 80}}>
            <Text style={[styles.baseText, styles.textPadding]}>Gustav Klimt, Egon Schiele, Martin Wong, Pablo Picasso, Jean-Michel Basquiat</Text>
          </View>
        </View>

        <View style={[styles.profileDetailContainer]}>
          <View style={{width: win.width/3, height: 55}}>
            <Text style={[styles.baseText, styles.textPadding, styles.bold]}>Background</Text>
          </View>
          <View style={{width: (2*win.width)/3, height: 55}}>
            <Text style={[styles.baseText, styles.textPadding]}>Undergraduate art history major</Text>
          </View>
        </View>

          <View style={{height: 20, backgroundColor: 'steelblue'}}/>
         <Text style={[styles.title, styles.baseText, styles.topMargin]}>Collections</Text>


        <View>
          <CollectionGrid/>
        </View>




        <Button
          backgroundColor="#1478eb"
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
          backgroundColor="#1478eb"
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
          backgroundColor="#1478eb"
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
          backgroundColor="#1478eb"
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

      </ScrollView>

    );
  }
}
