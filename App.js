import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import Header from './src/components/Header/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
      <Routes />
  
  );
}