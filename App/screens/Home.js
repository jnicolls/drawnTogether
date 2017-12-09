import React from 'react';
import {StyleSheet, Text, TextInput, View,ScrollView, Dimensions, Image} from 'react-native';
import { Header, Button } from 'react-native-elements';
import styles from "../config/styles";
import Search from "../components/SearchBar"
import CollectionPreview from "../components/CollectionPreviewGrid";

const win = Dimensions.get('window');

const c1 = {author: "Joseph Nicolls", title: "Rejecting Traditional Anatomy"}
const data1 = [{title:"Starry Night", uri: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg',
    artist:"Martin Wong", year:"1982", medium:"Acrylic on canvas", details:[{detail:"The hands in the sky finger spell Starry Night",
        sourceTitle:"", sourceUri:""}, {detail:"[H]e grew up in San Francisco. His parents were Chinese-American, but because his father also had Mexican ancestry, Mr. Wong came to refer to himself as ethnically Chino-Latino",
        sourceTitle:"New York Times",
        sourceUri:"https://www.nytimes.com/2015/11/20/arts/design/martin-wong-an-urban-visionary-with-a-hungry-eye.html"}]},
    {title:"Bust of a Woman", uri: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg',
        artist:"Pablo Picasso", year:"1944", medium:"Oil on canvas", details:{}}];

const c2 = {author: "Alison Chen", title: "18th Century Romanticism"}
const data2 = [{title:"A Storm with a Shipwreck", uri: 'https://mydailyartdisplay.files.wordpress.com/2011/07/storm_sh-vernet.jpg',
    artist:"Claude-Joseph Vernet", year:"1754", medium:"Acrylic on canvas", details:{}},
    {title:"Liberty Leading the People", uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/300px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
        artist:"Eugene Delacroix", year:"1830", medium:"Oil on canvas", details:{}}];

const c3 = {author: "Melissa Chen", title: "Weird Babies"}
const data3 = [{title:"Child Frightened by Water", uri: 'https://s-media-cache-ak0.pinimg.com/originals/d0/45/13/d045135d2958c839dcf4c5dfa7acbee8.jpg',
    artist:"Yasuo Kuniyosh", year:"1924", medium:"Acrylic on canvas", details:{}},
    {title:"Madonna with Child", uri: 'https://i.amz.mshcdn.com/ka8tJ5O347_hNUSEeF9OCVe8uFE=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2013%2F06%2F5.-madonna-with-child-1284.jpg',
        artist:"Cimabue", year:"1283", medium:"Oil on canvas", details:{}}];

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('./home.png')} style={styles.icon}></Image>
        )
    }


  render() {

    return (

      <View style={styles.container}>
        <Search navigation={this.props.navigation} />
        <ScrollView>

            <CollectionPreview navigation={this.props.navigation} collectionInfo={c1} images={data1}/>
            <View style={{height: 35}}></View>
            <CollectionPreview navigation={this.props.navigation} collectionInfo={c2} images={data2}/>
            <View style={{height: 35}}></View>
            <CollectionPreview navigation={this.props.navigation} collectionInfo={c3} images={data3}/>

      </ScrollView>
      </View>
    );
  }
}
