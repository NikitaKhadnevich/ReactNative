export default function badgeCounter(arr) {
  let counter = undefined;
  return function () {
    if (arr.length > 0) {
      counter = arr.length;
      return counter;
    }
    return counter;
  };
}
