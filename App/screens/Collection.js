import React from 'react';
import {StyleSheet, Text, View, Image, ListView, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import styles from "../config/styles.js";
import Row from './Row';

const profilePhoto = require('./joseph.png');

const data = [{title:"Starry Night", uri: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg',
    artist:"Martin Wong", year:"1982", medium:"Acrylic on canvas"},
    {title:"Bust of a Woman", uri: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg',
        artist:"Pablo Picasso", year:"1944", medium:"Oil on canvas"}];

export default class CollectionsScreen extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

  render() {

    const{navigate} = this.props.navigation;
    console.log("Navigate in Collection is ", navigate);

    return (
      <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
        <Text style={[styles.title, styles.baseText]}>Rejecting Traditional Anatomy</Text>
          <View style={styles.profileBar}>
              <Image source={profilePhoto} style={{width:45, height:45, padding: 10}}/>
              <Text style={[styles.curatorText, styles.baseText]}>Joseph Nicolls</Text>
          </View>

        <Text style={[styles.margin, styles.baseText]}>An exploration of non-conventional forms and representations
        of the human body.</Text>
          <View style={{flex: 1}}>
              <ListView
                  style={{flex:1}}
                  dataSource={this.state.dataSource}
                  renderRow={(data, navigate) => <Row {...data} navigation={this.props.navigation} />}
              />
          </View>
      </ScrollView>
    );

  }
}

