//Show synchronous 
console.log("synchronous");
let a = "Welcome User";
function print(){
    console.log(a);
}
print(a);
console.log("Ends Here!!");
console.log("---------");


// asynchronous execution
console.log("asynchronous execution");
setTimeout(() => {
    console.log("This Code Runs After 3 Seconds")
    console.log("---------");
},3000);
console.log("This Code Ends Here");