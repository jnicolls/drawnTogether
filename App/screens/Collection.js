import React from 'react';
import {StyleSheet, Text, View, Image, ListView, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import styles from "../config/styles.js";
import Row from './Row';
import {Button} from "react-native-elements"



const data = [{title:"Starry Night", uri: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg',
    artist:"Martin Wong", year:"1982", medium:"Acrylic on canvas", details:[{detail:"The hands in the sky finger spell Starry Night",
    sourceTitle:"", sourceUri:""}, {detail:"[H]e grew up in San Francisco. His parents were Chinese-American, but because his father also had Mexican ancestry, Mr. Wong came to refer to himself as ethnically Chino-Latino",
        sourceTitle:"New York Times",
        sourceUri:"https://www.nytimes.com/2015/11/20/arts/design/martin-wong-an-urban-visionary-with-a-hungry-eye.html"}]},
    {title:"Bust of a Woman", uri: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg',
        artist:"Pablo Picasso", year:"1944", medium:"Oil on canvas", details:{}}];



export default class CollectionsScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log('COLLECTION: this.props.navigation.state.params is ', this.props.navigation.state.params);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data), images: ds.cloneWithRows(this.props.navigation.state.params.images),
            profilePhoto: ''
        };
        console.log("COLLECTION: this.state.dataSource is ", this.state.dataSource);
        console.log("COLLECTION: this.state.images is ", this.state.images);
        this.setProfilePhoto();
    }

    setProfilePhoto() {
        if (this.props.navigation.state.params.collection.author === 'Alison Chen') {
            this.state.profilePhoto = require('./alison.png');
        } else if (this.props.navigation.state.params.collection.author === 'Melissa Chen') {
            this.state.profilePhoto = require('./melissa.png');
        } else {
            this.state.profilePhoto = require('./joseph.png')
        }
    }

  render() {
      const { navigate } = this.props.navigation;
      const data1 = this.props.navigation.state.params.images;

    return (
      <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
        <Text style={[styles.title]}>{this.props.navigation.state.params.collection.title}</Text>
          <View style={styles.profileBar} navigation={this.props.navigation}>
              <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('Profile', {})}>
                  <Image source={this.state.profilePhoto} style={styles.profilePhoto}/>
              </TouchableOpacity>
              <Text style={[styles.curatorText, styles.baseText]} onPress={() =>
              this.props.navigation.navigate('Profile', {})}>{this.props.navigation.state.params.collection.author}</Text>
          </View>

        <Text style={[styles.margin, styles.baseText]}>An exploration of non-conventional forms and representations
        of the human body.</Text>
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

              title={"Like Collection"}
          />
          <View style={{flex: 1}}>
              <ListView
                  style={{flex:1}}
                  dataSource={this.state.images}
                  renderRow={(data1) => <Row {...data1} navigation={this.props.navigation} />}
              />
          </View>
      </ScrollView>
    );

  }
}

