## What are the two syntaxes for creating a new array called?

<!-- notecardId: 1776084721584 -->

An array literal and the array constructor.

[#arrays]() [#array-constructor]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of creating an empty array using an array literal?

<!-- notecardId: 1776084721587 -->

`let arr = [];`

[#arrays]() [#array-literal]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of creating an empty array using an array constructor?

<!-- notecardId: 1776084721589 -->

`let arr = new Array();`

[#arrays]() [#array-constructor]()

<!------------------------------------------------------------------------------------------- -->

## What number does array indexing begin with?

<!-- notecardId: 1776084721591 -->

zero

[#arrays]()

<!------------------------------------------------------------------------------------------- -->

## How do you get a specific element from an array when you know its index number?

<!-- notecardId: 1776084721594 -->

Bracket notation: array[index]:

```js
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[2]); //logs "Plum"
```

[#arrays]() [#bracket-notation]()

<!------------------------------------------------------------------------------------------- -->

## What array method can be used to find the total count of elements in the array?

<!-- notecardId: 1776084721596 -->

array.length

[#arrays]() [#array.length]() [#.length]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for finding the total count of array elements?

<!-- notecardId: 1776084721598 -->

array.length
(Note, no parentheses after .length! It's an object property, not a method.)

[#arrays]() [#array.length]() [#.length]()

<!------------------------------------------------------------------------------------------- -->

## When should you use .at() over bracket notation with .length for referencing array elements, and why?

<!-- notecardId: 1776084721599 -->

You should use .at() when referencing the last item in an array, because it allows negative indexing, so it can be written much shorter than `array[array.length - 1]`.
Example:

```js
array.at(-1); // shorter, better, atleast for last/second to last element refs etc
array[array.length - 1];
```

[#arrays]() [#array.at()]() [#.at()]()

<!------------------------------------------------------------------------------------------- -->

## In CS terms, what is a queue?

<!-- notecardId: 1776084721601 -->

Queues are FIFO (first in first out) collections of ordered elements that support two operations; advancing the _queue_ by taking elements from the beginning of the array via `.shift()`, and adding to the queue by appending elements to the array's end via `.push()`.

[#arrays]() [#cs]() [#queues]() [#.push()]() [#.shift()]()

<!------------------------------------------------------------------------------------------- -->

## In CS terms, what is a stack?

<!-- notecardId: 1776084721602 -->

Stacks are LIFO (last in first out) collections of ordered elements that support two operations; advancing the _stack_ by taking an element from the _end_ of the array via `.pop()`, and adding to the stack by appending an element to the array's end via `.push()`.

[#arrays]() [#cs]() [#queues]() [#.push()]() [#.shift()]()

<!------------------------------------------------------------------------------------------- -->

## ## Both queues and stacks use `.push()` to add elements. How do they differ in removal, and why?

<!-- notecardId: 1776084721604 -->

Stacks use `.pop()` (remove from end) because LIFO means the last item in is the first out.
Queues use `.shift()` (remove from beginning) because FIFO means the first item in is the first out.
The removal end is what determines whether a structure is LIFO or FIFO.

[#arrays]() [#cs]() [#stacks]() [#queues]() [#.pop()]() [#.shift()]()?

<!------------------------------------------------------------------------------------------- -->

## If you needed to remove an element from the end of an array, leaving it one element shorter, what array method do you use?

<!-- notecardId: 1776084721606 -->

`.pop()`

[#arrays]() [#array.pop()]() [#.pop()]()

<!------------------------------------------------------------------------------------------- -->

## If you needed to add an element to the end of an array, leaving it one element longer, what array method do you use?

<!-- notecardId: 1776084721608 -->

`.push(element)`

[#arrays]() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## What is similar, and different, between the results of `array.pop()` and `array.at(-1)`?

<!-- notecardId: 1776084721610 -->

Both .pop() and .at(-1) `return` the last element of an array, but they differ in that .pop() _removes_ the element, modifying the array, while `.at(-1)` does not modify the array.

[#arrays]() [#array.pop()]() [#.pop()]() [#array.at()]() [#.at()]()

<!------------------------------------------------------------------------------------------- -->

## What array method would you use if you wanted to return the first element from an array, and remove it, modifying the array?

<!-- notecardId: 1776084721612 -->

`.shift()`

_Rememeber_: to _advance_ the queue, you `.shift()` the line forward.

[#arrays]()

<!------------------------------------------------------------------------------------------- -->

## What array method would you use if you wanted to add an element to the beginning of an array, modifying the array?

<!-- notecardId: 1776084721614 -->

`.unshift()`

[#arrays]() [#array.shift()]() [#.shift()]()

<!------------------------------------------------------------------------------------------- -->

## Array methods `.push()` and `.unshift()` add elements to the end and beginning of arrays, respectively. But how can you 'push' or 'unshift' multiple elements onto the beginning or end of an array?

<!-- notecardId: 1776084721615 -->

By using the same methods with additional arguments, both `.push()` and `.unshift()` support adding multiple elements at once.

[#arrays]() [#array.shift()]() [#.shift()]() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## In JavaScript, what, exactly, is an array?

<!-- notecardId: 1776084721617 -->

JavaScript arrays are just objects whose key-value pairs are ordered numbers and elements, respectively, with a single `length` property and array-specific prototype methods.

[#arrays]()

<!------------------------------------------------------------------------------------------- -->

## Why do array methods `.push()` and `.pop()` run fast, while `.shift()` and `.unshift()` run slow? Explain:

<!-- notecardId: 1776084721618 -->

Because `.push()` and `.pop()` require less operations than `.shift()` and `.unshift()`; this is because `.push()` and `.pop()` work on the end, rather than beginning, of the array, and working on the end of an array only requires adding or removing elements and adjusting .length property, while adding or removing elements from the front of the array via `.shift()` and `.unshift()` requires the same operations _plus_ changing all of the array indices to shift them left (deleting or adding element at index 0 requires changing indices of all elements)

[#arrays]() [#objects]()

<!------------------------------------------------------------------------------------------- -->

## Explain, _step by step_, how to write a `for` loop that loops over the indices of the array `let arr = ["A", "B", "C", D", "E", "F", "G"]:

1. Set initializer to zero, representing the first index, append semicolon: `let i = 0;`
2. Set condition to initializer _less than_ array.length, append semicolon: `i < array.length;`
   -> In other words: When `i < array.length;` evaluates to `false`, break, so that the loop breaks once the initializer _equals_ array.length.
3. Set the step/update expression to post increment: `i++`.

[#arrays]() [#for-loop]() [#for...loop]()

<!------------------------------------------------------------------------------------------- -->

## Why are parentheses not required when using `array.length`?

<!-- notecardId: 1776084721622 -->

Because array.length is a _property_ of the array object, not a method.

[#arrays]() [#objects]()

<!------------------------------------------------------------------------------------------- -->

## Explain how the condition of `for` loop breaks, or stops?

<!-- notecardId: 1776084721624 -->

The condition of a `for` loop stops the loop when the condition is _no longer_ true; i.e. when the condition is false.
In plain english, a `for` loop means: Run this code repeatedly, until this condition stops being true (hmm... that could be a `while` loop-ish explanation...)

[#arrays]() [#for-loop]() [#for...loop]()

<!------------------------------------------------------------------------------------------- -->

## When do you use a `for...of` loop?

<!-- notecardId: 1776084721626 -->

When you want to iterate over an array and don't need the indices.

[#arrays]() [#for-of-loop]() [#for...of-loop]()

<!------------------------------------------------------------------------------------------- -->

## What `for...of` loops used and optimized for?

<!-- notecardId: 1776084721628 -->

`for...of` loops are used and optimized for arrays, and only iterate array _values_, without accessing indices or other object keys/properties, like .length.

[#arrays]() [#objects]() [#for-of-loop]() [#for...of-loop]()

<!------------------------------------------------------------------------------------------- -->

## What are `for...in` loops used and optimized for?

<!-- notecardId: 1776084721630 -->

`for...in` loops are used and optimized for generic objects, not arrays, as `for...in` iterates all object properties.

[#arrays]() [#objects]() [#for-in-loop]() [#for...in-loop]()

<!------------------------------------------------------------------------------------------- -->

## How is the .length property calculated?

<!-- notecardId: 1776084721632 -->

array.length is not a count of array elements, it is actually simply calculated by highest index + 1.

[#arrays]() [#objects]() [#.length]()

<!------------------------------------------------------------------------------------------- -->

## Explain the results of the following code, line by line:

```js
1| let fruits = [];
2| fruits[123] = "Apple";
```

%

```js
1| let fruits = [];
2| fruits[123] = "Apple";
```

Line 1| declares an empty array literal named `fruits`
Line 2| _assigns_ the string value "Apple" to index `123` of the previously empty `fruits` array.

[#arrays]() [#bracket-notation]()

<!------------------------------------------------------------------------------------------- -->

## What's the result of logging the `.length` property of the below array, `fruits`, and why?

```js
1| let fruits = [];
2| fruits[123] = "Apple";
3| console.log(fruits.length)
```

%

```js
1| let fruits = [];
2| fruits[123] = "Apple";
3| console.log(fruits.length)
```

`124`, because line `2|` _assigns_ the string value `"Apple"` to the index `123` of the previously empty `fruits` array;
since arrays begin at index `0`, the array is now `124` elements long, with every element but the last being `undefined` and the last element being `"Apple"`.

[#arrays]() [#.length]() [#bracket-notation]()

<!------------------------------------------------------------------------------------------- -->

## What's the simplest way to clear an array?

<!-- notecardId: 1776084721638 -->

`array.length = 0`

[#arrays]() [#.length]()

<!------------------------------------------------------------------------------------------- -->

## If the array constructor is used to call a `new Array`, with a single number-value argument, what does it do?

```js
let arr = new Array(16);
```

%
Creates a new array that with a `.length` value of that number, in this case, a `16` element long array with all elements holding `undefined`.

[#arrays]() [#arrays-constructor]() [#.length]()

<!------------------------------------------------------------------------------------------- -->

## How would you reference the value `2` in the following two-dimensional array, or matrix?

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

%
By using bracket notation to reference the first 'row' of the outer array, row `[0]`, immediately followed by referencing the index of element two in that first inner array, via `[1]`,
so: `matrix[0][1]`

[#arrays]() [#matrices]() [#matrix]() [#multi-dimensional arrays]()

<!------------------------------------------------------------------------------------------- -->

## What method should be used for converting an array to a string?

<!-- notecardId: 1776084721643 -->

array.join(), with the element separator string passed as argument.

For example, `["F", "O", "R", "T"].join("")` returns `"FORT"`; `["F", "O", "R", "T"].join("-")` returns `"F-O-R-T"`

[#arrays]() [#array.join()]() [#.join()]() [#array-methods()]()

<!------------------------------------------------------------------------------------------- -->

## What are the valid methods for comparing arrays of primitive values?

<!-- notecardId: 1776084721644 -->

Compare arrays item-by-item using the _strict_ equality operator, `===` in `array.every()` with a callback, or alternately more verbosely, nested loops.

For example via `array.every()`:
arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);

[#arrays]() [#objects]() [#array.every()]() [.every()]()

<!------------------------------------------------------------------------------------------- -->

## What comparison operator should you use when comparing arrays of primitive values, and which should you not?

<!-- notecardId: 1776084721645 -->

Compare arrays item-by-item using the _strict_ equality operator, `===`, never the loose equality operator `==`.

[#arrays]() [#objects]() [#strict-equality]() [#loose-equality]()

<!------------------------------------------------------------------------------------------- -->

## What are the valid methods for comparing arrays of objects, or nested arrays (objects within objects)?, a.k.a 'deep' arrays?

<!-- notecardId: 1776084721646 -->

Use a utility function from a utils library like Lodash or underscore, for example `_.isEqual(arr1, arr2);`.

[#arrays]() [#objects]() [#lodash]() [#underscore]() [#utilities]()

<!------------------------------------------------------------------------------------------- -->

## What are `for...of` and `for...in` valid loops for, respectively?

<!-- notecardId: 1776084721647 -->

Use `for...of` for iterating through _arrays_ as `for...of` iterates only element values, no indices.
use `for...in` for iterating _objects_ properties, as `for...in` iterates all object properties and is optimized for

_Remember_: IN objects, OF arrays. OF arrays, IN objects.

[#arrays]() [#objects]() [#for-of-loop]() [#for...in]# [#for-in-loop]#

<!------------------------------------------------------------------------------------------- -->
