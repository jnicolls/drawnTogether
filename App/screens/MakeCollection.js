import React from 'react';
import {StyleSheet, Text, TextInput,FlatList, ScrollView, Button, View} from 'react-native';
import styles from "../config/styles.js";
import GeneralButton from "../components/GeneralButton"
import MakeCollectionGrid from "../components/MakeCollectionGrid";




export default class MakeCollectionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Collection Title',
            images: [],
            texts: [],
            selected: []
        };
        this.handleAddImage = this.handleAddImage.bind(this);

    }

    handleAddImage(img) {
        // When task will be added, push it to array
        this.state.selected.push(img);
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text style={[styles.baseText, styles.title]}> New Collection </Text>
                <TextInput
                    style={[styles.baseText, styles.centerText]}
                    placeholder="Click/tap to input title for collection:"
                    placeholderTextColor='#bebde8'
                    onChangeText={(text) => this.setState({title: text})}
                />
                <TextInput
                    style={[styles.baseText, styles.centerText]}
                    placeholder="Click/tap to input image URL:"
                    placeholderTextColor='#bebde8'
                    onSubmitEditing={(event) =>
            this.setState({images: [...this.state.images, {title: event.nativeEvent.text } ]})
          }
                />
                <TextInput
                    style={[styles.baseText, styles.centerText]}
                placeholder="Click/tap to input collection description:"
                placeholderTextColor='#bebde8'
                onSubmitEditing={(event) =>
                this.setState({images: [...this.state.images, {title: event.nativeEvent.text } ]})
            }
                />


                <View style={{height: 35}}></View>
                <Text style={[styles.baseText, styles.margin]}>Click/tap once any of the images from your liked collections (below)
                to add to your new collection. Once you have indicated all desired images, select 'Publish Collection'
                to create it.</Text>

                <View>
                    <Button
                        title="Publish Collection"
                        onPress={() => {this.props.navigation.navigate('NewCollection', {images: this.state.selected,
                        title: this.state.title, author: 'Joseph Nicolls'})

}}
                    /></View>

                <View style={{height: 35}}></View>
                <View>
                    <MakeCollectionGrid  onAddImage={this.handleAddImage}/></View>


                <Text style={[styles.baseText, {marginBottom: 20}]}>
                    The title for this collection is {this.state.title}
                </Text>
                <Text style={styles.baseText}>
                    The images for this collection are:
                </Text>
                <FlatList
                    data={this.state.images}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
                <View>
                <GeneralButton style={styles.baseText}
                               destination="Profile"
                               navigation={this.props.navigation}
                               collectionTitle="Rejecting Anatomy"
                               buttonTitle="Make Public"
                />

                <GeneralButton style={styles.baseText}
                    destination="Collection"
                    navigation={this.props.navigation}
                    collectionTitle="Rejecting Anatomy"
                    buttonTitle="Save Draft"
                />
                </View>

            </ScrollView>
        );
    }


}