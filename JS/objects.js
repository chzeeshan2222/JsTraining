o = {
    a: "foo",
    b: 42,
    c: {},
    1: "number literal property",
    "foo:bar": "string literal property",
  
    __proto__: "prototype",
  
 
  };
  x = { greeting: "hi there" };
  console.log(x);
  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  const rand = new Person("Rand McKinnon", 33, "M");
  const ken = new Person("Ken Jones", 39, "M");
    console.log(rand, ken);
    // Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
      // Method which will display type of Animal
      console.log(this.type);
    },
  };
  
  // Create new animal type called animal1
  const animal1 = Object.create(Animal);
  animal1.displayType(); // Logs: Invertebrates
  
  // Create new animal type called fish
  const fish = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType(); // Logs: Fishes

  
  const myObj = {};
const str = "myString";
const rand1 = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand1] = "A random number is the key here";
myObj[anotherObj.toString()] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
console.log(myObj.myString); // 'This key is in variable str'
const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is Karina
  Intern.sayHi(); // Hello, my name is Tyrone
  