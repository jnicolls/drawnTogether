import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import styles from "../config/styles.js"
import CollectionPreview from "../components/CollectionPreviewGrid";

const c1 = {author: "Joseph Nicolls", title: "Rejecting Traditional Anatomy"}
const data1 = [{title:"Starry Night", uri: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg',
    artist:"Martin Wong", year:"1982", medium:"Acrylic on canvas", details:[{detail:"The hands in the sky finger spell Starry Night",
        sourceTitle:"", sourceUri:""}, {detail:"[H]e grew up in San Francisco. His parents were Chinese-American, but because his father also had Mexican ancestry, Mr. Wong came to refer to himself as ethnically Chino-Latino",
        sourceTitle:"New York Times",
        sourceUri:"https://www.nytimes.com/2015/11/20/arts/design/martin-wong-an-urban-visionary-with-a-hungry-eye.html"}]},
    {title:"Bust of a Woman", uri: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg',
        artist:"Pablo Picasso", year:"1944", medium:"Oil on canvas", details:{}}];

export default class CollectionsSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Collections',
    };
    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: "#183464",}}>
                <Text style={[styles.baseText, styles.centerText, styles.margin, styles.title]}> Search results for: {this.props.navigation.state.params.searchQuery} </Text>
                <Text style={[styles.baseText, {textAlign: 'right'}, {marginRight: 20}]}>Total Results: 10</Text>

                <View style={styles.margin}>
                    <Text style={[styles.baseText, styles.leftAlign, styles.bold]}>Collections</Text>
                </View>
                <CollectionPreview navigation={this.props.navigation} collectionInfo={c1} images={data1}/>

            </View>
        );
    }
}
