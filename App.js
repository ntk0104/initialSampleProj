/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/Home'
import SecondScreen from './src/screens/Second'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
