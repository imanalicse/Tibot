import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
//import {  } from 'react-native-vector-icons/';

import { ChatScreen } from './ChatScreen';
import { ProfileScreen } from './ProfileScreen';

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    var placeHolderArr = [
      'e.g. Feeling tired all the time',
      'e.g. Severe stomach pain',
      'e.g. I have a headache',
      'e.g. Main symptom of pregnancy'
    ];
    this.state = {
      placeHolderText: placeHolderArr[Math.floor(Math.random() * placeHolderArr.length)]
    };
    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { placeHolderText: placeHolderArr[Math.floor(Math.random() * placeHolderArr.length)] };
      });
    }, 2000);
  }

  static navigationOptions = {
    title: 'Tibot',
    tabBarLabel: 'Home',
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

    let placeHolderText = this.state.placeHolderText;

    return (
      <View style={styles.container}>
        <View style={[styles.content, styles.padding]}>
          <View style={styles.logo_area}>
            <Image
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View style={styles.welcome_area}>
            <Text style={styles.welcome_text}>Hi Faisal Basar how can I help you?</Text>
          </View>
          <View style={styles.search_area}>
            {/* <Button style={styles.chatButton}
              title="Chat Start"
              onPress={() => this.props.navigation.navigate('Chat')}
            /> */}
            <Text style={{ borderWidth: 2, borderColor: '#efefef', padding: 10, paddingLeft: 15, fontSize: 20 }}
              onPress={() => this.props.navigation.navigate('Chat')}
            >{placeHolderText}</Text>
            {/* <TextInput
              style={{
                borderColor: '#efefef',
                borderWidth: 2,
                paddingLeft: 10
              }}
              underlineColorAndroid="transparent"
              placeholder='Chat with us'
              onFocus={() => this.props.navigation.navigate('Chat')}
              onKeyPress={() => this.props.navigation.navigate('Chat')}                        
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2
  },
  padding: {
    paddingLeft: 15,
    paddingRight: 15
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  logo_area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  welcome_area: {
    flex: 1,
    // borderWidth: 1,    
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome_text: {
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    color: 'black'
  },
  search_area: {
    flex: 2,
    // borderWidth: 1
  },
  chatButton: {
    backgroundColor: '#DDDDDD',
  }
});