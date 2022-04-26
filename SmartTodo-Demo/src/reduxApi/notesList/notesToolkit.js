/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const initNotesList = {
  fullList: [],
  doneList: [],
  inProgressList: [],
};

export const notesList = createSlice({
  name: "notesList-reducer",
  initialState: initNotesList,
  reducers: {
    SET_FULL_LIST: (state, action) => {
      state, (state.fullList = state.fullList.concat([action.payload]));
    },
    UPDATE_FULL_LIST: (state, action) => {
      state, (state.fullList = action.payload);
    },
    SET_DONE_LIST: (state, action) => {
      state, (state.doneList = [...action.payload]);
    },
    UPDATE_DONE_LIST: (state, action) => {
      state, (state.doneList = action.payload);
    },
    SET_IN_PROGRESS_LIST: (state, action) => {
      state, (state.inProgressList = [...action.payload]);
    },
    UPDATE_IN_PROGRESS_LIST: (state, action) => {
      state, (state.fullList = state.fullList.concat([action.payload]));
    },
  },
});

export default notesList.reducer;
export const {
  SET_FULL_LIST,
  UPDATE_FULL_LIST,
  SET_DONE_LIST,
  UPDATE_DONE_LIST,
  SET_IN_PROGRESS_LIST,
  UPDATE_IN_PROGRESS_LIST,
} = notesList.actions;
