// (Spread — Copy array)
console.log("(Spread — Copy array)");
let arr = [1,2,3];
let arr2 = [...arr];
arr2.push(4);
console.log(`I created new Array and then add 4: [${arr2}]`);



//  (Spread — Merge objects)
console.log("(Spread — Merge objects)");
const user = {name:"Ramya"};
const details = {age:21,city:"chennai"};
let combined = {...user,...details};
console.log("Here I combined two objects:", combined);

//(Rest operator in function)
console.log("(Rest operator in function)");
function add(...numbers){
    console.log(numbers.reduce((total,number) => {
        return total+number;
    }
 ,0))
}
add(1,2,3,4,5);



//(Rest + Destructuring)
console.log("(Rest + Destructuring)");
const numbers = [1, 2, 3, 4, 5];
let[first,...rest] = numbers;
console.log("First Array Element: ",first);
console.log("Remaining Rest Element: ",rest);