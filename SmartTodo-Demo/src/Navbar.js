import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Navbar({title}) {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{title}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#333',
      height: '10%',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
   },
   text: {
      color: 'silver',
      fontSize: 22,
   }
})

export default Navbar
