export default function task3_3(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  function countChar(string, char) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
      if (string[index] === char) count++;
    }
    return count;
  }
  function countBs(string) {
    return countChar(string, 'B');
  }
  console.log(countBs('BBC')); // 2
  console.log(countChar('kakkerlak', 'k')); // 4
}
