//Call an object method.
let person = {
  name: "Ramya",
  age: 22,
  method: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.method();


//Access and modify object properties.
let object = {
  name: "Srimana",
  age: 22,
};
//Access Properties
//Dot notation
console.log(object.name);
console.log(object.age);

//Bracket notation
console.log(object["name"]);
console.log(object["age"]);

//Modify Properties
//Change existing values
object.name = "Ramya";
object.age = "22";
console.log(object);

//Add Property
object.city = "Chennai";
console.log(object);

//Delete property
delete object.age;
console.log(object);


//Create an object with name, age, and method sayHello().
let object1 ={
  name:"Gaayathri",
  age:21,
  sayHello: function(){
    console.log("sayHello")
  }
}
object1.sayHello()
console.log(object1);
