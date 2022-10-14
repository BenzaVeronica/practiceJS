const { CONSOLE_TASKS } = require('./data.js');
console.log(CONSOLE_TASKS[3].title);
console.log(CONSOLE_TASKS[3].description);
console.log('\nResult:');

const { statSync, readdirSync, readFileSync } = require('fs');

let searchTerm = new RegExp(process.argv[2]);
for (let arg of process.argv.slice(3)) {
  search(arg);
}

function search(file) {
  let stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + '/' + f);
    }
  } else if (searchTerm.test(readFileSync(file, 'utf8'))) {
    console.log(
      `Files from Args(${process.argv.slice(3)}) that contain RegExp(${searchTerm}): ${file}`,
    );
  }
}
