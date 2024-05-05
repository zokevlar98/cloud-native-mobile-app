import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotImplementedScreen() {
  return (
    <View style={styles.container}>
      <Text>This feature has not been implemented yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});