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
import ModalScreen from './src/screens/Modal'


const contentNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createStackNavigator(
  {
    content: contentNavigator,
    modal: ModalScreen
  },
  {
    headerMode: 'none',
    initialRouteName: "content",
    transparentCard: true, // make the background of the screen is transparent if it is not defined background color: (by default it will have backgroundColor = 'white')
    mode: 'modal' // slide from the bottom to the top like as the animation of modal
  }
);

export default createAppContainer(AppNavigator);
