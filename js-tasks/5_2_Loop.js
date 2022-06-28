export default function task5_2(title, description) {
  console.log(title);
  console.log(description);

  function loop(value, testFun, updateFun, bodyFun) {
    for (let i = value; testFun(i); i = updateFun(i)) {
      bodyFun(i);
    }
  }
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log,
  );
}
