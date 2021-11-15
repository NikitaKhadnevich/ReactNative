import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  Modal,
} from "react-native";
import ListRenderedTodos from "./ListRenderedTodos";

function RenderTodo(props) {
  const {
    children: [
      addTodo,
      filtredTodo,
      letDeleteTodo,
      updateStatus,
      letFiltredTodo,
    ],
  } = props;

  console.log(addTodo);
  console.log(filtredTodo);

  const [showModal, setShowModal] = useState(false);
  const [currentState, setCurrentState] = useState("");

  const ListRenderedTodosMemo = useMemo(() => ListRenderedTodos, [addTodo]);

  const DeleteOneTodo = useCallback(
    (letDeleteTodo, id, showMes, mesState) =>
      Alert.alert("Delete this todo?", "", [
        {
          text: "No",
          onPress: () => console.log(`Cancel Pressed on RenderTodo ${id}`),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            letDeleteTodo(id);
            showMes(!mesState);
            setTimeout(() => showMes(mesState), 600);
          },
        },
      ]),
    [addTodo]
  );

  useEffect(() => {
    setCurrentState([...addTodo]);
  }, [addTodo]);

  return (
    <View>
      <Button title="Lets All!" onPress={() => setCurrentState([...addTodo])} />

      <Button
        title="Lets Filter!"
        onPress={() => setCurrentState(letFiltredTodo(addTodo))}
      />

      <Modal animationType={"fade"} transparent={true} visible={showModal}>
        <View style={styles.modal}>
          <Text style={styles.text}>Todo Deleted!</Text>
        </View>
      </Modal>

      <FlatList
        contentContainerStyle={listStyle.containerStyle}
        data={currentState}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ListRenderedTodosMemo
            DeleteOneTodo={DeleteOneTodo}
            letDeleteTodo={letDeleteTodo}
            item={item}
            setShowModal={setShowModal}
            showModal={showModal}
            index={index}
            updateStatus={updateStatus}
          />
        )}
      />
    </View>
  );
}

const listStyle = {
  containerStyle: {
    paddingBottom: "35%",
  },
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: "50%",
  },
  text: {
    fontSize: 20,
    alignItems: "center",
    color: "rgba(180, 60, 60, 0.9)",
    marginTop: 10,
  },
});

export default RenderTodo;
