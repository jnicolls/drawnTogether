import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js"

export default class ExpandedInfoScreen extends React.Component {

    render() {

        const{navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>This is the expanded info screen.</Text>
            </View>
        );
    }
}