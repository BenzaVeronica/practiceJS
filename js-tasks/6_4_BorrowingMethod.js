export default function task6_4(title, description) {
  console.log(title);
  console.log(description);

  let map = {
    one: true,
    two: true,
    hasOwnProperty: true,
  };
  console.log(Object.prototype.hasOwnProperty.call(map, 'one')); // true
}
