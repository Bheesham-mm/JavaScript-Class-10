// Prompt the user to enter a name to add to the array and store it in the variable 'addData'
var addData = prompt("Add You'r array Name");

// Initialize an empty array 'arr'
var arr = [];

// Find the index of the entered data in the array 'arr' (this will always be -1 because 'arr' is empty)
var arrData = arr.indexOf(addData);

// Check if 'addData' is not -1 (this condition is always true because 'addData' is a string and not a number)
if (addData !== -1) {
    // Add 'addData' to the array 'arr'
    arr.push(addData);
} else {
    // This block will never execute because 'addData' is a string and not -1
    alert("User data is not Foud");
}

// Check if 'addData' is an empty string
if (addData === "") {
    // Clear the array 'arr'
    arr.splice(0);
    // Add "user Data is Empty" to the array 'arr'
    arr.push("user Data is Empty");
    // Alert the user that the data is empty
    alert("user Data is ==> | Empty | ");
}

// Log the final state of the array 'arr' to the console
console.log(arr);

// var mainData = prompt("add you item name");
// var arR = ["item1", "item2", "item3", "item4"];

// var arrayData = arR.indexOf(mainData);
// if (condition) {
    
// }