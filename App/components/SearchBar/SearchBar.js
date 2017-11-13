import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';


export default class SearchBar extends React.Component{
	constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Search for Collections, Curators, etc."
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
}
}