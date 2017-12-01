
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator, AppRegistry } from 'react-navigation';
import HomeScreen from "./screens/Home";
import LikedCollectionsScreen from "./screens/LikedCollections";
import ProfileScreen from "./screens/Profile";
import YourCollectionsScreen from "./screens/YourCollections";
import MakeCollectionScreen from "./screens/MakeCollection"
import SearchResultsScreen from "./screens/SearchResults"
import CollectionScreen from "./screens/Collection"
import ExpandedInfoScreen from "./screens/ExpandedInfo";
import FullscreenImageScreen from "./screens/FullscreenImage";
import IndividualImageScreen from "./screens/IndividualImage"
import LoginScreen from "./screens/Login"
import CreateUserScreen from "./screens/CreateUser"
import ProfileEditingScreen from "./screens/ProfileEditing"
import { Header } from 'react-native-elements';
import firebase from 'firebase'; // 4.3.1




const GeneralNavigator  = StackNavigator({

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
  },

  Collection:{
    screen: CollectionScreen
  },

	ExpandedInfo:{
  		screen:ExpandedInfoScreen
	},

    FullscreenImage:{
  	    screen: FullscreenImageScreen
    },

  MakeCollection:{
    screen: MakeCollectionScreen,
  },

  IndividualImage:{
    screen: IndividualImageScreen
  },

  Login:{
    screen: LoginScreen
  },

  CreateUser:{
    screen:CreateUserScreen
  },

  ProfileEditor:{
    screen:ProfileEditingScreen
  },

});

export default class DrawnTogether extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation);
    }
  render(){
    const config = {
      apiKey: "AIzaSyBWgYtEL1UkTJua2YKW40Za8EQMtC9sO3I",
      authDomain: "drawnt-b43c0.firebaseapp.com",
      databaseURL: "https://drawnt-b43c0.firebaseio.com",
      projectId: "drawnt-b43c0",
      storageBucket: "drawnt-b43c0.appspot.com",
      messagingSenderId: "566894357868"
    };

    try {
      firebase.initializeApp(config);
      console.log('Firebase loaded');
    } catch (e) {
      console.log('App reloaded, so firebase did not re-initialize');
    }

    return (
      <GeneralNavigator
        screenProps={
          {
            firebaseDatabase: firebase.database(),
            firebaseApp: firebase.app(),
            user: []
          }
        }
        backgroundColor="#ffc1c1"
      />
    )
  }
}
