export default function task4_4(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    let isNotNull = obj1 !== null && obj2 !== null;
    let isObject = typeof obj1 === 'object' && typeof obj2 === 'object';
    if (isNotNull && isObject) {
      let keys1 = Object.keys(obj1);
      for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
      }
      return true;
    }
    return false;
  }
  let obj = { here: { is: 'an' }, object: 2 };
  console.log(deepEqual(obj, obj)); // true
  console.log(deepEqual(obj, { here: 1, object: 2 })); // false
  console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })); // true
}
