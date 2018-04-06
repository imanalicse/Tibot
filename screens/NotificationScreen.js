import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

export class NotificationScreen extends React.Component {
  static navigationOptions = {
    title: 'Notification',
    tabBarLabel: 'Notification',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return <Image source={require('../assets/images/notification-icon-active.png')} />
      } else {
        return <Image source={require('../assets/images/notification-icon.png')} />
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
        <Text> Notification Screen !</Text>
      </View>
    );
  }
}