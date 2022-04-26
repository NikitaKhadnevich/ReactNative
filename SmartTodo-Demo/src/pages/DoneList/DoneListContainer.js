import React, { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListRenderedTodos from "./ListRenderedTodos";

import {
  SET_FULL_LIST,
  SET_DONE_LIST,
  SET_IN_PROGRESS_LIST,
  UPDATE_FULL_LIST,
} from "../../reduxApi/notesList/notesToolkit";
import { fullList, doneList } from "../../reduxApi/notesList/notesSelectors";

import DoneList from "./DoneList";
import useDeleteNote from "../../helpers/useDeleteNote";
import useUpdateNote from "../../helpers/useUpdateNote";

function DoneListContainer() {
  const fullNotesList = useSelector(fullList);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("Full");

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

  const showDoneNotes = (arr, buttonTitle) => {
    const markedArray = arr.filter((element) => element.inProcess == false);
    dispatch(SET_DONE_LIST(markedArray));
    setButtonStyle(buttonTitle);
  };

  const showDoingNotes = (arr, buttonTitle) => {
    const markedArray = arr.filter((element) => element.inProcess == true);
    dispatch(SET_IN_PROGRESS_LIST(markedArray));
    setButtonStyle(buttonTitle);
  };

  useEffect(() => {
    showDoneNotes(fullNotesList, "Full");
    showDoingNotes(fullNotesList, "Full");
  }, [fullNotesList]);

  return (
    <DoneList>
      {fullNotesList}
      {buttonStyle}
      {showDoneNotes}
      {showDoingNotes}
      {showModal}
      {updateNoteStatus}
      {deleteOneNote}
      {setShowModal}
    </DoneList>
  );
}

export default DoneListContainer;
