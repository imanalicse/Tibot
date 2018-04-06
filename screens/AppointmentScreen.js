import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export class AppointmentScreen extends React.Component {

  static navigationOptions = {
    title: 'Appoitment',
    tabBarLabel: 'Appoitment',       
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return <Image source={require('../assets/images/appointment-icon-active.png')} />
      } else {
        return <Image source={require('../assets/images/appointment-icon.png')} />
      }
    },  
    headerStyle: {
      backgroundColor: '#9013fe',
    },
    headerTintColor: '#fcf5ff',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
        <View>
          <Text>Appointment Screen !</Text>
        </View>
      </View>
    );
  }
}