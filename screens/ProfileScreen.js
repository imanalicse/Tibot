import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Me',
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        source={require('../assets/images/profile-icon.png')}
        style={{ width: 32, height: 32 }}
      />
    ),
    headerStyle: {
      backgroundColor: '#9013fe',
    },
    headerTintColor: '#fcf5ff',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen!</Text>
      </View>
    );
  }
}