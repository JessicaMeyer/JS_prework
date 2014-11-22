// js arrays and loops - front-end course

// declare an array
var list = [];

// the special 'typeof' method will tell you what kind of data something is
console.log(typeof list);

// access a certain part of array - like ruby, index 0
var list = [2,3,4,5];
console.log(list[0]); // 2

var list = [2,"bob",7,{'name':'steven'}]; 
console.log(list[3]); // logs the obj containing the key value pair of 'name' and 'steven'

// adding to an array and length

var names = ['alice', 'bob'];
names.push('craig');
console.log(names);
// ['alice', 'bob', 'craig']
console.log(names.length);
// 3
console.log(names[0]); 
// 'alice'

// to remove methods in js - use splice
// splice(startIndex, deleteCount, inserts ...)
// startIndex is where in the array to do the splicing
// deleteCount is how many elements to delete at startIndex
// inserts... are zero or more arguements. Each of these get inserted at startIndex ** 

var array = [10,20,30,40];
array.splice(2,1);
console.log('Array Example 1:' array);
// Array Example 1: [10, 20, 40]

var array = [10,20,30,40];
array.splice(2,2);
console.log('Array Example 2:', array);
// Array Example 2: [10, 20]

var array = [10,20,30,40];
array.splice(0,1,99);
console.log('Array Example 3:', array);
// Array Example 3: [99, 20, 30, 40]

var array = [10,20,30,40];
array.splice(0,1,77,99);
console.log('Array Example 4:', array);
// Array Example 4: [77,99,20, 30, 40]

// ACL example

// WOW, OutKast just reunited and said they are going to join ACL.
// Add OutKast to the list

var aclLineup = ["Atoms for Peace", "Kings of Leon", "Bjork"];
aclLineup.push("OutKast");
console.log(aclLineup);
// ["Atoms for Peace", "Kings of Leon", "Bjork", "OutKast"]


// Uh oh, OutKast just had a terrible performance at Coachella.
// Remove OutKast from the list.

aclLineup.splice(3,1);
// ["OutKast"]
aclLineup
// ["Atoms for Peace", "Kings of Leon", "Bjork"]

// ACL feels bad about keeping the local musicians out
// Add Spoon, Octopus Project, and Bob Schneider to the list with one call. 
// Hint: Remember .length will get you the length of a list.

aclLineup.push("Spoon","Octopus Project", "Bob Schneider");
aclLineup
// ["Atoms for Peace", "Kings of Leon", "Bjork", "Spoon", "Octopus Project", "Bob Schneider"]
aclLineup.length;
// 6

// Looping through arrays section 

var names = ['Alice', 'Bob'];
for (var i=0; i < names.length; i += 1) {
  alert('Hello ' + names[i]);
}
// In a for loop, there are three statements, separated by semicolons:

// 1) Variable Initialization - var i=0 This is where you put the variable you will use to keep track of 
// how many times you have executed the loop.

// 2) Loop Conditional - i < names.length As long as this conditional is true, the loop will continue looping.

// 3) Increment Variable - i += 1 This statement happens right after a single loop executes. Usually it just increments the 
// variable you declared in statement 1.

// Partner Exercises # 1

// What does the following code snippets output?

var dice = function(array) {
	var results = [];
	for (var i = 0; i < array.length; i += 2) {
		results.push(array[i]);
	}
	return results;
}

// needs explanation

var scores = [10,20,30,40,50];
console.log("slice and dice:", dice(scores));
// slice & dice: [10, 30, 50]

scores = [11,22,33,44];
console.log("one more:", dice(scores));
// one more: [11, 33] 

// Partner Exercise # 2

// Create a show-friends.html in your exercises repo. Ask for the names of everyone at you table and add their names to the array.
// Create a for-loop below to show all of the arrays in an ordered list. 

// Add the names of everyone at your table   
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

var list = "<ul>"

// Create your for loop here
// HINT: the string should look like '<li>' + friends[x] + "</li>" + ....

for() {

}

list = list + '</li>'

// Use jQuery to select the body tag on the index and append the finish table string
$("body").append(list);


// Partner Exercise #3
// Now in the HTML, add an input to add new friends. Do the following:

// - Put the HTML creating for-loop in a createList function
// - Keep the var friends outside the function
// - Put a 'addFriend' function to push the value from the input into array.
// - Create an event handle to listen to the submit button click. On that click, get the value and use the addFriend 
//   function to add a friend, followed by using the createList function to repopulate the friend on the list.

// Homework/Extension
// Add a 'remove friend' button to each list item. When clicked, remove the friend from the array and repopulate the list.
// HINT: add the array index number to a 'data-id' of the list tag in order to find where the name is. 
// Here's what the HTML would look like:

    // <ul id="friendList">
    //     <li>Alex <button data-id="0">Unfriend</button></li>
    //     <li>Elyse <button data-id="1">Unfriend</button></li>
    //     <li>Mae <button data-id="2">Unfriend</button></li>
    //     <li>Sartaj <button data-id="3">Unfriend</button></li>
    // </ul>

































