// loop/iteration control structures - used to repeat execution of a block{ code } of code while a condition is true

// while loop or for loop
let count = 10;

while (count < 100) {
  console.log(count + " is less than 100");
  count = count + 3;
}
// 13 , 16 , 19 ....adding 3...., 97
console.log("doneee");

for (let index = 0; index <= 10; index++) {
  console.log("the index index is at " + index);
  console.log("This code block { } will be repeated until index=>10");
}
// every loops has a starting point, a condition  and a change to the starting point(increment or decrement) that will eventually make the condition false and stop the loop
// index++       index = index + 1
// index--       index = index - 1

// conditional statements -- used to execute a {block of code} if a condition is true, and optionally execute another block of code if the condition is false

if (900 > 1000) {
  console.log("900 is greater than 100");
} else {
  console.log("The condition is false");
}

// parenthesis ()
// curly braces {}
// square brackets []
// asterisk *
// percent %
// dolar sign $
// single quotes ''
// double quotes ""
// backticks ``
// tildes ~
// greater than and less than < > --
// caret ^
