export default function task3_2(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function isEven(number) {
    let current = number;
    if (current === 0) return true;
    if (current === 1) return false;
    if (current < 0) return isEven(-current);
    current = current - 2;
    return isEven(current);
  }
  console.log(isEven(50)); // true
  console.log(isEven(75)); // false
  console.log(isEven(-1)); // false
}
