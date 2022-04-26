/* eslint-disable import/prefer-default-export */
import { initNotesList } from "../src/reduxApi/notesList/notesToolkit";

export const initialState = {
  notesList: initNotesList,
};
