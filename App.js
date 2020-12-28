import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import AddBook from './screens/AddBook';
import List from './screens/List';

const AppNavigator = createStackNavigator({
  Home,
  AddBook,
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
