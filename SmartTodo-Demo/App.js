import React, { useState } from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Navbar from "./src/components/Navbar/Navbar";
import AddTodo from "./src/components/InputNoteField/InputNoteField";
import NoteListContainer from "./src/pages/NotesList/NoteListContainer";
import DoneListContainer from "./src/pages/DoneList/DoneListContainer";

import store from "./store";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <Navbar title={"Yours Todo"} />
        <AddTodo />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false, // Скроем хэдер для более красивого внешнего вида
            }}
          >
            <Tab.Screen name="NoteL ist" component={NoteListContainer} />
            <Tab.Screen
              name="Done List"
              component={DoneListContainer}
              options={{ tabBarBadge: 3 }} // Можно добавлять баджеты к иконкам
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#111",
    justifyContent: "flex-start",
  },
});
