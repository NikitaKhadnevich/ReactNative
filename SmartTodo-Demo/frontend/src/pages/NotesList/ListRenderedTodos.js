import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import CheckBox from "expo-checkbox";
import { fullList } from "../../reduxApi/notesList/notesSelectors";

import { UPDATE_FULL_LIST } from "../../reduxApi/notesList/notesToolkit";

const ListRenderedTodos = ({
  item,
  setShowModal,
  showModal,
  index,
  deleteOneNote,
  updateNoteStatus,
}) => {
  const fullNotesList = useSelector(fullList);

  const checkerWrapper = (id, status) => {
    updateNoteStatus(fullNotesList, id, UPDATE_FULL_LIST, status);
  };

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    console.log("ON NOTELIST", item.inProgess);

    return (
      <>
        <TouchableOpacity
          onPress={() => deleteOneNote(item.id, setShowModal, showModal)}
          activeOpacity={0.7}
        >
          <View style={styles.swipableDelete}>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              Delete
            </Animated.Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("letDeleteTodo, item.id, setShowModal, showModal", "")
          }
          activeOpacity={0.7}
        >
          <View style={styles.swipableEdit}>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              Do it again
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.containerList}>
          <View style={styles.textBlock}>
            <Text style={styles.renderIndex}>{index + 1}</Text>
            <Text
              style={
                item.inProgess ? styles.renderTextDoing : styles.renderTextDone
              }
            >
              {item.title}
            </Text>
            <CheckBox
              style={
                item.inProgess ? styles.doingCheckBox : styles.doneCheckBox
              }
              value={!item.inProgess}
              onValueChange={() => checkerWrapper(item.id, !item.inProgess)}
              color={!item.inProgess ? "green" : "silver"}
            />
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.whenAdded}>Added {item.date}</Text>
            <Text
              style={
                item.inProgess ? styles.textStatusDoing : styles.textStatusDone
              }
            >
              {item.inProgess ? "In progress..." : "Done"}
            </Text>
          </View>
        </View>
      </Swipeable>
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
  doingCheckBox: {
    borderColor: "silver",
    borderRadius: 20,
    width: 20,
    height: 20,
  },
  doneCheckBox: {
    color: "red",
    borderColor: "green",
    borderRadius: 50,
    width: 20,
    height: 20,
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
  renderTextDoing: {
    width: "85%",
    color: "silver",
    paddingHorizontal: 5,
    textAlign: "justify",
    textDecorationLine: "none",
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
  textStatusDone: {
    color: "rgba(80, 150, 65, 0.65)",
    marginBottom: 15,
  },
  textStatusDoing: {
    color: "rgba(168, 168, 168, 0.3)",
    marginBottom: 15,
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

//    // "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
