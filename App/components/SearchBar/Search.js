import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';
import { SearchBar } from 'react-native-elements'


export default class Search extends React.Component{

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
				onSubmitEditing={() =>
					this.props.navigation.navigate('SearchResults', {searchQuery: this.state.text })
				}
			/>
      </View>
    );
	}
}
