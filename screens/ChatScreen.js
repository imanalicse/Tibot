import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Babylon',
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
        </View>
      </View>
    );
  }
}