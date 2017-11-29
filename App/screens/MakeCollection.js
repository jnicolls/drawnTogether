import React from 'react';
import {StyleSheet, Text, TextInput,FlatList, View, Button} from 'react-native';
import styles from "../config/styles.js";


export default class MakeCollectionScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      title: '____',
      images: [],
      texts: [],
    };

  }

  _onSubmit(title, images) {
       let collectionPath = "/collections/" + title;
       console.log()
       console.log("the database is")
       console.log(this.props.screenProps.firebaseDatabase.toString())
       console.log(collectionPath)
       console.log(images)

       this.props.screenProps.firebaseDatabase.ref(collectionPath).set({
           images: images
       })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <TextInput
				style={{height: 40}}
				placeholder="Input title for collection here."
				onChangeText={(title) => this.setState({title})}
			/>
      <TextInput
          style={{height: 40}}
          placeholder="Input imageURL here."
          onSubmitEditing={(event) =>
            this.setState({images: [...this.state.images, {title: event.nativeEvent.text } ]})
          }
      />


      <Text>
          The title for this collection is {this.state.title}
      </Text>
      <Text>
          The images for this collection are:
      </Text>
      <FlatList
        data={this.state.images}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />

      <Button
        title="Submit Collection"
        onPress={() => {
          collectionPath = "/collections/" + this.state.title;
          this.props.screenProps.firebaseDatabase.ref(collectionPath).set({
              images: this.state.images
          })
        }}
      />

      </View>
    );
  }


}
