import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import RenderTodo from './src/RenderTodo';

export default function App() {
  const [addTodo, SetaddTodo] = useState([])
  

  const letAddTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    }
    SetaddTodo(prev => [
        ...prev,
        newTodo
      ]
    )
  }

  const letDeleteTodo = (id) => {
    SetaddTodo(prev => prev.filter(item => item.id !== id))
  } /* We have to delete my todo if item.id == id, or elem have to save if item.id !== id. Remember, filter return TRUE data */

  return (
    <View style={styles.mainContainer}>
      <Navbar title={'Yours Todo'} />
      <View style={styles.wrapperContainer}>
        <AddTodo onSubmit={letAddTodo}/>
      </View>
      <View style={styles.renderBlock}>
        <RenderTodo
          dataForRender={addTodo}
          deleteTodo={letDeleteTodo} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#111',
    justifyContent: 'flex-start',
  },
  wrapperContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  renderBlock: {
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width:'100%'
  },

});
