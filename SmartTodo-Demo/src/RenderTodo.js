import React, {useState, useMemo, useCallback}  from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert, Modal } from 'react-native';
import ListRenderedTodos from './ListRenderedTodos';


function RenderTodo( {letAddTodo, dataForRender, deleteTodo } ) {
   const [showModal, setShowModal] = useState(false);
   const ListRenderedTodosMemo = useMemo(() => ListRenderedTodos, [dataForRender])

   const DeleteOneTodo = useCallback(
      (deleteData, id, showMes, mesState) =>
      Alert.alert(
         "Delete this todo?",
         "",
         [
            {
               text: "No",
               onPress: () => console.log("Cancel Pressed on RenderTodo"),
               style: "cancel"
            },
            { text: "Yes", onPress: () => {
               deleteData(id)
               showMes(!mesState); 
               setTimeout(() => showMes(mesState), 600)
               }
            }
         ]
      ),
      [showModal],
   )

   return (
      <View>
         <Modal
         animationType={'fade'}
         transparent={true}
         visible={showModal}>
            <View style={styles.modal} >
               <Text style={styles.text}>Todo Deleted!</Text>
            </View>
         </Modal>

         <FlatList 
            contentContainerStyle={listStyle.containerStyle}
            data={dataForRender}
            keyExtractor={item => item.id.toString()}
            renderItem={( {item, index} ) => (
               <ListRenderedTodosMemo
                  DeleteOneTodo={DeleteOneTodo}
                  deleteTodo={deleteTodo}
                  item={item}
                  setShowModal={setShowModal}
                  showModal={showModal}
                  index={index}/>   
            )}
         />
      </View>
   )
}

const listStyle = {
   containerStyle: {
      paddingBottom: '35%'
   }
}

const styles = StyleSheet.create({
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      paddingVertical: '50%',
   },
   text: {
      fontSize: 20,
      alignItems: 'center',
      color: 'rgba(180, 60, 60, 0.9)',
      marginTop: 10,
   },
})

export default RenderTodo 

