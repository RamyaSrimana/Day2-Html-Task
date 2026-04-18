/*Rewrite code with let and const.
Use template literals with variables.
*/
let a = 10 ;
const b = 5;
console.log(`The Sum OF a and b  Are :  ${a+b}`);

//Create a function with default parameter values.
function greeting(name = "Ramya"){
    console.log(`Hello ${name} :) ` );
}
greeting();