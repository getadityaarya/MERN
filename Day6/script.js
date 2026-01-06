/*************************************************
 * BASIC FUNCTION DECLARATIONS
 *************************************************/

// Simple function without parameters
function Hello() {
    console.log("Hello in function");
}

// Function with parameters
function add(name, surname) {
    console.log(name + " " + surname);
}
add("Aditya", "Arya");

// Function with return value
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(24, 42));

// Function to calculate square of a number
function square(n) {
    return n ** 2;
}
console.log(square(3));


/*************************************************
 * ARROW FUNCTIONS
 *************************************************/

// Arrow function without parameters
let greet = () => {
    console.log("Hello");
};
greet();

// Arrow function with parameters
let addition = (t, l) => {
    console.log(t + l);
};
addition(2, 6);

// One-line arrow function (implicit return)
let say = (a, b) => a + b;
console.log(say(1, 4));


/*************************************************
 * PRACTICE TASKS
 *************************************************/

// Task 1: Simple Function
// Prints a welcome message
function sayHi() {
    console.log("Hi, welcome to JavaScript!");
}
sayHi();

// Task 2: Function with Parameters
// Prints full name
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Aditya", "Arya");

// Task 3: Function with Return Value
// Returns multiplication of two numbers
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 6));

// Task 4: Arrow Function
// Prints difference of two numbers
let subtract = (x, y) => {
    console.log(x - y);
};
subtract(10, 5);

// Task 5: One-Line Arrow Function
// Returns cube of a number
let cube = (n) => n ** 3;
console.log(cube(6));

// Task 6: setTimeout Example
// Prints message after 3 seconds
setTimeout(function () {
    console.log("This message appears after 3 seconds");
}, 3000);


/*************************************************
 * OBJECT RECAP
 *************************************************/

const user = {
    name: "Akash",
    age: 24,
    greet: function () {
        console.log("Hello " + this.name);
    }
};
user.greet();


/*************************************************
 * INHERITANCE IN JAVASCRIPT (USING CLASSES)
 *************************************************/

// Single Inheritance
class DAD {
    car() {
        console.log("BMW");
    }
    property() {
        console.log("3BHK");
    }
}

class SON extends DAD {
    // Inherits all properties of DAD
}

const son = new SON();
son.car();

// Note:
// Multiple and Hybrid inheritance are NOT supported directly in JavaScript


/*************************************************
 * MULTILEVEL INHERITANCE
 *************************************************/

class Grandfather {
    savings() {
        console.log("Gold");
    }
}

class Dad extends Grandfather {
    car() {
        console.log("Audi");
    }
    property() {
        console.log("Villa");
    }
}

class Son extends Dad {
    education() {
        console.log("BTech");
    }
}

const child = new Son();
child.savings();


/*************************************************
 * HIERARCHICAL INHERITANCE
 *************************************************/

class Father {
    knowledge() {
        console.log("Maths");
    }
}

class Child_1 extends Father {
    understanding() {
        console.log("Spanish");
    }
}

class Child_2 extends Father {
    understanding() {
        console.log("Italian");
    }
}

const Rahul = new Child_1();
Rahul.knowledge();
