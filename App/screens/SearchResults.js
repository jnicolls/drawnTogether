import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from "../config/styles.js";
import { TabNavigator } from 'react-navigation';
import UsersSearchResultsScreen from "./UsersSearchResults";
import CollectionsSearchResultsScreen from "./CollectionsSearchResults";
import InterestsSearchResultsScreen from "./InterestsSearchResults";
import FilteredResults from "../components/FilteredResults";

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  render() {

    const{navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Text> These are the search results for {this.props.navigation.state.params.searchQuery} </Text>
          <FilteredResults></FilteredResults>
      </View>
    );
  }
}

const SearchNavigator = TabNavigator({
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
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

SearchNavigator.navigationOptions = {
    title: "Search example",
    tabBar: {
        label: 'SearchTest',
    }
};


