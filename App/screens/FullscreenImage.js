import React from 'react';
import styles from "../config/styles.js";
import { StyleSheet, Dimensions, Platform, View, Text, ScrollView} from 'react-native';
import Image from 'react-native-scalable-image';

const win = Dimensions.get('window');

export default class FullScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log("FULLSCREEN params: ", this.props.navigation.state.params.uri);
    }

    render() {
        return(
            <ScrollView style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <Image style={styles.fullscreen} width={win.width} source={{uri: this.props.navigation.state.params.uri}}/>
            </ScrollView>
        );
    }
}