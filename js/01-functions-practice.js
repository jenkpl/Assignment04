//STEP 1 Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
function halfNumber(x) {
    let half = (x/2);
    console.log(`Half of ${x} is ${half}.`);
}
halfNumber(18);

//STEP 2Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(y) {
    let result = (y * y);
    console.log(`The result of squaring the number ${y} is ${result}.`);
}
squareNumber(9);
//STEP 3Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4.
function percentOf(z, a) {
    let divv = (z / a);
    let perc = (divv*100);
    console.log(`${z} is ${perc}% of ${a}`);
}
percentOf(2,4);

//STEP 4Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
function findModulus(g, h) {
    let modR = (h % g);
    console.log(`${modR} is the modulus of ${g} and ${h}.`)
}
findModulus(4, 10);
//STEP 5 Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

function collect(num1, num2, num3) {
  
       nums = prompt(`Please enter 3 numbers, separated by commas.`);
       let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
         sum += Number(arguments[i]);
        }
        console.log(`This is the sum: ${sum}`);
        }
    
collect();
collect( 1, 1, 1);
