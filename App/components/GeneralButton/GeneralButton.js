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
				buttonStyle= {{
							flex:1,
							justifyContent:'center',
							alignSelf:"center",
							//Note, margin only seems work here, can't work from styles.js
							margin: 10,
							backgroundColor:"#00ADDC",
							font:"avenir"
					}}
				onPress={() =>
					this.props.navigation.navigate(this.props.destination, {props: this.props})
				}
				title={this.props.buttonTitle}
			/>
      </View>
    );
	}
}
