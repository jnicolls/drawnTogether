import React, { Component } from 'react';
import {Text, View } from 'react-native';
import {Button} from 'react-native-elements'


export default class GeneralButton extends React.Component{

	constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
			<Button
				backgroundColor="#00ADDC"
				font="avenir"
				buttonStyle = {
					{
						flex:1,
						justifyContent:'center',
						alignSelf:"center",
						margin: 10
					}
				}
				onPress={() =>
					this.props.navigation.navigate(this.props.destination, {props: this.props})
				}
				title={this.props.buttonTitle}
			/>
      </View>
    );
	}
}
