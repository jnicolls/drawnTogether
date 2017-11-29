import React, { Component } from 'react';
import {Text, Button, View } from 'react-native';


export default class GeneralButton extends React.Component{

	constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
			<Button
        onPress={() =>
          this.props.navigation.navigate(this.props.destination)
        }
				title={this.props.buttonTitle}
			/>
      </View>
    );
	}
}
