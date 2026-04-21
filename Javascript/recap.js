// control flow ---- the order in which code is executed in a program

console.log("hello world");

// sequential execution -- code is executed in the order it is written
const userAge = 12;
console.log("this is the first line of code");
if (userAge < 18) {
  console.log("this is the second line of code");
}
console.log("this is the third line of code");

// grade a mark - <50 fail, 50-59 D, 60-69 C, 70-79 B, 80-100 A
const mark = 65;

if (mark < 50) {
  console.log("fail");
} else if (mark < 60) {
  console.log("D");
} else if (mark < 70) {
  console.log("C");
} else if (mark < 80) {
  console.log("B");
} else {
  console.log("A");
}
// condtional statements are commonly used for error handling/checking/input validation

// loops -- a way to repeat a block of code multiple times
// for loop -- used when the number of iterations is known
// starting, ending/condings, increment/decrement
for (let i = -100; i < 5; i = i + 5) {
  console.log(i);
}
