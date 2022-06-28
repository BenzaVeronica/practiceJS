export default function task5_3(title, description) {
  console.log(title);
  console.log(description);

  function every1(array, predicateFun) {
    if (array.map((item) => predicateFun(item)).includes(false)) return false;
    return true;
  }

  function every(array, predicateFun) {
    return !array.map((item) => !predicateFun(item));
  }

  console.log(every1([1, 3, 5], (n) => n < 10)); //true
  console.log(every1([2, 4, 16], (n) => n < 10)); //false
  console.log(every1([], (n) => n < 10)); //true
}
