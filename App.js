import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//? Imports necessary to use Redux Toolkit
import { Provider } from 'react-redux';
import store from './store/store';

//? Imports necessary to use Google Fonts
// import { AppLoading } from 'expo';
// import {
//   useFonts,
//    TODO: add any styles from the same font, separated by a comma
// } from '@expo-google-fonts/';   // TODO: add font name behind the slash

//? Demo only
import Example from './UI/Example';

export default function App() {

  //? Snippets necessary to use Google Fonts
  // let [fontsLoaded] = useFonts({
  //    TODO: add font styles, separated by a comma
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } 

  // else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Example />                     
          <StatusBar style="auto" />
        </View>
      </Provider>  
    );  
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});