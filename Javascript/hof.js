// // a function can also take another function as an argument, this is called a callback function

const functionOne = (username) => {
    console.log("This is function one Mr. " + username);
}

const functionTwo = (inputArg) => {
    console.log("This is function two");
    // usecAES-- FIRST FIGURE OUT WHAT NAME TO BE USED
    // THEN CALL THE FUNCTION ONE WITH THE NAME AS AN ARGUMENT
    inputArg("Albert");
}   


functionTwo(functionOne); // this will call functionOne inside functionTwo
functionOne("Joan")
/// example in array methods

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = (num) => {
    return num * num;
}

const result  = numbers.map(squareNumbers); // map is a higher order function that takes a callback function as an argument and applies it to each element in the array
// HOF array methods include map, filter, reduce, forEach, 
