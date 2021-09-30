import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';



const DeleteOneTodo = (deleteData, id) =>
Alert.alert(
   "Delete this todo?",
   "",
   [
   {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
   },
   { text: "OK", onPress: () => {
      deleteData(id);
      Alert.alert('Todos Deleted!') 
   }
}
   ]
);


function RenderTodo( {dataForRender, deleteTodo} ) {
   
   return (
      <FlatList
         data={dataForRender}
         keyExtractor={item => item.id.toString()}
         renderItem={({item, index} ) => (

            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Pressed')}
            onLongPress={() => {
               DeleteOneTodo(deleteTodo, item.id)
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
   )
}

const styles = StyleSheet.create({
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
      width: '3%'
   },
   renderText: {
      width: '82%',
      color: 'silver',
      paddingHorizontal: 10,
      textAlign: 'justify'
   },
   renderInfo: {
      width: '15%',
      color: 'rgba(168, 168, 168, 0.3)',
      paddingHorizontal: 5,
   },
   whenAdded: {
      color: 'rgba(168, 168, 168, 0.3)',
      marginBottom: 15,
   }
})

export default RenderTodo
