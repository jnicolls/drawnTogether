import React from 'react';
import {StyleSheet, Text, TextInput,FlatList, View, Button, Alert} from 'react-native';
import styles from "../config/styles.js";

// heavily inspired from https://www.sitepoint.com/authentication-in-react-native-with-firebase/

export default class CreateUserScreen extends React.Component{
  constructor(props){
   super(props);
   console.log(props)
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
           title="Signup"
           onPress={ () => {
             const { email, password } = this.state;
                this.props.screenProps.firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                      this.setState({ error: '', loading: false });

                      user = this.props.screenProps.firebaseApp.auth().currentUser
                      Alert.alert("Current user is " + user.email)
                      user.updateProfile({
                        username: "",
                        bio: "",
                        collections: [],
                        likeCollections: [],
                        interests: [],
                      })
                      this.props.navigation.navigate(ProfileEditings)
                    })
                    .catch((error) => {
                    })
            }


            }


          />


       </View>
   );
 }
}
