import { useDispatch } from "react-redux";

export default function useDeleteNote() {
  const dispatch = useDispatch();
  return (arr, id, requestAction) => {
    const clearedList = arr.filter((item) => item.id !== id);
    dispatch(requestAction(clearedList));
  };
}
