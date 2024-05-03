import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native";
import BG from './assets/images/BG.png';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { Image } from 'react-native';
import Navigation from './src/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import Colors from './src/constants/Colors';
// import BG from './assets/images/BG.png';
Amplify.configure(awsconfig);


function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <Image source={BG} style={{ width: 200, height: 200 }} /> */}
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);


// const Page = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={{uri: BG_IMAGE}} style={{width: 200, height: 200}} />
//       <Text>Home</Text>
//     </View>
//   );
// }