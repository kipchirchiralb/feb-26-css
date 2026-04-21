// a function is a reusable block{} of code that performs a specific task
// functions are used to break down a program into smaller, more manageable pieces

// given the interest rate and an amount, write a function to calculate the interest 
// funciton definition/creation
function calculateInterest(amount, interestRate, accountant) {
  const interest = (amount * interestRate) / 100;
  console.log(interest);
  return interest;
}
// use - calling/invoking the function
calculateInterest(10000, 5, "albert");
calculateInterest(95000, 14,"judy")
// input / parameters/arguments -- the values passed to a function when it is called 
// you can have a function with no parameters
// the output of  a funciton is declared using the return keyword
// ANother way / syntax for writion functions --arrow function

const sendEmail = (email,message)=>{
    console.log("Recipient: " + email)
    console.log("Body: " + message)
    return true
}

// invoke/call
sendEmail("albert@eldohub.co.ke", "hello albert, this is a message for you");

// TASK1 - Write a function to calculate the area of a rectangle given its length and width
// TASK2 - Write a function to calculate the area of a circle given its radius
// TASK3 - Write a function that generates an email given a username and a domain
// TASK4 - Write a function that takes in a number and returns whether it is even or odd
// TASK5 - Write a function that takes in a string and returns the number of vowels in the string