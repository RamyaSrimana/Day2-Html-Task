//function to add 
function add(a,b){
    return a+b;
}
let c = add(2,3);
console.log(c);



//Write a function expression to multiply two numbers.
function add(a,b){
    return a*b;
}
let c = add(2,3);
console.log(c);



//Write an arrow function to subtract two numbers.
let subtract = (a,b) => { return a-b };
let result = subtract(8,4);
console.log(result);



//Write a function with parameters and return a value.
function division(a,b){
    return a/b;
}
let result = division(3,9);
console.log(result);



//Demonstrate global vs local scope.
let d = 1;
if (d == 1) {
    let c = 2;
    console.log(c + " => this is from local scope");
    d = 2 + 1; // => it affect global value changed
}
console.log(d + " => this is from global scope");
console.log(c); // here we get error because local scope get accessed