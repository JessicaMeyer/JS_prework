// js front-end course

// returns are how functions speak to each other. 
// scopes - that a variable that's defined within an object or function cannot be accessed directly from outside that function. 

// Parent scope
var ten = 10

var theAnswer = function () {
  // Child Scope
  var twenty = 20;
  return ten * 35;
};

var answer = theAnswer(); // answer = 350

console.log("the answer=", answer); // The answer: 350
console.log("twenty=", twenty); // undefined

// Fix the following code (1 syntax error) so that the alert runs:

var slap = function {
  alert('SLAP');
};
slap();

var slap = function () {
	alert('SLAP');
};
slap();

// Fix the following code (1 syntax error) so that the alert runs:

var kick = function (name) {
  alert(name ' reproaches your behavior.');
};
kick('Billy');

var kick = function (name) {
  alert(name + ' reproaches your behavior.');
};
kick('Billy');

// Fix the following code (2 logic errors) so that the alert displays a sensible message:

var doubleIt = function (x) {
  alert(X + ' times two is ' + x);
};
doubleIt(8);

var doubleIt = function (x) {
	return x*x;
	alert(X + ' times two is ' + x);
};
doubleIt(8);

// Fix the following code (1 logic error) so that the alert runs:

var greet = function () {
  alert("Welcome, " + name);
};
greet('Bob');

var greet = function (name) {
	alert("Welcome, " + name);
};
greet('Bob');

// Write a function yell that takes a string and alerts that string in all caps.

var yell = function(string) {
  return string.toUpperCase();
}
yell("hello hello");
// "HELLO HELLO"

// Write a function divideBy such that the following code works:

var divideBy = function(a,b) {
  return (a/b);
}

var result = divideBy(50, 2);
console.log('Result should be 25:', result);

result = divideBy(40, 10);
console.log('Result should be 4:', result);

result = divideBy(99, 3);
console.log('Result should be 33:', result);

// Exercise 0 (Example): angryGandalf

// Define angryGandalf with input parameters

var angryGandalf = function(type) {

  // Define the variables needed
  var message;

  // Run conditional on type for 'grey' and 'white'
  if (type === 'grey') {
    message = "YOU...SHALL NOT... PASS!";
  } else if (type === 'white') {
    message = "You merely passed me to your demise.";
  } else {
    message = "I don't think I'm Gandalf anymore.";
  }

  // Return message
  return message;

}


