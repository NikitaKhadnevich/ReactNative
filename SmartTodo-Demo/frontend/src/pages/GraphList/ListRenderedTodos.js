import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { fullList } from "../../reduxApi/notesList/notesSelectors";

import { UPDATE_FULL_LIST } from "../../reduxApi/notesList/notesToolkit";

const ListRenderedTodos = ({ item, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.containerList}>
        <View style={styles.textBlock}>
          <Text style={styles.renderIndex}>{index + 1}</Text>
          <Text style={styles.renderTextDone}>{item.title}</Text>
          <Text style={styles.textStatusDone}>Done !</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.whenAdded}>Added {item.date}</Text>
          <Text style={styles.whenFinished}>Finished {item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerList: {
    height: "auto",
    backgroundColor: "#111",
    justifyContent: "center",
    width: "100%",
  },
  hideContainerLst: {
    display: "none",
  },
  flatBlock: {
    marginBottom: 50,
  },
  wrapperSwiper: {
    display: "flex",
    flexDirection: "row",
  },
  textBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bcd4d436",
    borderRadius: 4,
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 5,
  },
  renderIndex: {
    color: "silver",
    paddingHorizontal: 0,
    width: 20,
  },
  renderTextDone: {
    width: "85%",
    color: "rgba(80, 150, 65, 0.65)",
    paddingHorizontal: 5,
    textAlign: "justify",
    textDecorationLine: "line-through",
  },
  infoBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whenAdded: {
    color: "rgba(168, 168, 168, 0.3)",
    marginBottom: 15,
  },
  whenFinished: {
    color: "rgba(168, 168, 168, 0.3)",
    marginBottom: 15,
  },
  textStatusDone: {
    textAlignVertical: "center",
    color: "rgba(80, 150, 65, 0.65)",
    textAlign: "justify",
  },
  swipableDelete: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    minWidth: 50,
    minHeight: 50,
    height: "auto",
    borderRadius: 2,
  },
  swipableEdit: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    flex: 1,
    maxHeight: 50,
    height: "auto",
    borderRadius: 2,
  },
});

export default ListRenderedTodos;
