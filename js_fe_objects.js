// js front-end course

// In js, objects are represented by curly brackets {}. Ex: 

var cat = {size: "medium", color: "tuxedo"};
// Object {size: "medium", color: "tuxedo"} - key/value pairs

// think of js objects as a ruby hash - they have a key and value

// all data types in JavaScript are an object with the exception of null and undefined.

// Dot Notation: preferred way to access properties on an object 

cat.size 
// "medium"
console.log("The cat is " + cat.size + " and " + cat.color + ".")
// The cat is medium and tuxedo.

// Square Brackets: can also access object properties
cat["color"];
// tuxedo

var key = "color";
var cat = { size: "medium", color: "tuxedo" };
cat[key];
// "tuxedo"

// Why would you want to use a variable to retrieve a value from an object?

var keys = ["color", "size"];
var cat = { size: "medium", color: "tuxedo" };
keys.forEach(function(element, index, array) {
  console.log(cat[element]);
});
// tuxedo
// medium

// adding new properties to object with dot notation or square brackets 

var cat = { size: "medium", color: "tuxedo" };
cat.name = "Jean-Luc Picard";
cat["age"] = "really old";
console.log(cat);
// Object {size: "medium", color: "tuxedo", name: "Jean-Luc Picard", age: "really old"}

// Properties can be modified in the same way:

cat.age = 500;
console.log(cat);
// Object {size: "medium", color: "tuxedo", name: "Jean-Luc Picard", age: 500}

// Exercise 1.1
// Create an object that makes the following work:
var me = {
  name: "Jessica",
  age: 31
};
console.log("My name is " + me.name + " and I am " + me.age + " years old.");
// My name is Jessica and I am 31 years old. 

// Exercise 1.2
// Using the existing me object, increase your age by 1 and log the results.

me.age += 1;
console.log("My name is " + me.name + " and I am " + me.age + " years old.");

// Exercise 1.3
// Add a function with a key of introduce to the me object that will log your name and age. 
// HINT: use the this keyword. Then call that function.

me.introduce = function () { console.log("My name is " + this.name + " and I am " + this.age + " years old."); };
me.introduce();

// Exercise 2.1
// Create an array of objects that represent your favorite books. Each object should contain title and author properties.
// Log that array using console.table();

var favoriteBooks = [
  {
    title: "The Importance of Being Earnest",
    author: "Oscar Wilde"
  },
  {
    title: "Through the Looking Glass",
    author: "Lewis Carroll"
  },
  {
    title: "The Little Engine that Literally Can't Even",
    author: "Flip"
  }
];

console.table(favoriteBooks);














































