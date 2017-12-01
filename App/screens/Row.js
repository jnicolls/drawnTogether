import React from 'react';
import styles from "../config/styles.js";
import { StyleSheet, Dimensions, Platform, View, Text, TouchableOpacity, ListView} from 'react-native';
import Image from 'react-native-scalable-image';

const win = Dimensions.get('window');

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props),
        };
        console.log("ROW: this.props is ", this.props);

    }
    render() {
        return(
        <View
            style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', marginVertical: 20}}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ExpandedInfo', {piece: this.state.dataSource})}>
                <Image width={win.width} source={{ uri: this.props.uri}}/>
                <View style={{height: 80, backgroundColor: 'steelblue'}}>
                    <Text style={[styles.bannerTop, styles.baseText]}>{this.props.title}</Text>
                    <Text style={[styles.bannerBottom, styles.baseText]}>{this.props.artist}, {this.props.year}. {this.props.medium}.</Text>
                </View>
            </TouchableOpacity>

        </View>
        );
    }
}