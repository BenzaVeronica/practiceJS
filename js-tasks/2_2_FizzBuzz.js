export default function task2_2(title, description) {
  console.log(title);
  console.log(description);
  for (let number = 1; number <= 100; number++) {
    let isDivThree = number % 3 == 0;
    let isdivFive = number % 5 == 0;
    if (isDivThree && isdivFive) {
      console.log('FizzBuzz');
    } else if (isDivThree) {
      console.log('Fizz');
    } else if (isdivFive) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
}
