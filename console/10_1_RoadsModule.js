// console.log(`Code in file:
// const { buildGraph } = require('./10_graph.js');\n\n\
// const myRoads = [\n\
//   "Alice's House-Bob's House",\n\
//   "Alice's House-Cabin",\n\
//   "Alice's House-Post Office",\n\
//   "Bob's House-Town Hall",\n\
//   "Daria's House-Ernie's House",\n\
//   "Daria's House-Town Hall",\n\
//   "Ernie's House-Grete's House",\n\
//   "Grete's House-Farm",\n\
//   "Grete's House-Shop",\n\
//   'Marketplace-Farm',\n\
//   'Marketplace-Post Office',\n\
//   'Marketplace-Shop',\n\
//   'Marketplace-Town Hall',\n\
//   'Shop-Town Hall',\n\
// ];\n\n\
// exports.roadGraph = buildGraph(myRoads);`);

const { CONSOLE_TASKS } = require('./data.js');
console.log(CONSOLE_TASKS[0].title);
console.log(CONSOLE_TASKS[0].description);

const { buildGraph } = require('./tutorial/10_1_graph.js');
console.log('\nno errors in require/exports');

const myRoads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

exports.roadGraph = buildGraph(myRoads);
