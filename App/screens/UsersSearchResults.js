import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class UsersSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Users',
    };
    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={[styles.baseText, styles.margin]}>
                These are the user search results for {this.props.navigation.state.params.searchQuery} </Text>
            </View>
        );
    }
}
