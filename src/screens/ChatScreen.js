import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, ScrollView } from 'react-native';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages(prevMessages => [...prevMessages, message]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {messages.map((message, index) => (
          <View key={index}>
            <Text>{message}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        onSubmitEditing={sendMessage}
        placeholder="Type your message..."
      />
      <Button onPress={sendMessage} title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});