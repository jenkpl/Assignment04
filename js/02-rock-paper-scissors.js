//PHASE 1 collect user choice
let userC = prompt(`Let's play Rock, Paper, Scissors! \nEnter 1 for Rock, 2 for Paper, 3 for Scissors.`);
console.log( `User selected ${userC}.` ) ;
if (isNaN(userC) || (userC > 3) || (userC <=0)) {
    alert(`You must enter 1, 2, or 3. \nPlease refresh the page to play again.`);
}
//PHASE 2 random choice
let compR;
let userR;
let compC = Math.floor(Math.random() * 3) + 1;
console.log( `The computer choice is ${compC}.`);
//computer choice interpretation
if (compC === 1){ 
    compR = "Rock";
}
else if (compC === 2){ 
    compR = "Paper";
}
else if (compC === 3){ 
    compR = "Scissors";
}
//user choice interpretation
if (userC === "1"){ 
    userR = "Rock";
}
else if (userC === "2"){ 
    userR = "Paper";
}
else if (userC === "3"){ 
    userR = "Scissors";
}
//PHASE 3 compare & results
if ((parseInt(userC)) === compC ) {
    console.log(`draw`);
    alert(`No winner - it's a draw. \nYou both chose: ${userR}! \nPlease refresh the page to play again.`);
}
else if ((userC === "1") && (compC === 2)) {
    alert(`You chose ${userR}, \nbut Computer chose Paper! \nSorry, you lost this round. \nPlease refresh the page to play again.`);
}
else if ((userC === "1") && (compC === 3)) {
    alert(`You chose ${userR}! \nComputer chose Scissors. \nYou won this round! \nPlease refresh the page to play again.`);
}
else if ((userC === "2") && (compC === 3)) {
    alert(`You chose ${userR}, \nbut Computer chose Scissors! \nSorry, you lost this round. \nPlease refresh the page to play again.`);
    
}
else if ((userC === "2") && (compC === 1)) {
    alert(`You chose ${userR}! \nComputer chose Rock. \nYou won this round! \nPlease refresh the page to play again.`);
}
else if ((userC === "3") && (compC === 1)) {
    alert(`You chose ${userR}, \nbut Computer chose Rock! \nSorry, you lost this round. \nPlease refresh the page to play again.`);
}
else if ((userC === "3") && (compC === 2)) {
    alert(`You chose ${userR}! \nComputer chose Paper. \nYou won this round! \nPlease refresh the page to play again.`);
}
