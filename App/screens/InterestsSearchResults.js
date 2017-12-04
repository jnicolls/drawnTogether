import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class InterestsSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Liked',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> This is the interests search results screen. </Text>
            </View>
        );
    }
}