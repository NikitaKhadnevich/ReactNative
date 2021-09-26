import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function RenderTodo( {dataForRender, deleteTodo} ) {
   return (
      <FlatList
         data={dataForRender}
         keyExtractor={item => item.id.toString()}
         renderItem={({item}) => (

            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log(item.id) }
            onLongPress={() => deleteTodo(item.id)}>
               <Text style={styles.renderText}>
                  {item.title}
               </Text>
            </TouchableOpacity>
         )}
      />
   )
}

const styles = StyleSheet.create({
   renderText: {
      color: 'silver',
      borderWidth: 1,
      borderColor: '#bcd4d436',
      borderRadius: 4,
      width: '100%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      marginVertical: 5,
   }
})



export default RenderTodo
