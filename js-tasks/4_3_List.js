export default function task4_3(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function arrayToList(array) {
    if (array.length)
      return {
        value: array.shift(),
        rest: arrayToList(array),
      };
    return null;
  }

  function listToArray(list) {
    let array = [];
    for (let i = 0; list; i++) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }

  function prepend(value, list) {
    return { value, rest: list };
  }

  function nth1(list, number) {
    if (list) {
      let array = listToArray(list);
      return array[number];
    }
    return undefined;
  }

  function nth(list, number) {
    if (number == 0) return list.value;
    else if (list) return nth(list.rest, number - 1);
    return undefined;
  }

  console.log(arrayToList([10, 20])); // {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]
  console.log(prepend(10, prepend(20, null))); // {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1)); // 20
}
