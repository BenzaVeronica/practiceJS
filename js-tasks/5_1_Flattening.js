export default function task5_1(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  let arrays = [[1, 2, 3], [4, 5], [6]];
  console.log(arrays.reduce((previousArr, currentArr) => previousArr.concat(currentArr)));
}
