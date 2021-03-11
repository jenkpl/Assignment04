// IMPORT THE MODULE
import {add} from '../js/modules/calculator.js'; 
import {subtract} from '../js/modules/calculator.js';
import {mult} from '../js/modules/calculator.js';
import {divv} from '../js/modules/calculator.js';
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseFloat(prompt(`Enter your first number.`));
let num2 = parseFloat(prompt(`Enter your second number.`));
let userChoice = prompt(`Enter desired operation: \n1 - addition, \n2 - subtraction, \n3 - multiplication, \nor 4 - division.`);
if (isNaN(userChoice) || (userChoice > 4) || (userChoice <=0)) {
    alert(`You must enter 1, 2, 3 or 4. \nPlease refresh the page to try again.`);
}
console.log(num1);
console.log(num2);
console.log(`User choice is:`, userChoice);
// CHECK TO SEE WHAT OPERATION THEY'RE USING Use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation by calling the appropriate function from the module.
switch(userChoice) {
    case "1" : 
        alert(add(num1, num2));
        break;
    case "2" :
        alert(subtract(num1, num2));
        break;
    case "3" :
        alert(mult(num1, num2));
        break;
    case "4" :
        alert(divv(num1, num2));
        break;
}
// (alternate option)CALL THE APPROPRIATE FUNCTION -using if/else and console.log
// if (userChoice === "1") {
//    console.log(`Addition result is:`,add(num1, num2));
// }
// else if (userChoice === "2") {
//     console.log(`Subtraction result is:`,subtract(num1, num2));
// }
// else if (userChoice === "3") {
//     console.log(`Multiplication result is:`,mult(num1, num2));
// }
// else if (userChoice === "4") {
//     console.log(`Division result is:`,divv(num1, num2));
// }