import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export class AppointmentScreen extends React.Component {

  static navigationOptions = {
    title: 'Appoitment',
    tabBarLabel: 'Appoitment',
    headerRight: <Button><Text>asd</Text></Button>,
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        source={require('../assets/images/appointment-icon.png')}
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
      <View style={{ flex: 1 }}>
        <View>
          <Text>Appointment Screen !</Text>
        </View>
      </View>
    );
  }
}