export default function task8_1(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  class MultiplicatorUnitFailure extends Error {}

  function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure('Klunk');
    }
  }

  function reliableMultiply(a, b) {
    for (;;) {
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure)) throw e;
      }
    }
  }

  console.log(reliableMultiply(8, 8)); // 64
}
