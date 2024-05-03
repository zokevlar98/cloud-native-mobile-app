import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotImplementedScreen from '../screens/NotImplementedScreen';
import BouttomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import Colors from '../../constants/Colors';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: { 
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitlestyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen 
          name="Root" 
          component={BouttomTabNavigator} 
          options={{ 
            title: "WhatsApp",
            headerRhigt: () => (
              <View style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between', 
                marginRight: 10,
              }}>
                <Octicons name="search" size={22} color={'White'} />
                <MaterialCommunityIcons name="dots-vertical" size={24} color={'White'} />
              </View>
            )
          }} 

        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
