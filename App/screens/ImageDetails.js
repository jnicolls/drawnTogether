import React from 'react';
import styles from "../config/styles.js";
import { StyleSheet, Dimensions, Platform, View, Text, TouchableOpacity, Linking} from 'react-native';

const win = Dimensions.get('window');

export default class ImageDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log("ImageDetails: this.props is", props);
        console.log("ImageDetails params: ", this.props.navigation.state.params);
    }
    render() {

        return(
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', marginVertical: 10}}>
                <View style={{height: 150, width: win.width-20, backgroundColor: 'steelblue', marginRight: 10,
                marginLeft: 10}}>
                    <Text style={[styles.detailTop, styles.baseText]}>
                        {this.props.detail}</Text>
                    <Text style={[styles.detailBottom, styles.baseText]}
                          onPress={() => Linking.openURL(this.props.sourceUri)}>
                        {this.props.sourceTitle}
                    </Text>
                </View>

            </View>
        );
    }
}