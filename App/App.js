
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from "./screens/Home";
import LikedCollectionsScreen from "./screens/LikedCollections";
import ProfileScreen from "./screens/Profile";
import YourCollectionsScreen from "./screens/YourCollections";
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

  		navigationOptions:{title:"DrawnTogether"}
 
 	 }
});
