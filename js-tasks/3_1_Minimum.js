export default function task3_1(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function minimum(a, b) {
    return a > b ? b : a;
  }
  console.log(minimum(0, 10)); //0
  console.log(minimum(0, -10)); //-10
}
