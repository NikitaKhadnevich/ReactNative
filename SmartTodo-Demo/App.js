import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, Button  } from 'react-native';
import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import RenderTodo from './src/RenderTodo';

export default function App() {
  const [addTodo, SetaddTodo] = useState([])
  const [filtredTodo, SetfiltredTodo] = useState([])
  
  const letAddTodo = (currentTitile) => {
    const newTodo = {
      id: Date.now().toString(),
      title: currentTitile,
      todoStatus: '',
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


  /* Next time i going to do cheker for todoStatus in addTodo-state, but i dont know how identificate elem-id from current element (like e.target.data-path in react)*/
  const updateStatus = (id, status) => {
    const itemData = addTodo.map(item => 
      item.id === id ? {
        ...item,
        todoStatus: status } : item)
    SetaddTodo([...itemData])
  }

  const letFiltredTodo = (arr) => {
    const createFiltredTodo = arr.filter(item => item.todoStatus !== false)
    SetfiltredTodo([...createFiltredTodo])
  }

  return (
    <View style={styles.mainContainer}>
      <Navbar title={'Yours Todo'} />

      <View style={styles.wrapperContainer}>
        <AddTodo onSubmit={letAddTodo}/>
      </View>
      
      <View style={styles.renderBlock}>
        <RenderTodo>
          {addTodo}
          {filtredTodo}
          {letDeleteTodo}
          {updateStatus}
          {letFiltredTodo}
        </RenderTodo>  
      </View>

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
    width:'100%',
  },

});
