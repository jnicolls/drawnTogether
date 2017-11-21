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
			<Button
        onPress={() =>
          this.props.navigation.navigate('Collection', {collectionTitle: this.props.collectionTitle })
        }
				title={this.props.collectionTitle}
			/>
      </View>
    );
	}
}
