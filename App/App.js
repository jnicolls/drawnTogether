
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator, AppRegistry } from 'react-navigation';
import HomeScreen from "./screens/Home";
import LikedCollectionsScreen from "./screens/LikedCollections";
import ProfileScreen from "./screens/Profile";
import YourCollectionsScreen from "./screens/YourCollections";
import SearchResultsScreen from "./screens/SearchResults"
import CollectionScreen from "./screens/Collection"
import { Header } from 'react-native-elements';

export default GeneralNavigator = StackNavigator({

  	MyTab:{
	  	screen: TabNavigator({


		  Home: {
		    screen: HomeScreen,
		  },

		  Profile: {
		    screen: ProfileScreen,
		  },


		  LikedCollections: {
		    screen: LikedCollectionsScreen,
		  },

		  YourCollections: {
		    screen: YourCollectionsScreen,
		  },


		}, {
		  tabBarPosition: 'top',
		  animationEnabled: true,
		  tabBarOptions: {
		    activeTintColor: '#e91e63',
		  },
		}),


    navigationOptions:{title:"DrawnTogether"},



  },

  SearchResults:{
    screen: SearchResultsScreen,
  }

  Collection:{
    screen: CollectionScreen
  }

});
