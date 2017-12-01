import React, { Component } from 'react';
import {Text, View, Dimensions } from 'react-native';
import {Button} from 'react-native-elements';
import styles from "../../config/styles.js"

const win = Dimensions.get('window');


export default class CollectionOverview extends React.Component{

	constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
			<Button
				backgroundColor="violet"
				buttonStyle = {
					{
						flex:1,
						width:win.width,
						alignSelf:"left",
					}
				}
        onPress={() =>
          this.props.navigation.navigate('Collection', {collectionTitle: this.props.collectionTitle })
        }
				title={this.props.collectionTitle}
			/>
      </View>
    );
	}
}
