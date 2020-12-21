import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  Home,
  
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}
