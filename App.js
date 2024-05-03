import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native";
import BG from './assets/images/BG.png';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { Image } from 'react-native';

Amplify.configure(awsconfig);

const BG_IMAGE = Image.resolveAssetSource(BG).uri;

function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: BG_IMAGE}} style={{width: 200, height: 200}} />
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