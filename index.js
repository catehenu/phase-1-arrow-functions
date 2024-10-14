// Function Declaration
function foo() {
    return 'bar';
}

// Function Expression for divide
const divide = function(a, b) {
    return a / b;
};

// Arrow Function for square
const square = x => x * x;

// Arrow Function for add
const add = (parameter1, parameter2) => parameter1 + parameter2;

// Example of a more complex arrow function
const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
};

// Using .map() with an arrow function
const nums = [1, 2, 3];
const squares = nums.map(num => num ** 2);

// Example usage of divide and square functions
console.log(divide(2000, 100)); // => 20
console.log(square(5)); // => 25

// Export functions for testing
module.exports = {
    foo,
    divide,
    square,
    add,
    sum,
    squares
};
