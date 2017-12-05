import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "./styles.js"
import CollectionGrid from "../PhotoGrid";

export default class FilteredResults extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Collections',
    };
    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: "#183464",}}>
                <Text> These are the collection search results for {this.props.navigation.state.params.searchQuery} </Text>
                <Text style={[styles.baseText, styles.centerText]}>Total Results: 10</Text>

                <View style={styles.margin}>
                    <Text style={[styles.baseText, styles.leftAlign, styles.bold]}>Collections</Text>
                </View>
                <CollectionGrid></CollectionGrid>
            </View>
        );
    }
}
