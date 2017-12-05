import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"


export default class CollectionsSearchResultsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Collections',
    };
    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text> These are the collection search results for {this.props.navigation.state.params.searchQuery} </Text>
            </View>
        );
    }
}
