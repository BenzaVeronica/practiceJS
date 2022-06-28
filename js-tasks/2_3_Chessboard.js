export default function task2_3(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  let n = 8;
  let out = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i % 2) {
        out += '# ';
      } else {
        out += ' #';
      }
    }
    out += '\n';
  }
  console.log(out);
}
