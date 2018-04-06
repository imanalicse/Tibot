import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import ChatBot from 'react-native-chatbot';
import ChatFlow from "react-native-chatflow";


const chatScript = {
  "_start": "hello",
  "hello": {
    "text": "Hello, Welcome to our Tibot",
    "next": "getName"
  },
  "getName": {
    "text": "First up, what's your name?",
    "input": "text",
    "placeholder": "Enter your name",
    "field": "name",
    "next": "getAge"
  },
  "getAge": {
    "text": "What is your age?",
    "input": "text",
    "placeholder": "Enter your age please",
    "field": "age",
    "next": "getGender"
  },
  "getGender": {
    "text": "Choose you gender",
    "field": "gender",
    "options": [
      { "value": "male", "text": "Male" },
      { "value": "female", "text": "Female" }
    ]
  }
}


export class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Tibot',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return <Image source={require('../assets/images/home-icon-active.png')} />
      } else {
        return <Image source={require('../assets/images/home-icon.png')} />
      }
    },
    headerStyle: {
      backgroundColor: '#9013fe',
    },
    headerTintColor: '#fcf5ff',
  };  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>        
        <View style={{ flex: 1 }}>
          <Text> Chat Screen </Text>          
          <ChatFlow
            chatScript={chatScript}
          />
        </View>
      </View>
    );
  }
}