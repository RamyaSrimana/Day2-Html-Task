//ADDITION OF TWO NUMBERS
const add = (a,b) => a+b;
console.log("ADDITION OF TWO NUMBERS USING ARROW FUNCTION")
console.log(add(4,5)); 
console.log("------------");



//Create a simple class with constructor and method.
class Students{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    printStudentInfo(){
        console.log(`The Name of Student is: ${this.name}`);
        console.log(`The Age of Student is: ${this.age}`);
        console.log(`The EmailId of Student is: ${this.email}`);
        console.log("------------");

    }
}

const studentobj = [new Students("Alice","22","alice@gmail.com"),new Students("Bob","22","bob@gmail.com"),new Students("Charlie","22","charlie@gmail.com")];
studentobj.forEach((student => student.printStudentInfo()));