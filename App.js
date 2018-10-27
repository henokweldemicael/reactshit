import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'

import Loading from './src/Loading'
import Signup from './src/Signup'
import Login from './src/Login'
import Main from './src/Main'


const App = createSwitchNavigator(
  {
    Loading,
    Signup,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
