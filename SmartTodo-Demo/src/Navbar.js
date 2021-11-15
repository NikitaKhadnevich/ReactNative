import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

function Navbar({ title }) {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#333",
    height: "10%",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    ...ifIphoneX(
      {
        height: 90,
      },
      {
        height: 70,
      }
    ),
  },
  text: {
    color: "silver",
    fontSize: 22,
    ...ifIphoneX(
      {
        paddingTop: 30,
      },
      {
        paddingTop: 15,
      }
    ),
  },
});

export default Navbar;
