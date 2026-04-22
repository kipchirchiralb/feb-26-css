//  Write a function that takes in a number and returns whether it is even or odd

function checkIfEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
 
const res1 = checkIfEven(3);
console.log(typeof res1);

console.log(checkIfEven(4))