//map
let nums = [1, 2, 3, 4];
let doubled = nums.map(num => num * 2);
console.log("1. Use map to double all numbers in an array: " + doubled); 


//filter 
let num = [1, 2, 3, 4, 5, 6];
let evens = num.filter(num => num % 2 === 0);
console.log("2. Use filter to get even numbers from an array:   " + evens);

//reduce
let number = [1, 2, 3, 4];
let sum = number.reduce((total, num) => total + num, 0);
console.log("3. Use reduce to find the sum of an array:  "+ sum); 

//4. Find the first number greater than 10
let a = [5, 8, 12, 3, 20];
let firstGreaterThan10 = a.find(num => num > 10);
console.log("4. Find the first number greater than 10: "+ firstGreaterThan10); 

//5. Check if array includes a specific value
let b = [1, 2, 3, 4];
let hasThree = b.includes(3);
console.log("5. Check if array includes a specific value: "+hasThree); 