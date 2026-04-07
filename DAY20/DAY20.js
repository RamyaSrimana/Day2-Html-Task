//Use push, pop, shift, unshift on an array.
function arrayOperations() {
    let arr = [10, 20, 30];

    console.log("Initial array:", arr);
    arr.push(40);
    console.log("After push:", arr);
    arr.pop();
    console.log("After pop:", arr);
    arr.unshift(5);
    console.log("After unshift:", arr);
    arr.shift();
    console.log("After shift:", arr);
    return arr; 
}

// 2 . Print all elements of an array using for loop.
function printArray(arr) {
    console.log(" 2 . Print all elements of an array using for loop.");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let resultArray = arrayOperations();
printArray(resultArray);