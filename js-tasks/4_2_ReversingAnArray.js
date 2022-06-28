export default function task4_2(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length; i++) {
      array.unshift(parseInt(array.splice(i, 1)));
    }
    return array;
  }

  console.log(reverseArray(['A', 'B', 'C'])); // ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue); // [5, 4, 3, 2, 1]
}
