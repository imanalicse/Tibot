
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from './screens/HomeScreen';
import { AppointmentScreen } from './screens/AppointmentScreen';
import { NotificationScreen } from './screens/NotificationScreen';
import { ProfileScreen } from './screens/ProfileScreen';
//import { ChatScreen } from './screens/ChatScreen';

const HomeStact = StackNavigator({
  Home: { screen: HomeScreen },
  //Chat: { screen: ChatScreen },
});
export default TabNavigator({
  Home: { screen: HomeStact },
  Appointment: { screen: AppointmentScreen },
  Notification: { screen: NotificationScreen },
  Me: { screen: ProfileScreen },
}, {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;      
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-options${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'Notification') {
    //       //iconName = `ios-notifications${focused ? '' : '-outline'}`;
    //       iconName = `ios-notifications`;
    //       alert(iconName)
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      //activeTintColor: '#8800fe',
      inactiveTintColor: '#fff',
      showIcon: true
    },
    animationEnabled: false,
    swipeEnabled: false,
  });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View>
//         <Text>
//           Welcome to React Native!
//         </Text>  
//         <HomeScreen/>          
//       </View>
//     );
//   }
// }