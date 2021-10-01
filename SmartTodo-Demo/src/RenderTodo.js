import React, {useState}  from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert, Modal } from 'react-native';


const DeleteOneTodo = (deleteData, id, showMes, mesState) =>
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
         setTimeout(() => showMes(mesState), 800)
         }
      }
   ]
);

function RenderTodo( {dataForRender, deleteTodo} ) {
   const [showModal, setShowModal] = useState(false);
   
   return (
      <View>
         <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}>
            <View style={styles.modal} >
               <Text style={styles.text}>Todo Deleted!</Text>
            </View>
         </Modal>

         <FlatList contentContainerStyle={listStyle.containerStyle}
         data={dataForRender}
         keyExtractor={item => item.id.toString()}
         renderItem={({item, index} ) => (
            
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Pressed')}
            onLongPress={() => {
               DeleteOneTodo(deleteTodo, item.id, setShowModal, showModal)
               }
            }>
               <View style={styles.textBlock}>
                  <Text style={styles.renderIndex}>
                     {index+1}
                  </Text>
                  <Text style={styles.renderText}>
                     {item.title}
                  </Text>
                  <Text style={styles.renderInfo}>
                     Hold to Delete
                  </Text>
               </View>
               
               <View >
                  <Text style={styles.whenAdded}>
                     Added {item.date}
                  </Text>
               </View>
            </TouchableOpacity>
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
   flatBlock: {
      marginBottom: 50
   },
   textBlock: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#bcd4d436',
      borderRadius: 4,
      width: '100%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      marginVertical: 5,
   },
   renderIndex: {
      color: 'silver',
      paddingHorizontal: 2,
      width: '5%'
   },
   renderText: {
      width: '79%',
      color: 'silver',
      paddingHorizontal: 10,
      textAlign: 'justify'
   },
   renderInfo: {
      width: '16%',
      color: 'rgba(168, 168, 168, 0.3)',
      paddingHorizontal: 5,
   },
   whenAdded: {
      color: 'rgba(168, 168, 168, 0.3)',
      marginBottom: 15,
   },
   modal: {
      flex: 5,
      alignItems: 'center',
      backgroundColor: 'rgba(168, 168, 168, 0.1)',
      padding: 100,
   },
   text: {
      color: '#3f2949',
      marginTop: 10,
   },
})

export default RenderTodo
