import React, { useState, useCallback, useEffect } from "react";
import { Alert, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fullList } from "../../reduxApi/notesList/notesSelectors";
import NoteList from "./NoteList";
import useDeleteNote from "../../helpers/useDeleteNote";
import useUpdateNote from "../../helpers/useUpdateNote";
import {
  SET_FULL_LIST,
  SET_DONE_LIST,
  SET_IN_PROGRESS_LIST,
  UPDATE_FULL_LIST,
} from "../../reduxApi/notesList/notesToolkit";

function NoteListContainer() {
  const fullNotesList = useSelector(fullList);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const deleteNote = useDeleteNote();
  const updateNoteStatus = useUpdateNote();

  // ---------------------------------------//

  const deleteOneNote = useCallback(
    (id, showMes, mesState) =>
      Alert.alert("Delete this todo?", "", [
        {
          text: "No",
          onPress: () => console.log(`Cancel Pressed on RenderTodo ${id}`),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            deleteNote(fullNotesList, id, UPDATE_FULL_LIST);
            showMes(!mesState);
            setTimeout(() => showMes(mesState), 600);
          },
        },
      ]),
    [fullNotesList]
  );

  const showAllNotes = (arr) => {
    dispatch(UPDATE_FULL_LIST(arr));
  };

  const showDoneNotes = (arr) => {
    const markedArray = arr.filter((element) => !element.inProgess);
    dispatch(SET_DONE_LIST(markedArray));
  };

  const showDoingNotes = (arr) => {
    const markedArray = arr.filter((element) => element.inProgess == true);
    dispatch(SET_IN_PROGRESS_LIST(markedArray));
  };

  return (
    <NoteList>
      {fullNotesList}
      {showAllNotes}
      {showDoneNotes}
      {showDoingNotes}
      {showModal}
      {updateNoteStatus}
      {deleteOneNote}
      {setShowModal}
    </NoteList>
  );
}

export default NoteListContainer;
