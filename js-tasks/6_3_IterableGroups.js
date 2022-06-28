export default function task6_3(title, description) {
  console.log(title);
  console.log(description);
  console.log('Result:');

  class Group {
    constructor() {
      this.members = [];
    }

    add(value) {
      if (this.members.indexOf(value)) {
        this.members.push(value);
      }
    }

    delete(value) {
      this.members = this.members.filter((v) => v !== value);
    }

    has(value) {
      return this.members.includes(value);
    }

    static from(collection) {
      let group = new Group();
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }

    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }

  class GroupIterator {
    constructor(group) {
      this.members = group.members;
      this.position = 0;
    }

    next() {
      if (this.position >= this.members.length) {
        return { done: true };
      } else {
        let current = { value: this.members[this.position], done: false };
        this.position++;
        return current;
      }
    }
  }

  for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value);
  }
  // a
  // b
  // c
}
