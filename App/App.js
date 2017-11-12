
import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from "./screens/Home";
import LikedCollectionsScreen from "./screens/LikedCollections";
import ProfileScreen from "./screens/Profile";

export default GeneralNavigator = TabNavigator({

  Home: {
    screen: HomeScreen,
  },

  Profile: {
    screen: ProfileScreen,
  },

  
  LikedCollections: {
    screen: LikedCollectionsScreen,
  },

  

}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
