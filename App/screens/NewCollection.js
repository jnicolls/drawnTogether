import React from 'react';
import {StyleSheet, Text, TextInput, View,ScrollView, Dimensions} from 'react-native';
import { Header, Button } from 'react-native-elements';
import styles from "../config/styles";
import FinalNewGrid from "../components/FinalNewGrid";

export default class NewCollectionScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log('NEW COLLECTION: this.props ', this.props);
        this.state = {
            images: this.props.navigation.state.params.images,
            title: this.props.navigation.state.params.title,
            author: this.props.navigation.state.params.author
        };
    }

    render() {

        return (

            <View style={styles.container}>
                <Text style={[styles.baseText, styles.margin]}> New Collection Added! </Text>
                <ScrollView>
                    <FinalNewGrid images={this.state.images} title={this.state.title} author={this.state.author}/>
                </ScrollView>
            </View>
        );
    }
}
