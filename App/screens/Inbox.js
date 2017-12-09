import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import styles from "../config/styles";
import ChatBot from 'react-native-chatbot';
import { ThemeProvider } from 'styled-components';

const profileURL = 'http://web.stanford.edu/class/cs147/projects/education/drawtogether/assets/images/melissa.png'
const userURL = 'http://web.stanford.edu/class/cs147/projects/education/drawtogether/assets/images/joseph.png'

export default class InboxScreen extends React.Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image source={require('./inbox.png')} style={styles.icon}></Image>
        )
    }

  render() {

    const steps = [
          {
              id: '0',
              message: 'Hi, I\'m Melissa! I\'m currently studying studio art in college. What would you like to learn more about from me? (Select an option below!)',
              trigger: '1',
          },
          {
            id: '1',
            options: [
                { value: 1, label: 'Contemporary Art', trigger: '2' },
                { value: 2, label: 'Request Feedback', trigger: '4' },
            ],
          },
         {
            id: '2',
            message: 'Contemporary art is my specialty! Fire away!',
            trigger: '7',
         },
        {
            id: '4',
            message: 'I\'d love to give you feedback on your work. What areas of critique like me to focus on?',
            trigger: '5',
        },
        {
            id: '5',
            options: [
                { value: 1, label: 'Overall Feeling', trigger: '6' },
                { value: 2, label: 'Composition', trigger: '6' },
                { value: 3, label: 'Color', trigger: '6' },
            ],
        },
        {
            id: '6',
            message: 'Got it! Send over your piece when you have it ready.',
            trigger: '9',
        },
        {
            id: '7',
            user: true,
            trigger: '8',
        },
          {
              id: '8',
              message: 'I will get back to you on that soon. Bye!',
              end: true,
          },
        {
            id: '9',
            message: 'Look forward to seeing what you come up with soon!',
            end: true
        },

      ];

      const theme = {
          fontFamily: 'Avenir',
          headerBgColor: '#183464',
          botBubbleColor: '#183464',
      };


      return(
          <ThemeProvider theme={theme}>
              <ChatBot botAvatar={profileURL} userAvatar={userURL} steps={steps}/>
          </ThemeProvider>
    );
  }

}





