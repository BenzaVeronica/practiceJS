export default function task8_2(title, description) {
  console.log(title);
  console.log(description);
  console.log('withBoxUnlocked box.content\n\
withBoxUnlocked with Error\n\
box.locked');
  console.log('Result:');

  const box = {
    locked: true,
    unlock() {
      this.locked = false;
    },
    lock() {
      this.locked = true;
    },
    _content: [],
    get content() {
      if (this.locked) throw new Error('Locked!');
      return this._content;
    },
  };

  function withBoxUnlocked(body) {
    try {
      if (!box.locked) {
        return body();
      }
      box.unlock();
      return body();
    } finally {
      box.lock();
    }
  }

  withBoxUnlocked(function () {
    console.log(box.content.push('gold piece'));
  });

  try {
    withBoxUnlocked(function () {
      throw new Error('Pirates on the horizon! Abort!');
    });
  } catch (e) {
    console.log('Error raised: ' + e);
  }
  console.log(box.locked); // true
}
