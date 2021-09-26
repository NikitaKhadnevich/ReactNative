import React, {useState}  from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function AddTodo( {onSubmit} ) {
   const [inputValue, setinputValue] = useState('')

   const onSubmitWrapper = () => {
      if (inputValue) { 
         onSubmit(inputValue)
         setinputValue('')
      }
      else {
         Alert.alert ('Введите задание')
      }
   }  

   return (
      <View style={styles.addBlock}>
         <TextInput style={styles.addInput}
            value={inputValue}
            onChangeText={info => setinputValue(info)} 
            placeholder='Add todo here...'
            autoCapitalize='sentences'
            keyboardType='name-phone-pad'
         /> 
         <Button title='Add Todo' style={styles.addButtom} onPress={onSubmitWrapper}/>
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
