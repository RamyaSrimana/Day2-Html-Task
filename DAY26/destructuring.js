//Destructuring Object
console.log("Destructuring Object");
const user = {
    name : "Alice",
    age : "21",
    city : "Chennai"
}
let {name,age,city} = user;
console.log(`${name} lives in ${city}`);


// Array Destructuring
console.log("Array Destructuring");
const colors = ["red","green","blue"];
let [firstColor,secondColor,thirdColor] = colors;
console.log(`firstColour: ${firstColor}, secondColor: ${secondColor}`);



//(Skip values)
console.log("(Skip values)");
let numbers = [10,20,30,40];
let [first,,third,fourth] = numbers;
console.log(`first number: ${first} , third number: ${third} HERE I SKIP SECOND`);


//Rename Variables
console.log("Rename Variables");
const users = {
    name: "Ramya",
    email: "ramya@gmail.com"
};
let{name:username,email:userEmail} = users;
console.log(`userName: ${username}  EmailAddress:  ${userEmail}`);
