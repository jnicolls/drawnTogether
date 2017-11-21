import React, { Component } from 'react';
import {Text, Button, View } from 'react-native';


export default class SearchBar extends React.Component{

	constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    return (
      <View>
			<Text>
				style={{height: 80}}
				title="This is the collection for {this.props.collectionTitle}"
				onChangeText={(text) => this.setState({text})}
				onSubmitEditing={() =>
					this.props.navigation.navigate('Collection', {collectionTitle: this.props.collectionTitle })
				}
			<Text/>
      </View>
    );
	}
}
