const { CONSOLE_TASKS } = require('./data.js');
console.log(CONSOLE_TASKS[1].title);
console.log(CONSOLE_TASKS[1].description);

const { bigOak } = require('./tutorial/11_1_crow-tech.js');
const { anyStorage } = require('./tutorial/11_1_async.js');
console.log('\nResult:');

async function locateScalpel(nest) {
  let current = nest.name;
  for (;;) {
    try {
      let next = await anyStorage(nest, current, 'scalpel');
      if (next == current) return current;
      current = next;
    } catch (error) {
      console.log(error);
    }
  }
}

function locateScalpel2(nest) {
  function loop(current) {
    return anyStorage(nest, current, 'scalpel').then((next) => {
      if (next == current) return current;
      else return loop(next);
    });
  }
  return loop(nest.name);
}

locateScalpel(bigOak).then(console.log); // Butcher's Shop
locateScalpel2(bigOak).then(console.log); // Butcher's Shop
