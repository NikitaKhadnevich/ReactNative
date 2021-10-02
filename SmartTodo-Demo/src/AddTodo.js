import React, {useState}  from 'react'
import {  } from 'react-native';
import { StyleSheet, View, TextInput, Button, SafeAreaView } from 'react-native';


function AddTodo( {onSubmit} ) {
   const [inputValue, setinputValue] = useState('')

   const onSubmitWrapper = () => {
      if (inputValue) { 
         onSubmit(inputValue)
         setinputValue('')
      }
      else {
      }
   }  

   return (
      <View style={styles.addBlock}>
         <TextInput style={styles.addInput}

            value={inputValue}
            onChangeText={info => setinputValue(info)} 
            placeholder='Add todo here...'
            autoCapitalize='sentences'
            keyboardType='web-search'
         /> 
         {inputValue ? 
            <Button 
            title='Add Todo' 
            style={styles.addButtom}
            onPress={onSubmitWrapper}/> :

            <Button 
            title='Add Todo' 
            disabled/>
         }
      </View>
   )
}

const styles = StyleSheet.create({
   addBlock: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   addInput: {
      padding:10,
      width: '70%',
      borderStyle: 'solid',
      borderBottomColor: 'silver',
      borderBottomWidth: 2,
      color: 'silver',
   },
   addButtom: {
      shadowColor: 'silver'
   }
})

export default AddTodo
