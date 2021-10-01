
export const letAddTodo = (state) => {
   const newTodo = {
      id: Date.now().toString(),
      title: title,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
   }
   state(prev => [
      ...prev,
      newTodo
   ]
)
}

export const letDeleteTodo = (state) => {
   state(prev => prev.filter(item => item.id !== id))
 } /* We have to delete my todo if item.id == id, or elem have to save if item.id !== id. Remember, filter return TRUE data */