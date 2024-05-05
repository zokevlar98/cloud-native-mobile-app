import { NavigationContainer } from "@react-navigation/native";
import Chat from "./pages/Chats";
import Status from "./pages/Status";
import Camera from "./pages/StatusCamera";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="chat" component={Chat} />
        
        
          <Stack.Screen name="status" component={Status} />
        
    
          <Stack.Screen name="camera" component={Camera} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}