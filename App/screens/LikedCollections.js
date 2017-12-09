import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import styles from "../config/styles.js"
import CollectionPreview from "../components/CollectionPreviewGrid";

const c1 = {author: "Melissa Chen", title: "Envy"}
const data1 = [{title:"Envy and Purity", uri: 'http://www.barryxball.com/img/works/wo949.jpg',
    artist:"Barry X Ball", year:"2012", medium:"Acrylic on canvas", details:{}},
    {title:"Envy Plucking the Wings of Fame", uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Fran%C3%A7ois-Guillaume_M%C3%A9nageot_-_Envy_Plucking_the_Wings_of_Fame_-_WGA15026.jpg',
        artist:"François Guillaume Menageot", year:"1806", medium:"Oil on canvas", details:{}}];

const c2 = {author: "Alison Chen", title: "Springtime Happiness"}
const data2 = [{title:"Primavera", uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1200px-Botticelli-primavera.jpg',
    artist:"Botticelli", year:"1470", medium:"Acrylic on canvas", details:{}},
    {title:"Spring Day on Karl Johan Street", uri: 'https://uploads1.wikiart.org/images/edvard-munch/spring-day-on-karl-johan-street-1890.jpg',
        artist:"Edvard Munch", year:"1890", medium:"Oil on canvas", details:{}}];

export default class LikedScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Liked',
      tabBarIcon: ({tintColor}) => (
          <Image source={require('./liked.png')} style={styles.icon}></Image>
      )

  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.baseText, styles.title]}> Liked Collections </Text>
          <ScrollView>
              <View style={{height: 35}}></View>
              <CollectionPreview navigation={this.props.navigation} collectionInfo={c1} images={data1}/>
              <View style={{height: 35}}></View>
              <CollectionPreview navigation={this.props.navigation} collectionInfo={c2} images={data2}/>


        </ScrollView>
      </View>
    );
  }
}