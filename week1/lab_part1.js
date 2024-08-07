// Part 1
// Write a JavaScript program to print the unit code and student name
console.log('FIT2095');
console.log('Oliver Huang');

// Write a JavaScript program to print the current date
var today = new Date();
console.log(`Todays date is: ${today.toLocaleDateString()}`);

// Write a JavaScript function that takes an array of integers and an element of type integer. The function returns the number of occurrences of the element in the input array.
const array = [1,3,3,4,5];
const element = 3;

function countOccurences(arr, element) {
  let count = 0;
  for (i of arr) {
    if (i == element) count++;
  }
  return count;
}
console.log(countOccurences(array, element));

// Write a JS code that prints the frequency of all the elements in an array of integers.
const array2 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
function countFrequency(arr) {
  const counts = {};

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  Object.keys(counts).forEach(key => console.log(key+": "+counts[key]));
}

countFrequency(array2);
