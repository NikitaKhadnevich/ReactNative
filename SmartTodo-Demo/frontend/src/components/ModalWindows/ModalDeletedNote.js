import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";

export default function ModalDeletedNote({ showModal }) {
  return (
    <>
      <Modal animationType={"fade"} transparent={true} visible={showModal}>
        <View style={styles.modal}>
          <Text style={styles.text}>Todo Deleted!</Text>
        </View>
      </Modal>
    </>
  );
}

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
