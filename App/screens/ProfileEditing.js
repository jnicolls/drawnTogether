import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";
import ProfileEditor from "../components/ProfileEditor"

export default class ProfileEditing extends React.Component {

  render () {

    return(
      <View>
        <ProfileEditor
          firebaseDatabase={this.props.screenProps.firebaseDatabase}
          firebaseApp={this.props.screenProps.firebaseApp}
        />
      </View>

    );
  }
}
