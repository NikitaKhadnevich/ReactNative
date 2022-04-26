import { useDispatch } from "react-redux";

export default function useAddNote(currentTitile) {
  const dispatch = useDispatch();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const newTodo = {
    id: Date.now().toString(),
    title: currentTitile,
    inProcess: false,
    date: `${date} ${time}`,
  };
  return (requestAction) => {
    if (newTodo) {
      dispatch(requestAction(newTodo));
    }
  };
}
