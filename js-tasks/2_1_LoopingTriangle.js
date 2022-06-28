export default function task2_1(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######

  let hash = '#';
  while (hash.length <= 7) {
    console.log(hash);
    hash += '#';
  }
}
