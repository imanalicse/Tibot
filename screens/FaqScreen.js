import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export class FaqScreen extends React.Component {

  static navigationOptions = {
    title: 'FAQ', 
    tabBarVisible: false,    
    headerStyle: {
      backgroundColor: '#9013fe',
    },
    headerTintColor: '#fcf5ff',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.help_container}>
            <Text style={styles.help_text}>How can we help?</Text>
        </View>      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  help_container: {
    backgroundColor: '#9013fe'
  },
  help_text:{

  }
});