console.assert(angryGandalf('grey') // Expect "YOU...SHALL NOT... PASS!");
console.assert(angryGandalf('white') // Expect "You merely passed me to your demise.");
console.assert(angryGandalf(2) // Expect "I don't think I'm Gandalf anymore.");

// Exercise 1 - lifeLine
// @description takes children, partner's name, hometown, and job
// @returns 'You are a W from X and married to Y  with Z kids.'

// Create function with name tellFortune and appropriate parameters
var tellFortune = function(job, location, partner, children) {
	// Define a string variable that will have that ouput
	
	var fortune = "You will be a " + job + " in " + location + ", and married to " + " with " + children + " kids ."
 	
 	// Return string

 	return fortune;
};

console.assert(lifeLine('bball player', 'Spain', 'Shaq', 3) 
// Expect 'You are a bball player from Spain and married to Shaq  with 3 kids.'
console.assert(lifeLine('stunt double', 'Japan', 'Ryan Gosling', 3000) 
// Expect 'You are a stunt double from Japan and married to Ryan Gosling  with 3000 kids.'
console.assert(lifeLine('Elvis impersonator', 'Russia', 'The Oatmeal', 0) 
// Expect 'You are a Elvis impersonator from Russia and married to The Oatmeal  with 0 kids.'

// Exercise 2 - Makerbeer

// Part 1 : Create the following function, ofAge

// Write a function named `ofAge` that:
    // takes 1 argument: age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age

var ofAge = function(age){

if(age >= 21) {
return true;
} else {
return false;
}
 
};
console.assert(ofAge(22) === true);
console.assert(ofAge(18) === false);
console.assert(ofAge(0) === false);
console.assert(ofAge(-2) === false);

// Part 2 : Examine the function below. Add 4 console.assert(); to make sure it works, getAge


    function calculateAge(birthMonth, birthDay, birthYear) {

        // Get Todays Date
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate();

        // Calculate Age
        var age = todayYear - birthYear;

        // Check month discrepancies
        if (todayMonth < (birthMonth - 1)) {
            age--;
        }

        // Check day discrepancies
        if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
            age--;
        }

        // @return {Number} age
        return age;
    }

console.assert(calculateAge(12,1,1988) === 25);
console.assert(calculateAge(6,11,1990) === 24);
console.assert(calculateAge(8,19,1988) === 25);
console.assert(calculateAge(10,24,1988) === 25);


// Part 3 : Create a brand new function that takes the birthday and returns true or false if the person is of age, checkOfAge

// Write a function named `checkOfAge` that:
    // takes 3 arguments: month, day, year.
    // Use the getAge function to calculate the age.
    // calculate if that age is 21 or above.
    // Output true or false based on if the age is above age
 // Write a function named `checkOfAge` that:
var checkOfAge = function(month, day, year) {

var age = calculateAge(month,day,year);
 
var checkAge = ofAge(age)
 
return checkAge;
 
};

console.assert(checkOfAge(12,01,1988) === true);
console.assert(checkOfAge(1,1,1993) === true);
console.assert(checkOfAge(1,1,2001) === false);

/**
 * Exercise 2: calculateAge
**/
 
// Create function with name calculateAge and appropriate parameters
 
  // Define number variable age and save the age based on the years given, ie 2010-1990 = '20'
 
  // Define a number variable that will account for month discrepcies, ie Jan 2010 - August 1990 = '19'
    
    // return string that says 'You are either XX or YY'
 
// console.log(calculateAge(1984, 2012)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2012)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2012)); // You are either 30 or 29 
 
 
 
/**
 * Exercise 3: calculateSupply
**/
 
// Create function with name calculateSupply and appropriate parameters
 
  // define max age as 100
    
    // Do math to substract max string - string
 
    // Create Message
 
    // Return Message
 
// console.log(calculateSupply(28, 36)); // You will need 946080 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 2.5)); // You will need 65700 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 400));  // You will need 10512000 cups of tea to last you until the ripe old age of 100 
 
 
 
/**
 * Exercise 4: The Circle Calculator
**/
 
// Create function with name calcDiameterFromRadius and appropriate parameters
 
  // Define string variable that will have that output
    
    // return string to pass the tests below
 
// Create function with name calcCircumfrence and appropriate parameters
 
  // Define string variable that will have that output
 
  // Get Diameter from radius with calcDiameterFromRadius() made above
    
    // Create string to pass test below
 
    // return string
 
// console.log(calcCircumfrence(3)); // The circumference is 18.84
// console.log(calcCircumfrence(4)); // The circumference is 25.12
// console.log(calcCircumfrence(5)); // The circumference is 31.4


/**
 * Exercise 5:  The Temperature Converter
**/
 
// Create a function called convertTemp:
// Give it 2 parameters, the first being number, second being inputType. inputType should accept strings 'F' or 'C'
  
  // Define the variables used
 
  // Convert the number from the inputType to the opposite
  
  // Return that number

// console.log(convertTemp(32, 'F')); // 0
// console.log(convertTemp(100, 'C')); // 212
 

/**
 * Exercise 6:  The Temperature Converter
**/

// Create a function called waterState. This function will tell you if a temperature is boiling, liquid, or freezing:
// Give it 2 parameters, one that's a number and the second that's a inputType, ie 'F' or 'C'. 
  
  // Write a conditional and save proper water state variables based on if the inputType parameter is 'C' or 'F'.

  // Define a variable that will save the string of the conditional below.
 
  // Write a conditional if then statement that saves 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
  
    // return string "It's currently XXX degrees in the XXX standard and water is in a XXX state.'
        
// console.log(waterState(50, 'C')); // "It's currently 50 degrees in the Celsius standard and water is liquid. "
// console.log(waterState(213, 'F')); // "It's currently 213 degrees in the Fahrenheit standard and water is boiling. "
// console.log(waterState(-1, 'F')); // "It's currently -1 degrees in the Fahrenheit standard and water is liquid. " 

// js loops 

var names = ['Alice', 'Bob'];
for (var i=0; i < names.length; i += 1) {
  alert('Hello ' + names[i]);
}

// // In a for loop, there are three statements, separated by semicolons:

// // Variable Initialization - var i=0 This is where you put the variable you will use to keep track of how many times you have executed the loop.
// // Loop Conditional - i < names.length As long as this conditional is true, the loop will continue looping.
// // Increment Variable - i += 1 This statement happens right after a single loop executes. 
// // Usually it just increments the variable you declared in statement 1.

// var dice = function (array) {
//   var results = [];
//   for (var i = 0; i < array.length; i += 2) {
//   results.push( array[i] );
//   }
//   return results;
// };
// // undefined by itself 

// var scores = [10,20,30,40,50];
// console.log("slice & dice:", dice(scores));
// // slice and dice: [10, 30, 50]


// scores = [11,22,33,44];
// console.log("one more:", dice(scores));
// // slice and dice: [11, 33]

// // Partner Exercise #2 (uncompleted)
// // Ask for the names of everyone at your table and add their names to the array.
// // Create the for-loop below to show all of the arrays in an ordered list.

// // Add the names of everyone at your table   
// var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

// var list = "<ul>"

// // Create your for loop here
// // HINT: the string should look like '<li>' + friends[x] + "</li>" + ....

// for() {

// }

// list = list + '</li>'

// // Use jQuery to select the body tag on the index and append the finish table string
// $("body").append(list);

// // Partner Exercise #3 (uncompleted)

// // Now in the HTML, add an input to add new friends. Do the following:

// // Put the HTML creating for-loop in a createList function
// // Keep the var friends outside the function
// // Put a 'addFriend' function to push the value from the input into array.
// // Create an event handle to listen to the submit button click. On that click, 
// // get the value and use the addFriend function to add a friend, 
// // followed by using the createList function to repopulate the friend on the list.

// // Homework extension (uncompleted)
// // Add a 'remove friend' button to each list item. When clicked, remove the friend from the array and repopulate the list.

// // HINT: add the array index number to a 'data-id' of the list tag in 
// // order to find where the name is. Here's what the HTML would look like:

// //     <ul id="friendList">
// //         <li>Alex <button data-id="0">Unfriend</button></li>
// //         <li>Elyse <button data-id="1">Unfriend</button></li>
// //         <li>Mae <button data-id="2">Unfriend</button></li>
// //         <li>Sartaj <button data-id="3">Unfriend</button></li>
// //     </ul>

