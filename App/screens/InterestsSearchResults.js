import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class InterestsSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Interests',
    };
    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={[styles.baseText, styles.margin]}> These are the interest search results for {this.props.navigation.state.params.searchQuery} </Text>
            </View>
        );
    }
}
