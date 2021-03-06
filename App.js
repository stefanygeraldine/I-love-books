import React, {useEffect} from 'react';
import Navigation from "./app/navigation/Navigations";
import {LogBox} from 'react-native'
import {firebaseApp} from './app/navigation/utils/firebase'

import firebase from "firebase";
import { ThemeProvider } from 'react-native-elements'
import { theme } from './styles/theme'


export default function App() {
  useEffect(() => LogBox.ignoreLogs(['Settings a timer']), []);
  useEffect(()=>{

    firebase.auth().onAuthStateChanged((user)=>{
      console.log('user', user)
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>

  );
}
