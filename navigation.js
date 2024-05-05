import React from 'react';
import { Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import NotImplementedScreen from './src/screens/NotImplementedScreen';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Search"
            color="#fff"
          />
        ),
        headerLeft: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Settings"
            color="#fff"
          />
        ),
      }}
    >
      <Stack.Screen name="Chats" component={ChatScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Settings" component={NotImplementedScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack;