import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from "react-native-elements"
import styles from "../config/styles.js";
import CollectionPreview from "../components/CollectionPreviewGrid";

const profilePhoto = require('./joseph.png');
const win = Dimensions.get('window');

const c1 = {author: "Joseph Nicolls", title: "Rejecting Traditional Anatomy"}
const data1 = [{title:"Starry Night", uri: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg',
    artist:"Martin Wong", year:"1982", medium:"Acrylic on canvas", details:[{detail:"The hands in the sky finger spell Starry Night",
        sourceTitle:"", sourceUri:""}, {detail:"[H]e grew up in San Francisco. His parents were Chinese-American, but because his father also had Mexican ancestry, Mr. Wong came to refer to himself as ethnically Chino-Latino",
        sourceTitle:"New York Times",
        sourceUri:"https://www.nytimes.com/2015/11/20/arts/design/martin-wong-an-urban-visionary-with-a-hungry-eye.html"}]},
    {title:"Bust of a Woman", uri: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg',
        artist:"Pablo Picasso", year:"1944", medium:"Oil on canvas", details:{}}];

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROFILE: this.props is ', this.props);
    this.state = {
      username: "",
      interests: [],
      collections: [],
      bio: "",
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
          <Image source={require('./profile.png')} style={styles.icon}></Image>
      )
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
            <Text style={[styles.baseText, styles.textPadding]}>User for 2 years</Text>
            <Text style={[styles.baseText, styles.textPadding]}>Curated 1 digital collection</Text>
          </View>
        </View>
          <Button
              backgroundColor="#1478eb"
              font="avenir"
              buttonStyle = {
            {
              justifyContent:'center',
              alignSelf:"center",
              margin: 10,
              marginBottom: 20
            }
          }

              title={"Message Curator"}
          />

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
         <Text style={[styles.title, styles.baseText, styles.topMargin]}>Your Collections</Text>

          <Button
              backgroundColor="#1478eb"
              font="avenir"
              buttonStyle = {
            {
              justifyContent:'center',
              alignSelf:"center",
              margin: 10,
              marginBottom: 20
            }
          }
              onPress={() =>
            this.props.navigation.navigate('MakeCollection')
          }
              title={"+ Make A New Collection"}
          />

          <View>
          <CollectionPreview navigation={this.props.navigation} collectionInfo={c1} images={data1}/>
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
