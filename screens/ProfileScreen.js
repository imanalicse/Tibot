import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.user_photo_area}>
            <Image style={styles.userPhoto}
              source={require('../assets/images/login-user-photo.png')}
            />
            <Text style={styles.userFullName}>Faisal Basar</Text>
          </View>
          <View style={styles.element_container}>
            <View style={styles.element}>
              <Image style={styles.element_icon}
                source={require('../assets/images/info.png')}
              />
              <View style={styles.element_name}>
                <Text>FAQ</Text>
              </View>
            </View>
            <View style={styles.element}>
              <Image style={styles.element_icon}
                source={require('../assets/images/share.png')}
              />
              <View style={styles.element_name}>
                <Text>Invite Friends</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  content: {
    // paddingLeft: 15,
    // paddingRight: 15
  },
  user_photo_area: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    marginTop: 30,
    marginBottom: 20
  },
  userPhoto: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 0,
    borderColor: '#fff',
  },
  userFullName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  element_container: {
    borderWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  element: {
    margin: 10,
    flexDirection: 'row'
  },
  element_icon: {
  },
  element_name: {
    paddingLeft: 30
  }
});