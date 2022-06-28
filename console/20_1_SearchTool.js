const { CONSOLE_TASKS } = require('./data.js');
console.log(CONSOLE_TASKS[1].title);
console.log(CONSOLE_TASKS[1].description);
console.log('\nResult:');

const { statSync, readdirSync, readFileSync } = require('fs');

let searchTerm = new RegExp(process.argv[2]);
console.log(searchTerm);
console.log(process.argv.slice(3));
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
    console.log(file);
  }
}
