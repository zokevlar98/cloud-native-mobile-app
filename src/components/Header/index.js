import React, { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons/'

import { Container, Top, Logo, ButtonBox, Button, Tabs, Tab, Text } from './styles';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

export default function Header({ children, name }) {
  const navigation = useNavigation();

  return (
    <>
      <Container style={{paddingTop: 50}}>
        <Top>
          <Logo>WhatsApp</Logo>
          <ButtonBox>
            <Button>
              <MaterialIcons name='search' size={28} color='#fff' />
            </Button>
            <Button>
              <MaterialIcons name='more-vert' size={28} color='#fff' />
            </Button>
          </ButtonBox>
        </Top>
        <Tabs>
          <Tab active={name === 'camera'}>
            <TouchableOpacity onPress={() => navigation.navigate('camera')}>
              <MaterialIcons name='camera-alt' size={24} color='rgba(255, 255, 255, 0.6)' />
            </TouchableOpacity>
          </Tab>
          <Tab active={name === 'chat'}>
            <TouchableOpacity onPress={() => navigation.navigate('chat')}>
              <Text>CONVERSAS</Text>
            </TouchableOpacity>
          </Tab>
          <Tab active={name === 'status'}>
            <TouchableOpacity onPress={() => navigation.navigate('status')}>
              <Text>STATUS</Text>
            </TouchableOpacity>
          </Tab>
        </Tabs>
      </Container>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </>
  );
}
