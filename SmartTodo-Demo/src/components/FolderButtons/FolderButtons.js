import React, { useEffect } from "react";
import { StyleSheet, Button, View } from "react-native";
import { useSelector } from "react-redux";
import { fullList } from "../../reduxApi/notesList/notesSelectors";

export default function FolderButtons({ children }) {
  const [
    fullNotesList,
    buttonStyle,
    showDoneNotes,
    showDoingNotes,
    showModal,
    updateNoteStatus,
    deleteOneNote,
    setShowModal,
  ] = children;

  return (
    <View style={styles.buttonContainer}>
      <View
        style={buttonStyle === "Full" ? styles.getButton : styles.basicButton}
      >
        <Button
          title="Full List"
          onPress={() => showAllNotes(fullNotesList, "Full")}
        />
      </View>
      <View
        style={buttonStyle === "Done" ? styles.getButton : styles.basicButton}
      >
        <Button
          title="Done List"
          onPress={() => showDoneNotes(fullNotesList, "Done")}
        />
      </View>
      <View
        style={buttonStyle === "Doing" ? styles.getButton : styles.basicButton}
      >
        <Button
          title="Doing List"
          onPress={() => showDoingNotes(fullNotesList, "Doing")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  basicButton: {
    margin: 5,
  },
  getButton: {
    margin: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
