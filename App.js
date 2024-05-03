import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';

import Navigator from './src/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello!</Text> */}
      {/* <Navigator /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "Whitesmoke",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);