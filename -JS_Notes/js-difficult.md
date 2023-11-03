Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

Passed:nextInLine([], 5) should return a number.
Passed:nextInLine([], 1) should return 1
Passed:nextInLine([2], 1) should return 2
Passed:nextInLine([5,6,7,8,9], 1) should return 5
Failed:After nextInLine(testArr, 10), testArr[4] should be 10

---
my first solution that failed last one above:
```js
function nextInLine(arr, item) {
  // Only change code below this line
  if (arr.length === 0){
    return item;
  }
  else {
    return arr.shift();
  }
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```
---
Explanation:

The function nextInLine should take an array (arr) and a number (item) and return the first element of the array after adding the number to the end of the array. From the problem description, it sounds like this is a queue function, where you add (enqueue) an item to the end of the array and then remove (dequeue) the first item of the array.

Your current code only returns the first element of the array if the array is not empty, but it does not handle adding the new item to the end of the array. Here's how you can modify your function to meet the requirements:
```js
function nextInLine(arr, item) {
  // Add the item to the end of the array
  arr.push(item);
  
  // Remove the first item of the array and return it
  return arr.shift();
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Should log the number that was at the start of the array
console.log("After: " + JSON.stringify(testArr)); // The last item should now be 6
```
Now, when you run this code, nextInLine(testArr, 6) will return 1 because that is the number at the start of the array before 6 is added to the end. After the function call, testArr should be [2, 3, 4, 5, 6], which will have 6 as the last element as required by the last test case.


 testArr is [1, 2, 3, 4, 5]
When we say testArr[4], we are referring to the element in the array testArr at the fourth index. In JavaScript and many programming languages, array indices typically start from 0, so:

testArr[0] refers to the first element, which is 1.
testArr[1] refers to the second element, which is 2.
testArr[2] refers to the third element, which is 3.
testArr[3] refers to the fourth element, which is 4.
testArr[4] refers to the fifth element, which is 5.

After you call nextInLine(testArr, 10), the array becomes [2, 3, 4, 5, 10]. Now, testArr[4] refers to the fifth element of the modified array, which is 10, not 5 as it was initially.
