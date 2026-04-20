// by value / primitives -- numbers, strings, booleans, null, undefined, symbols

// by references / composite / non-primitive -- objects, arrays, functions


let age = 30;
let email = "albert@eldohub.co.ke"
let isLoggedIn = true;
// typeof operator -- to check the data type of a variable
console.log(typeof age);
console.log(typeof email);
console.log(typeof isLoggedIn);

let finalScore = null; // null is an assignment value, it means no value. It is different from undefined, which means a variable has been declared but has not been assigned a value.

let result; // undefined is a type, it means a variable has been declared but has not been assigned a value.

// objects
let person = {
    name: "Albert",
    age: 30,
    email: "albert@eldohub.co.ke",
    isKenyan: true
}
console.log(typeof person);
let colors = ["red", "green", "blue",10,true]; // arrays are also objects in JavaScript