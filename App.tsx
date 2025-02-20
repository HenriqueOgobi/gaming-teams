import React from 'react';
import { StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Groups } from './src/screens/Groups';
import { Loading } from './src/components/Loading';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme'

export default function App() {
 const[FontsLoaded]= useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    { FontsLoaded ? <Groups/> : <Loading/> }
    </ThemeProvider>
  );
}