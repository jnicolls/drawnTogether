import React, { Component } from 'react';
import {Text, Button, View, TextInput, Alert } from 'react-native';

export default class ProfileEditor extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      interests: [],
      collections: [],
      bio: "",
    };
  }

  render() {
    return(
      <View>

        <TextInput
  				style={{height: 40}}
  				placeholder="Input username here"
  				onChangeText={(username) => this.setState({username})}
  			/>
        <TextInput
            style={{height: 40}}
            placeholder="Input interests here."
            onSubmitEditing={(event) =>
              this.setState({images: [...this.state.interests, {title: event.nativeEvent.text } ]})
            }
        />

        <TextInput
            style={{height: 40}}
            placeholder="Input collections here."
            onSubmitEditing={(event) =>
              this.setState({collections: [...this.state.interests, {title: event.nativeEvent.text } ]})
            }
        />

        <TextInput
  				style={{height: 40}}
  				placeholder="Input bio here"
  				onChangeText={(bio) => this.setState({bio})}
  			/>



        <Button
          title="Submit Changes"
          onPress={() => {
            var user = this.props.firebaseApp.auth().currentUser;
            if (user){
            user.updateProfile({
              username: this.state.username,
              bio: this.state.bio,
              collections: [],
              likedCollections: [],
              interests: this.state.interests,

            }).then(function() {
              Alert.alert("You have successfully updated " + user.email)
            }).catch(function(error) {
              Alert.alert("You have NOT successfully updated " + user.email)
            });
          } else {
            Alert.alert("You are not signed in.")
          }
            }
          }
        />

      </View>
    );
  }

}
