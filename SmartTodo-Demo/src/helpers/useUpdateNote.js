import { useDispatch } from "react-redux";

export default function useUpdateNote() {
  const dispatch = useDispatch();
  return (arr, id, requestAction, status) => {
    const itemData = arr.map((item) =>
      item.id === id ? { ...item, inProcess: status } : item
    );
    dispatch(requestAction(itemData));
  };
}
