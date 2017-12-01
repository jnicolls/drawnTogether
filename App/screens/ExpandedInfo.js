import React from 'react';
import styles from "../config/styles.js";
import {StyleSheet, Text, View, ListView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import ImageDetails from './ImageDetails';
import Image from 'react-native-scalable-image';

const win = Dimensions.get('window');

const details = [{detail:"The hands in the sky finger spell Starry Night.",
    sourceTitle:"", sourceUri:""}, {detail:"[H]e grew up in San Francisco. His parents were Chinese-American, but because his father also had Mexican ancestry, Mr. Wong came to refer to himself as ethnically Chino-Latino",
    sourceTitle:"New York Times",
    sourceUri:"https://www.nytimes.com/2015/11/20/arts/design/martin-wong-an-urban-visionary-with-a-hungry-eye.html"}];

export default class ExpandedInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log("EXPANDEDINFO: this.state.params.piece ", this.props.navigation.state.params.piece);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.navigation.state.params.piece._dataBlob.s1.details),
        };
        console.log("EXPANDEDINFO: this.state.datasource: ", this.props.navigation.state.params.piece._dataBlob.s1.details);
    }

    render() {

        return (

            <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FullscreenImage',
                {uri:this.props.navigation.state.params.piece._dataBlob.s1.uri})}>
                    <Image width={win.width} source={{ uri: this.props.navigation.state.params.piece._dataBlob.s1.uri}}/>
                    <View style={{height: 80, backgroundColor: 'steelblue', marginBottom: 10}}>
                        <Text style={[styles.bannerTop, styles.baseText]}>{this.props.navigation.state.params.piece._dataBlob.s1.title}</Text>
                        <Text style={[styles.bannerBottom, styles.baseText]}>{this.props.navigation.state.params.piece._dataBlob.s1.artist},
                            {this.props.navigation.state.params.piece._dataBlob.s1.year}.
                            {this.props.navigation.state.params.piece._dataBlob.s1.medium}.</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <ListView
                        style={{flex:1}}
                        dataSource={this.state.dataSource}
                        renderRow={(details) => <ImageDetails {...details} navigation={this.props.navigation} />}
                    />
                </View>
            </ScrollView>
        );
    }
}