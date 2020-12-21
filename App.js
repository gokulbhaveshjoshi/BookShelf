import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import AddItem from './screens/AddItem';
import List from './screens/List';

const AppNavigator = createStackNavigator({
  Home,
  AddItem,
  List  
},
{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}
