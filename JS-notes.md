It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

```js
const FAV_PET = "Cats";
let pet = "Dogs";
```

You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;
You can easily decrement or decrease a variable by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.

####
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

let myVar = 1;
myVar += 5;
console.log(myVar);
6 would be displayed in the console.



####
Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;


####
Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.


####
const arr1 = [1, 2, 3];
arr1.push(4, 5);
.push() takes one or more parameters and "pushes" them onto the end of the array.
The new arr1 will be [1, 2, 3, 4, 5].

.pop() is used to pop a value off of the end of an array. 
.shift() removes the first element instead of the last.
.unshift() adds elements to the beginning of an array.

const myList = [["book",20], ["pen", 5], ["pencil", 2], ["eraser", 1], ["ruler", 1]];

####
function reusableFunction() {
  console.log("Hi World");
}
/* create a function that prints "Hi World" to the console */
reusableFunction();
/* call the function */

function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);

