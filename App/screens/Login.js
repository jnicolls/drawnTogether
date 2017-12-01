import React from 'react';
import {StyleSheet, Text, TextInput,FlatList, View, Button, Alert, AsyncStorage} from 'react-native';
import styles from "../config/styles.js";

// heavily inspired from https://www.sitepoint.com/authentication-in-react-native-with-firebase/

export default class LoginScreen extends React.Component{
  constructor(props){
   super(props);

   this.state = {
     loaded: true,
     email: '',
     password: ''
   };

 }




 goToLogin(){
   this.props.navigator.push({
     component: Login
   });
 }



 render() {
   return (
       <View>

          <TextInput
               onChangeText={(text) => this.setState({email: text})}
               value={this.state.email}
               placeholder={"Email Address"}
           />
         <TextInput
           onChangeText={(text) => this.setState({password: text})}
           value={this.state.password}
           secureTextEntry={true}
           placeholder={"Password"}
         />
         <Button
           title="Login"
           onPress={ () => {
             this.props.screenProps.firebaseApp.auth().onAuthStateChanged(
               (user) => {
                 this.forceUpdate();
                 console.log("onAuthStateChanged: " + !!user);
               }
             );
             const { email, password } = this.state;
             this.props.screenProps.firebaseApp.auth().signInWithEmailAndPassword(email, password)
              .then(() => {
                this.setState({ error: '', loading: false });
            //    Alert.alert("You have logged in.")
                user = this.props.screenProps.firebaseApp.auth().currentUser
                Alert.alert("Current user is " + user.email)
              })
              .catch(() => {
                //Login was not successful, let's create a new account
                this.props.screenProps.firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                      this.setState({ error: '', loading: false });

                  //    firebase.auth().onAuthStateChanged( user => {
                    //    if (user) { this.props.screenProps.user.set( user) }
                    //  });

                      console.log(this.props.screenProps)
                      Alert.alert("Current user is " + user.email)
                    })
                    .catch((error) => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                        Alert.alert("You have failed to create an account, please try again.")
                    });
                });
            }
          }

          />


       </View>
   );
 }
}
