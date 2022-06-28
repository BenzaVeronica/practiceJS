export default function task4_1(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  function sum(array) {
    let summa = 0;
    for (let item of array) {
      summa += item;
    }
    return summa;
  }
  console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
  console.log(range(5, 2, -1)); // [5, 4, 3, 2]
  console.log(sum(range(1, 10))); // 55
}
