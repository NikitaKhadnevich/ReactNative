import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

import { SET_FULL_LIST } from "../../reduxApi/notesList/notesToolkit";
import useAddNote from "../../helpers/useAddNote";

function InputNoteField() {
  const [inputValue, setInputValue] = useState("");
  const addNote = useAddNote(inputValue); // Забираем кастомный хук из нашего стора

  const onSubmitWrapper = () => {
    if (inputValue) {
      addNote(SET_FULL_LIST);
      setInputValue("");
    }
  };

  return (
    <View style={styles.addBlock}>
      <TextInput
        style={styles.addInput}
        value={inputValue}
        onChangeText={(info) => setInputValue(info)}
        placeholder="Add todo here..."
        autoCapitalize="sentences"
        keyboardType="web-search"
      />
      {inputValue ? (
        <Button
          title="Add Todo"
          style={styles.addButtom}
          onPress={onSubmitWrapper}
        />
      ) : (
        <Button title="Add Todo" disabled />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addBlock: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addInput: {
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderBottomColor: "silver",
    borderBottomWidth: 2,
    color: "silver",
  },
  addButtom: {
    shadowColor: "silver",
  },
});

export default InputNoteField;
