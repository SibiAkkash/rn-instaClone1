import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeTab from './Tabs/HomeTab';
import ProfileTab from './Tabs/ProfileTab';
import MediaTab from './Tabs/MediaTab';
import LikesTab from './Tabs/LikesTab';
import SearchTab from './Tabs/SearchTab';


class HomeScreen extends React.Component {
     static navigationOptions = ({ navigation }) => ({
         headerLeft:<Ionicons name="md-camera" size={32} style={{paddingLeft:10}} />,
         headerTitle:"Instagram",
         headerTitleStyle:{color:'#101010',textAlign:"center", flex:1},  
         headerRight:<EvilIcons name="sc-telegram" size={34} style={{paddingRight:10}} />,
         header:null
    }) 

    render() {
        return (
            <AppContainer/>
          );
    }
  }

const AppTabNavigator = createBottomTabNavigator({

    HomeTab:{
        screen:HomeTab,
    },
    SearchTab:{
        screen:SearchTab,
    },
    MediaTab:{
        screen:MediaTab,
    },
    LikesTab:{
        screen:LikesTab,
    },
    ProfileTab:{
        screen:ProfileTab,
    },


},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition:"bottom",
    tabBarOptions: {
        activeTintColor:'#101010',
        inactiveTintColor:'#d1cece',
        showLabel: false,
        showIcon: true,
    }
});

const AppContainer = createAppContainer(AppTabNavigator);

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  