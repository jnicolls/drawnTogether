import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";
import { TabNavigator } from 'react-navigation';
import UsersSearchResultsScreen from "./UsersSearchResults";
import CollectionsSearchResultsScreen from "./CollectionsSearchResults";
import InterestsSearchResultsScreen from "./InterestsSearchResults";

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  render() {

    const{navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text> These are the search results for {this.props.navigation.state.params.searchQuery} </Text>
      </View>
    );
  }
}


const SearchTabs = TabNavigator({
    Collections: {
        screen: CollectionsSearchResultsScreen,
    },
    Users: {
        screen: UsersSearchResultsScreen,
    },
    Interests: {
        screen: InterestsSearchResultsScreen,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});


