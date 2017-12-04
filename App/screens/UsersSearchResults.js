import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class UsersSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Liked',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> This is the users search results screen. </Text>
            </View>
        );
    }
}