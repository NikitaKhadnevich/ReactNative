import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

import Navbar from './src/components/Navbar/Navbar';
import AddTodo from './src/components/InputNoteField/InputNoteField';
import TabsNavigator from './src/components/TabsNavigator/TabsNavigator';

import store from './store';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <View style={styles.mainContainer}>
          <Navbar title={'Yours Todo'} />
          <AddTodo />
          <NavigationContainer>
            <TabsNavigator />
          </NavigationContainer>
        </View>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#111',
    justifyContent: 'flex-start',
  },
});
