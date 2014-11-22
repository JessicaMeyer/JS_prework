// js front-end course

// DEFINITELY REVIEW THIS FILE

// Exercise 1
// Using and understanding Arrays

// Write a JavaScript function that logs both the sum and the product of all numbers in an array.
// Create the needed variables: array, s for sum, p for product and i for counter in for loop
// Create a for loop that will traverse through the data and either add and multiply the numbers
// together. Make sure each is assigned to the correct variable name specified above.
// Print the results to the console.

var array = [2, 4, 6, 8];
	s = 0,
	p = 1, // did 1 cause will be multiplying.
	i,

for (var i = 0; i < array.length; i += 1); {
	s += array[i];
	p *= array[i];
}

console.log("The sum is " + s + " the product is " + p);

// answer doesn't work as provided.


// Exercise 2
// Nested Loops and 2D Arrays

// Create an array of arrays, aka a 2D array. Using the example listed below.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// etc....

//***********To access 2-dimensional array elements we would "console.log(array[i][j]);"

var numberSet = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//Write the first for loop
for(var i in numberSet){
  console.log("row" + i);

  //Write second for loop to print the secondary data set
  for(var j in numberSet[i]){
    console.log(" " + numberSet[i][j]);
  }
}

// Exercise 3
// Arrays and Objects
// Do the same as the previous example, but for an array of objects, where you will simply log the contents of the array

//Create an array of objects
/*Array Type: Hotel
      Properties
        Name: Motel 8
        Rating: 4
        Rooms: 104
        Bookings: 87
        Gym: false
        Pool: true
      Properties
        Name: La Queso
        Rating: 10000
        Rooms: 100
        Bookings: 100
        Gym: false
        Pool: true
        Margaritas: always
        */

var hotelArr = [{
  name: 'Motel 8',
  rating: 4,
  rooms: 104,
  bookings: 87,
  gym: false,
  pool: true
}, {
  name: 'La Queso',
  rating: 10000,
  rooms: 100,
  bookings: 100,
  gym: false,
  pool: true,
  margaritas: 'always'
}];


// Now we need to print out each one of these variables in the Array. Only want what is stored in the
// object, not the object keys.

// Create a for loop that will console.log the elements in our array
for(var i = 0; i < hotelArr.length; i++)
  console.log(hotelArr[i]);

// Expected output:
/*
  Object {name: "Motel 8", rating: 4, rooms: 104, bookings: 87, gym: false…}
  Object {name: "La Queso", rating: 10000, rooms: 100, bookings: 100, gym: false…}
*/

// Extension for Exercise 3

// Extention: try printing the data stored in the array without specifying each key name of the object
// So, assume the key terms might be user input not hard coded and we just need the information the user input

//Hint: look at info about key terms like '.forEach' 'key' and 'obj'

hotelArr.forEach(function(obj){
  for(var key in obj)
   console.log(obj[key]);
});

//Expected output:
/*
  Motel 8
  4
  104
  87
  false
  true
  La Queso
  10000
  2
  100 <---- this will only print once in console with #2 by it.
  false
  true
  always
*/

// Exercise 4
// Functions and Conditionals
 
// Create a function that accepts 4 arguments from the function call "start, middleLower, middleUpper, finish"
var fizzyThings = function(start, middleLower, middleUpper, finish) {

//Create a for loop that will go from "start" to "finish" (these are numbers so we should
//just count through it one by one)

 for (var i = start; i <= finish; i += 1) {

 // Next we will need a series of conditional statements that test if the whole number is divisible
 // by another whole number so that it has a remander of 0.
// We will only use 3 of the 4 parameters in these conditional statements
// You need to figure out which ones and what order in order to display the expected output below


      if (i % finish == 0) {
        console.log("FizzBuzz");
      } else if (i % middleUpper == 0) {
        console.log("Buzz");
      } else if (i % middleLower == 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
}

}

fizzyThings(1, 3, 5, 15);
//Expected Output:
/*
  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
*/


// Exercise 5
// Using loops to look for data stored in an array

//Create a function that accepts an array and a string as an arguement
//Test to see if the value passed is in the array.

arrOStr = ["Fee", "Fi", "Fo", "Fum", "English Mun"];
arrOStr2 = ["Whos Fest", "Who-Pudding", "Roast Beast", "Who-Hash"];


// You write the function! Create a function that accepts 2 arguements, the array and a string
var arrayTester = function(arr, str) {

  //Now we need a way to traverse through the array to test if it contains the String that
  //was passed into the function.
   var found = false;

  for(var i = 0; i < arr.length; i++){
    if (arr[i] === str){
      found = true;
    }
  }

  if( found == true){
    console.log("String " + str + " was found.");
  } else
    console.log(" Big Fat Nope ")

}

}
//Test conditions:

arrayTester(arrOStr, "Fee") ;
arrayTester(arrOStr, "Roast Beast");
arrayTester(arrOStr2, "Roast Beast");
arrayTester(arrOStr2, "Fi");
arrayTester(arrOStr, "English Mun");
arrayTester(arrOStr2, "Fum");
arrayTester(arrOStr, "Fo");

//Expected Output:
/*

String Fee was found.
 Big Fat Nope
String Roast Beast was found.
 Big Fat Nope
String English Mun was found.
 Big Fat Nope
String Fo was found.

*/



