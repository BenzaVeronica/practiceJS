import * as tasksFuns from './js-tasks/index.js';

const TASKS = [
  {
    title: '2_1_LoopingTriangle',
    description:
      'Write a loop that makes seven calls to console.log to output the following triangle:',
    fun: tasksFuns.task2_1,
  },
  {
    title: '2_2_FizzBuzz',
    description:
      'Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.\n\
If number is divisible by 3 print "Fizz"\n\
If number is divisible by 5 output "Buzz"\n\
If number is divisible by both 3 and 5 print "FizzBuzz"',
    fun: tasksFuns.task2_2,
  },
  {
    title: '2_3_Chessboard',
    description:
      'Write a program that creates a string that represents an n×n grid, using newline characters to separate lines.\n\
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.\n\
Passing this string to console.log should show something like this:',
    fun: tasksFuns.task2_3,
  },
  {
    title: '3_1_Minimum',
    description:
      'Write a function min that takes two arguments and returns their minimum.\n\n\
  minimum(0, 10) //0\n\
  minimum(0, -10) //-10',
    fun: tasksFuns.task3_1,
  },
  {
    title: '3_2_Recursion',
    description:
      'Here’s another way to define whether a positive whole number is even or odd:\n\
Zero is even.\n\
One is odd.\n\
For any other number N, its evenness is the same as N - 2.\n\
Define a recursive function isEven corresponding to this description.\n\
The function should accept a single parameter (a positive, whole number) and return a Boolean.\n\
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?\n\n\
isEven(50) // true\n\
isEven(75) // false\n\
isEven(-1) // false',
    fun: tasksFuns.task3_2,
  },
  {
    title: '3_3_BeanCounting',
    description:
      "Write a function countBs that takes a string as its only argument and returns a number \n\
that indicates how many uppercase “B” characters there are in the string.\n\
Next, write a function called countChar that behaves like countBs, except it takes a second argument \n\
that indicates the character that is to be counted (rather than counting only uppercase “B” characters).\n\
Rewrite countBs to make use of this new function.\n\n\
countBs('BBC') // 2\n\
countChar('kakkerlak', 'k') // 4",
    fun: tasksFuns.task3_3,
  },
  {
    title: '4_1_TheSumOfARange',
    description:
      'Write a range function that takes two arguments, start and end,\n\
and returns an array containing all the numbers from start up to (and including) end.\n\
Next, write a sum function that takes an array of numbers and returns the sum of these numbers.\n\
Run the example program and see whether it does indeed return 55.\n\
As a bonus assignment, modify your range function to take an optional third argument \n\
that indicates the “step” value used when building the array. If no step is given,\n\
the elements go up by increments of one, corresponding to the old behavior.\n\
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].\n\
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].\n\n\
range(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\
range(1, 10, 2) // [1, 3, 5, 7, 9]\n\
range(5, 2, -1) // [5, 4, 3, 2]\n\
sum(range(1, 10)) // 55',
    fun: tasksFuns.task4_1,
  },
  {
    title: '4_2_ReversingAnArray',
    description:
      "write two functions, reverseArray and reverseArrayInPlace.\n\
The first, reverseArray, takes an array as argument and produces a new array\n\
that has the same elements in the inverse order.The second, reverseArrayInPlace,\n\
does what the reverse method does: it modifies the array given as argument by reversing its elements.\n\
reverseArray(['A', 'B', 'C']) // ['C', 'B', 'A'];\n\
reverseArrayInPlace([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]",
    fun: tasksFuns.task4_2,
  },
  {
    title: '4_3_List',
    description:
      'Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.\n\
Also write a listToArray function that produces an array from a list. Then add a helper function prepend,\n\
which takes an element and a list and creates a new list that adds the element to the front of the input list,\n\
and nth, which takes a list and a number and returns the element at the given position in the list\n\
(with zero referring to the first element) or undefined when there is no such element. write a recursive version of nth.\n\n\
let list = {\n\
  value: 1,\n\
  rest: {\n\
    value: 2,\n\
    rest: {\n\
      value: 3,\n\
      rest: null\n\
    }\n\
  }\n\
};\n\n\
arrayToList([10, 20]) // {value: 10, rest: {value: 20, rest: null}}\n\
listToArray(arrayToList([10, 20, 30])) // [10, 20, 30]\n\
prepend(10, prepend(20, null)) // {value: 10, rest: {value: 20, rest: null}}\n\
nth(arrayToList([10, 20, 30]), 1) // 20',
    fun: tasksFuns.task4_3,
  },
  {
    title: '4_4_DeepComparison',
    description:
      'Write a function deepEqual that takes two values and returns true only\n\
if they are the same value or are objects with the same properties, where the values of the properties are equal\n\
when compared with a recursive call to deepEqual. To find out whether values should be compared directly\n\
(use the === operator for that) or have their properties compared, you can use the typeof operator.\n\
If it produces "object" for both values, you should do a deep comparison.\n\
But you have to take one silly exception into account: because of a historical accident,typeof null also produces "object".\n\
The Object.keys function will be useful when you need to go over the properties of objects to compare them.\n\n\
let obj = { here: { is: \'an\' }, object: 2 };\n\
deepEqual(obj, obj) // true\n\
deepEqual(obj, { here: 1, object: 2 }) // false\n\
deepEqual(obj, { here: { is: \'an\' }, object: 2 }) // true',
    fun: tasksFuns.task4_4,
  },
  {
    title: '5_1_Flattening',
    description:
      'Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array\n\
that has all the elements of the original arrays.\n\n\
let arrays = [[1, 2, 3], [4, 5], [6]]; //[1, 2, 3, 4, 5, 6]',
    fun: tasksFuns.task5_1,
  },
  {
    title: '5_2_Loop',
    description:
      'Write a higher-order function loop\n\
When defining the function, you can use a regular loop to do the actual looping.\n\
It takes a value, a test function, an update function, and a body function.\n\
Each iteration, it first runs the test function on the current loop value and stops if that returns false.\n\
Then it calls the body function, giving it the current value.\n\
Finally, it calls the update function to create a new value and starts from the beginning.\n\n\
loop(3, n => n > 0, n => n - 1, console.log); // 3 2 1 (display in a column)',
    fun: tasksFuns.task5_2,
  },
  {
    title: '5_3_Everything',
    description:
      'Implement every as a function that takes an array and a predicate function as parameters.\n\
Write two versions, one using a loop and one using the some method.\n\n\
every([1, 3, 5], (n) => n < 10) //true\n\
every([2, 4, 16], (n) => n < 10) //false\n\
every([], (n) => n < 10) //true',
    fun: tasksFuns.task5_3,
  },
  {
    title: '6_1_VectorType',
    description:
      "Write a class Vec that represents a vector in two-dimensional space.\n\
It takes x and y parameters (numbers), which it should save to properties of the same name.\n\
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and\n\
return a new vector that has the sum or difference of the two vectors'\n\
(this and the parameter) x and y values. Add a getter property length to the prototype that computes\n\
the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).\n\n\
console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Vec{x: 3, y: 5}\n\
console.log(new Vec(1, 2).minus(new Vec(2, 3))); // Vec{x: -1, y: -1}\n\
console.log(new Vec(3, 4).length); // 5",
    fun: tasksFuns.task6_1,
  },
  {
    title: '6_2_Groups',
    description:
      "Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.\n\
Its constructor creates an empty group, add adds a value to the group (but only if it isn't already a member),\n\
delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating\n\
whether its argument is a member of the group. Use the === operator, or something equivalent such as indexOf,\n\
to determine whether two values are the same. Give the class a static from method that\n\
takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.\n\n\
let group = Group.from([10, 20]);\n\
console.log(group.has(10)); // true\n\
console.log(group.has(30)); // false\n\
group.add(10);\n\
group.delete(10);\n\
console.log(group.has(10)); // false",
    fun: tasksFuns.task6_2,
  },
  {
    title: '6_3_IterableGroups',
    description:
      "Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface\n\
earlier in the chapter if you aren't clear on the exact form of the interface anymore.\n\
If you used an array to represent the group's members,\n\
don't just return the iterator created by calling the Symbol.iterator\n\
method on the array. That would work, but it defeats the purpose of this exercise. don't just return\n\
the iterator created by calling the Symbol.iterator method on the array\n\
It is okay if your iterator behaves strangely when the group is modified during iteration.\n\
for (let value of Group.from(['a', 'b', 'c'])) {\n\
console.log(value);",
    fun: tasksFuns.task6_3,
  },
  {
    title: '6_4_BorrowingMethod',
    description:
      "an object's hasOwnProperty can be used as a more robust alternative to the in operator\n\
when you want to ignore the prototype's properties. But what if your map needs to include the word 'hasOwnProperty'?\n\
You won't be able to call that method anymore because the object's own property hides the method value.",
    fun: tasksFuns.task6_4,
  },
  {
    title: '8_1_Retry',
    description:
      'Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers\n\
and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure.\n\
Write a function that wraps this clunky function and just keeps trying until a call succeeds,\n\
after which it returns the result. Make sure you handle only the exceptions you are trying to handle.\n\
reliableMultiply(8, 8) // 64',
    fun: tasksFuns.task8_1,
  },
  {
    title: '8_2_LockedBox',
    description:
      'Object is given. It is a box with a lock. There is an array in the box,\n\
but you can get at it only when the box is unlocked. Directly accessing the private _content property is forbidden.\n\
Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function,\n\
and then ensures that the box is locked again before returning,\n\
regardless of whether the argument function returned normally or threw an exception.\n\
For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.',
    fun: tasksFuns.task8_2,
  },
  {
    title: '9_1_RegexpGolf',
    description:
      'https://www.debuggex.com/\n\
For each of the following items, write a regular expression to test\n\
whether any of the given substrings occur in a string. The regular expression should match only strings\n\
containing one of the substrings described. Do not worry about word boundaries\n\
unless explicitly mentioned. When your expression works, see whether you can make it any smaller.\n\
1. car and cat\n\
2. pop and prop\n\
3. ferret, ferry, and ferrari\n\
4. Any word ending in ious\n\
5. A whitespace character followed by a period, comma, colon, or semicolon\n\
6. A word longer than six letters\n\
7. with one letter e (or E)',
    fun: tasksFuns.task9_1,
  },
  {
    title: '9_2_QuotingStyle',
    description:
      "Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue.\n\
Now you want to replace all the dialogue quotes with double quotes, while\n\
keeping the single quotes used in contractions like aren't. Think of a pattern that distinguishes\n\
these two kinds of quote usage and craft a call to the replace method that does the proper replacement",
    fun: tasksFuns.task9_2,
  },
  {
    title: '9_3_NumbersAgain',
    description:
      "Write an expression that matches only JavaScript-style numbers.\n\
It must support an optional minus or plus sign in front of the number, the decimal dot,\n\
and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent.\n\
Also note that it is not necessary for there to be digits in front of or after the dot,\n\
but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn't.",
    fun: tasksFuns.task9_3,
  },
];

export default TASKS;
