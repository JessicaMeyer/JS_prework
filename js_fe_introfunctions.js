// js front-end course 
// intro to javascript functions

// example of if/else statement - notice syntax 

var pass = prompt("What is the password?");

if (pass === 'abc') {
  alert("Welcome!");
}
else if (pass === '123') {
  alert("Nice try, noob!");
}
else {
  alert("Sorry, I can't let you in.");
}

// a look at conditionals 

var number = 8;
if (number >= 1 && number <= 100) {
  alert('The number is within 1 and 100');
}
if (number < 1 || number > 100) {
  alert('The number is NOT 1-100!');
}


// === means literally 
// == means truthy, less strict 

4 == 4 // true
4 === 4 // true
0 == '' // true
0 === '' // false
'5' == 5 // true
'5' === 5 // false
null == undefined // true
null === undefined // false
7 != 7 // false
7 !== 7 // false
0 != false // false
0 !== false // true

// declaring a function and calling it 

var sayHello = function (name) {
  alert("Hello, " + name);
};
sayHello('Mr. President');

// In JavaScript, inputs are called parameters & arguments (what you feed the function), and outputs are called returns.

// scopes 

// Parent scope
var ten = 10

var theAnswer = function () {
  // Child Scope
  var twenty = 20;
  return ten * 35;
};

var answer = theAnswer();

console.log("the answer=", answer);
console.log("twenty=", twenty);

// Conditionals DO NOT create scopes

// for remaining, see js_fe_functions.js file
































































