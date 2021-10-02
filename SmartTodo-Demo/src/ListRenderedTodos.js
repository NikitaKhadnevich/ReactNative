import React, {useState, useMemo} from 'react'
import { 
   View, 
   Text,
   StyleSheet,
   Animated,
   CheckBox,
   TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ListRenderedTodos = ( 
   {
   deleteTodo,
   item,
   setShowModal,
   showModal,
   index,
   DeleteOneTodo} ) => {
   const [todoStatus, setTodoStatus] = useState(false)
   const checkerMemo = useMemo(() => setTodoStatus, [item])

   console.log(`render`)
      const rightSwipe = (progress, dragX) => {
         const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: 'clamp',
         });

         return (
         <TouchableOpacity 
            onPress={() =>  DeleteOneTodo(
               deleteTodo,
               item.id,
               setShowModal,
               showModal)}
               activeOpacity={0.7}>
            <View style={styles.deleteBox}>
               <Animated.Text style={{transform: [{scale: scale}]}}>
               Delete
               </Animated.Text>
            </View>
         </TouchableOpacity>
         );
      }

   return (
      <TouchableOpacity 
         activeOpacity={0.7}>
         <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.containerList}>
               <View style={styles.textBlock}>

                  <Text style={styles.renderIndex}>
                     {index+1}
                  </Text>

                  <Text
                     style={todoStatus ? styles.renderTextDone : styles.renderTextDoing }>
                     {item.title}
                  </Text>

                  <BouncyCheckbox
                     style={{
                     marginLeft: 10,
                     marginRight: 3,
                     width: 25,}}
                     isChecked={todoStatus}
                     fillColor="green"
                     unfillColor="#eee"
                     iconStyle={{ borderColor: "silver" }}
                     onPress={checkerMemo}
                  />
               </View>

               <View style={styles.infoBlock}>
                  <Text style={styles.whenAdded}>
                     Added {item.date}
                  </Text>
                  <Text style={todoStatus ?
                     styles.textStatusDone :
                     styles.textStatusDoing }>
                     {todoStatus ? 'Done' : 'Doing...'}
                  </Text>
               </View>
            </View>
         </Swipeable>
      </TouchableOpacity>

   )
}

const styles = StyleSheet.create({
   containerList: {
      height: 'auto',
      backgroundColor: '#111',
      justifyContent: 'center',
      width: '100%',
   },
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
      paddingHorizontal: 0,
      width: 20
   },
   renderTextDone: {
      width: '85%',
      color: 'rgba(80, 150, 65, 0.65)',
      paddingHorizontal: 5,
      textAlign: 'justify',
      textDecorationLine : 'line-through'
   },
   renderTextDoing: {
      width: '85%',
      color: 'silver',
      paddingHorizontal: 5,
      textAlign: 'justify',
      textDecorationLine : 'none' 
   },
   infoBlock: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   whenAdded: {
      color: 'rgba(168, 168, 168, 0.3)',
      marginBottom: 15,
   },
   textStatusDone: {
      color: 'rgba(80, 150, 65, 0.65)',
      marginBottom: 15,
   },
   textStatusDoing: {
      color: 'rgba(168, 168, 168, 0.3)',
      marginBottom: 15,
   },
   deleteBox: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      marginLeft: 5,
      minWidth: 70,
      minHeight: 50,
      borderRadius: 2,
   },
})

export default ListRenderedTodos

