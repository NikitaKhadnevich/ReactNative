import React, { useState, useMemo, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, View, Alert, Text } from "react-native";
import ListRenderedTodos from "./ListRenderedTodos";
import FolderButtons from "../../components/FolderButtons/FolderButtons";
import ModalDeletedNote from "../../components/ModalWindows/ModalDeletedNote";

function NoteList({ children }) {
  const [
    fullNotesList,
    buttonStyle,
    showAllNotes,
    showDoneNotes,
    showDoingNotes,
    showModal,
    updateNoteStatus,
    deleteOneNote,
    setShowModal,
  ] = children;

  const ListRenderedTodosMemo = useMemo(
    () => ListRenderedTodos,
    [fullNotesList]
  );

  return (
    <View style={styles.renderBlock}>
      {/* <FolderButtons>{children}</FolderButtons> */}
      {fullNotesList.length ? (
        <FlatList
          contentContainerStyle={listStyle.containerStyle}
          data={fullNotesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ListRenderedTodosMemo
              deleteOneNote={deleteOneNote}
              item={item}
              setShowModal={setShowModal}
              showModal={showModal}
              index={index}
              updateNoteStatus={updateNoteStatus}
            />
          )}
        />
      ) : (
        <View style={styles.greetingView}>
          <Text style={styles.greetingText}>Add Note...</Text>
        </View>
      )}
      <ModalDeletedNote showModal={showModal} />
    </View>
  );
}

const listStyle = {
  containerStyle: {
    paddingBottom: "65%",
  },
};

const styles = StyleSheet.create({
  renderBlock: {
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
  },
  greetingView: {
    display: "flex",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "200",
    color: "rgba(135, 135, 135, 1)",
  },
});

export default NoteList;
