## Which array method adds items to the end of an array?

<!-- notecardId: 1776045488906 -->

`array.push()`

[#arrays]() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.push()` array method do, and what does it return?

<!-- notecardId: 1776045488908 -->

`array.push()` mutates an array by adding its arguments to the _end_ of an array, and it returns the lengthened `array.length`.

[#arrays]() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## Which array method extracts an item, or items, from the end of an array?

<!-- notecardId: 1776045488909 -->

`array.pop()`

[#arrays]() [#array.pop()]() [#.pop()]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.pop()` array method do, and what does it return? Does it accept arguments?

<!-- notecardId: 1776045488910 -->

`array.pop()` mutates an array by removing and returning the last element; it does not accept arguments.

[#arrays]() [#array.pop()]() [#.pop()]()

<!------------------------------------------------------------------------------------------- -->

## Which array method extracts an item, or items, from the beginning of an array?

<!-- notecardId: 1776045488912 -->

`array.shift()`

[#arrays]() [#array.shift()]() [#.shift()]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.shift()` array method do, and what does it return? Does it accept arguments?

<!-- notecardId: 1776045488913 -->

`array.shift()` mutates an array by removing and returning the first element; it does not accept arguments.

[#arrays]() [#array.shift()]() [#.shift()]()

<!------------------------------------------------------------------------------------------- -->

## Which array method adds an item, or items, to the beginning of an array?

<!-- notecardId: 1776045488914 -->

`array.unshift()`

[#arrays]() [#array.unshift()]() [#.unshift()]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.unshift()` array method do, and what does it return?

<!-- notecardId: 1776045488915 -->

`array.unshift()` mutates an array by adding its arguments to the beginning of the array; it returns the increased `array.length`.

[#arrays]() [#array.unshift()]() [#.unshift()]()

<!------------------------------------------------------------------------------------------- -->

## Which array methods add and remove items at the beginning of arrays, add which and remove items at the ends of arrays??

<!-- notecardId: 1776045488916 -->

`.shift()` and `.unshift()` add and remove items from the beginning of arrays, and `.pop()` and `.push()` do so from the end of arrays.

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## Of the array methods `.shift()`, `.unshift()`, `.pop()`, and `.push()`, which accept arguments, which do not, and what does each return?

<!-- notecardId: 1776045488917 -->

Of the four array methods mentioned, the additive methods `.push()` and `.unshift()` accept arguments and return the new `array.length`, while the subtractive methods `.shift` and `.pop()` do not accept args and return the single removed element.

[#arrays]() [#array.shift()]() [#.shift()]() [#array.unshift()]() [#.unshift()]() [#array.pop()]() [#.pop()]() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## Should you use .`delete` to remove array elements? Why/Why not?

<!-- notecardId: 1776045488918 -->

No, never use `.delete` to remove array elements, because `.delete` is designed for objects and it will remove an array element's value but not index, leaving that element `undefined`.

[#arrays]() [#array.delete()]() [.delete()]()

<!------------------------------------------------------------------------------------------- -->

## What array method is 'the swiss army knife' of methods, because it can insert, remove, and replace elements?

<!-- notecardId: 1776045488919 -->

`array.splice()`

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## What's the syntax of the `array.splice` method?

<!-- notecardId: 1776045488920 -->

`array.splice(start, deleteCount, item1, item2, /* ..., */)`

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## How can you _add_ items to a specific part of an array using `array.splice()`?

<!-- notecardId: 1776045488921 -->

%
Add items to arrays using `array.splice()` by specifying where to `start` in the first argument, `0` as deleteCount in second argument, and giving values to add as additional arguments.

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## How does the behavior of `array.splice()` change if using a non-negative start parameter, versus using a negative one?

<!-- notecardId: 1776045488922 -->

%
With a non-negative initial `start` parameter, it counts from the front (zero-indexed); with a _negative_ `start` parameter, it counts from the back.
So `splice(3, deleteCount, item(s))` would start at index 3, the fourth element from the front, _inclusive_, whereas `splice(-3, deleteCount, item(s))` would start _three_ elements from the back, _inclusive_.

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## How can you easily calculate where a .splice() operation will begin, whether given a negative or non-negative initial start parameter?

<!-- notecardId: 1776045488923 -->

`array.length + start`
[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## What does the array.splice() method return?

<!-- notecardId: 1776045488924 -->

An array of the deleted elements, or if none are removed, an empty array.

[#arrays]() [#array.splice()]() [#.splice()]()

<!------------------------------------------------------------------------------------------- -->

## The array.splice() method mutates the array; what method is best if you want the functionality of .splice(), but you want to return a _new_ array?

<!-- notecardId: 1776045488925 -->

`array.toSpliced()`; same syntax.

[#arrays]() [#array.splice()]() [#.splice()]() [#array.toSpliced()]() [#.toSpliced()]()

<!------------------------------------------------------------------------------------------- -->

## Which array methods accept negative index values to count from the back, and which don't?

<!-- notecardId: 1776045488926 -->

For the most part, all non-iterative array methods accept negative index values, whereas iterative methods do not.

[#arrays]() [#array-methods()]()

<!------------------------------------------------------------------------------------------- -->

## What does the array.slice() method return, and what does it do?

<!-- notecardId: 1776045488927 -->

Returns a _new_ array, with copies of elements from index `start` inclusive, through `end` exclusive.

[#arrays]() [#array.slice()]() [.slice()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the array.slice() method?

<!-- notecardId: 1776045488928 -->

`array.slice([start][end])`; wherein `[start]` and `[end]` are zero-indexed if non-negative, and count from the back when negative.

[#arrays]() [#array.slice()]() [.slice()]()

<!------------------------------------------------------------------------------------------- -->

## What does the array method `array.concat()` return?

<!-- notecardId: 1776045488929 -->

A new array containing the items from `array.`, and the array or value arguments passed into it.

[#arrays]() [#array.concat()]() [#.concat()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the array `array.concat()` method?

<!-- notecardId: 1776045488930 -->

`array.concat(args)`, where `args` can be array literals, or primitive values, but not non-array objects.

_note_: `.concat()` _can_ accept objects, but only when they are given `Symbol.isConcatSpreadable: true,` property; this is only really used to build library/framework internals and custom Stack or Queue collection classes.

[#arrays]() [#array.concat()]() [#.concat()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.forEach()` iterator method, and what does `.forEach()` return?

<!-- notecardId: 1776045488931 -->

`array.forEach(callback = (element, index, array) => {code})`
Return value of `.forEach()` is none/undefined.

[#arrays]() [#array.forEach()]() [#.forEach()]() [#iterators]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.indexOf()` method do/return?

<!-- notecardId: 1776045488932 -->

Forward search for a given element's first occurrence; returns the index, or `-1` if not found.

[#arrays]() [#array.indexOf()]() [.indexOf()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.lastIndexOf()` method do/return?

<!-- notecardId: 1776045488933 -->

Backwards search for a given element's last occurrence; returns the index, or `-1` if not found.

[#arrays]() [#array.lastIndexOf()]() [.lastIndexOf()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.includes()` method do/return?

<!-- notecardId: 1776045488934 -->

Returns the `true` or `false` depending on whether the given element is found in the array.

[#arrays]() [#array.includes()]() [#.includes()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of the array search methods `.indexOf()`, `.lastIndexOf()`, and `.includes()`?

<!-- notecardId: 1776045488935 -->

`array.indexOf(value, startIndex)`
`array.lastIndexOf(value, startIndex)`
`array.includes(value, startIndex)`

[#arrays]() [#array.includes()]() [#.includes()]() [#array.indexOf()]() [.indexOf()]() [#array.lastIndexOf()]() [.lastIndexOf()]()

<!------------------------------------------------------------------------------------------- -->

## If you need to search an array for `NaN`, is it better to use `.indexOf()`, or `.includes()`?

<!-- notecardId: 1776045488936 -->

Use `.includes()` if searching an array for `NaN`, as `.indexOf()` does not work with `NaN`.

[#arrays]() [#array.includes()]() [#.includes()]() [#array.indexOf()]() [.indexOf()]()

<!------------------------------------------------------------------------------------------- -->

## If you need to search an array of objects for something, for example, and array of user objects for one with a certain .id property, what methods should you use, and why?

<!-- notecardId: 1776045488937 -->

Use the `array.find()` methods for searching arrays of objects, because they take callback functions with conditional logic.

[#arrays]() [#array.find()]() [#.find()]() [#array.findLast()]() [#.findLast()]() [#array.findIndex()]() [#.findIndex()]() [#array.findLastIndex()]() [#.findLastIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.find()` method do, and what does it return?

<!-- notecardId: 1776045488938 -->

Forward search for first element matching the callback's condition; returns element or `undefined` if not found.

[#arrays]() [#array.find()]() [#.find()]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findLast()` method do, and what does it return?

<!-- notecardId: 1776045488939 -->

Backward search for last element matching the callback's condition; returns element or `undefined` if not found.

[#arrays]() [#array.find()]() [#.find()]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findIndex()` method do, and what does it return?

<!-- notecardId: 1776045488940 -->

Forward search for first element matching the callback's condition; returns element's index or `-1` if not found.

[#arrays]() [#array.findIndex()]() [#.findIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findLastIndex()` method do, and what does it return?

<!-- notecardId: 1776045488941 -->

Backward search for last element matching the callback's condition; returns element's index or `-1` if not found.

[#arrays]() [#array.findLastIndex()]() [#.findLastIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for `array.find()`, `.findLast()`, `.findIndex()`, and `.findLastIndex()`?

<!-- notecardId: 1776045488942 -->

`array.find(currentElement, currIndex, currArray => condition)`, though usually only the first arg is used, so `array.find(currentElement => condition)`
For Example:

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
users.find((user) => user.id === 2);
```

[#arrays]() [#array.find()]() [#.find()]() [#array.findLast()]() [#.findLast()]() [#array.findIndex()]() [#.findIndex()]() [#array.findLastIndex()]() [#.findLastIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.filter()` method do, and what does it return?

<!-- notecardId: 1776045488943 -->

Filters an array for values matching the condition given in the callback; returns a new array

[#arrays]() [#array.filter()]() [#.filter()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.filter()` method?

<!-- notecardId: 1776045488944 -->

`array.filter(currentElement, currIndex, currArray => condition)`, though usually only first arg is used, so `array.find(currentElement => condition)`

[#arrays]() [#array.filter()]() [#.filter()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.map()` method do, and what does it return?

<!-- notecardId: 1776045488945 -->

Returns a _new_ array of the altered elements by operating on each element using the provided function.

[#arrays]() [#array.map()]() [#.map()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.map()` method?

<!-- notecardId: 1776045488946 -->

`array.map((element, index, array) => operation)`, though used most often as `array.map((element) => operation)`

[#arrays]() [#array.map()]() [#.map()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.sort()` method do, and what does it return?

<!-- notecardId: 1776045488947 -->

Modifies the array according to the given comparison function; returns a reference to the now-modified array.

[#arrays]() [#array.sort()]() [#.sort()]()

<!------------------------------------------------------------------------------------------- -->

## How does `array.sort()` use a given comparison function to determine the order of array elements?

<!-- notecardId: 1776045488948 -->

If the comparison function returns a negative result, it swaps the element's orders, when it returns a positive result, it keeps them.

[#arrays]() [#array.sort()]() [#.sort()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.sort()` method?

<!-- notecardId: 1776045488949 -->

`array.sort((a,b) => {comparison fn})`

For example:

```js
array.sort((a, b) => {
  a - b;
});
array.sort((a, b) => {
  a.length - b.length;
});
array.sort((a, b) => {
  a.localeCompare(b);
});
```

[#arrays]() [#array.sort()]() [#.sort()]()

<!------------------------------------------------------------------------------------------- -->

## If `array.sort()` is not passed a comparison function, how does it sort the given array?

<!-- notecardId: 1776045488950 -->

By coercing the values to string characters and sorting by UTF-16 character code.

[#arrays]() [#array.sort()]() [#.sort()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reverse()` method do, and what does it return?

<!-- notecardId: 1776045488951 -->

Modifies the given array by reversing the element order; returns a reference to the now-modified array.

[#arrays]() [#array.reverse()]() [#.reverse()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `string.split()` method do, what does it return, and what does it have to do with arrays?

<!-- notecardId: 1776045488952 -->

`string.split()` splits a string into an array of substrings by the given pattern, or an array of characters if given none; returns the array.
It's useful because it enables using array methods for string operations.

[#arrays]() [#array.split()]() [#.split()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `string.split()` method?

<!-- notecardId: 1776045488953 -->

`string.split(char.pattern)`
For example:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";
sentence.split(" "); // returns [ "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog." ]
const word = "abracadabra";
word.split(""); // [ "a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a" ]
```

[#arrays]() [#array.split()]() [#.split()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.join()` method do, and what does it return?

<!-- notecardId: 1776045488954 -->

`array.join()` joins an array of elements into a single string, separated by the given pattern; returns the array.

[#arrays]() [#array.join()]() [#.join()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.join()` method?

<!-- notecardId: 1776045488955 -->

`array.join(stringPattern)`, wherein array elements are joined as a string, with the given pattern between them.

[#arrays]() [#array.join()]() [#.join()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reduce()` method do, what does it return? Does it mutate the original array?

<!-- notecardId: 1776045488956 -->

Returns the accumulated result of running the given callback on each element; does not mutate the original array.

[#arrays]() [#array.reduce()]() [#.reduce()]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.reduce()` method?

<!-- notecardId: 1776045488957 -->

`array.reduce((accumulator, currentValue, index, array) => {}, initialValue)`

_Note_: Often only called with accumulator and value args, for example:

```js
array.reduce((sum, currentValue) => sum + currentValue);
```

whereas in the following version:

```js
// initalValue sets accumulator `sum` to 10 before adding each element.
const initialValue = 10;
array.reduce((sum, currentValue) => {
  return sum + currentValue;
}, initialValue);
```

[#arrays]() [#array.reduce()]() [#.reduce()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reduceRight()` method do, and what does it return?

<!-- notecardId: 1776045488958 -->

Runs `array.reduce()`, but from back to front.

[#arrays]() [#array.reduceRight()]() [#.reduceRight()]()

<!------------------------------------------------------------------------------------------- -->

## Can you use `typeof` to distinguish arrays from objects?

<!-- notecardId: 1776045488959 -->

No, because javascript arrays are type `object`, so `typeof` returns `object` for both arrays and objects.

[#arrays]() [#typeof()]() [#objects]()

<!------------------------------------------------------------------------------------------- -->

## If you need to check if a variable or value is an array, what built in function must you use?

<!-- notecardId: 1776045488960 -->

`array.isArray`; you _cannot_ use `typeof`, because arrays and objects are the same type in JS.

[#arrays]() [#.isArray()]() [#typeof()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.isArray()` method do, and what does it return?

<!-- notecardId: 1776045488961 -->

Checks if a value is an array; returns `true` if so, otherwise 'false'.

[#arrays]() [#.isArray()]()

<!------------------------------------------------------------------------------------------- -->

## In simple terms, what does .`this` refer to in JS?

<!-- notecardId: 1776045488962 -->

Generally, `.this` refers to whatever is to the left of the dot.

[#objects]() [#.this()]() [#this()]() [#arrays()]()

<!------------------------------------------------------------------------------------------- -->

## What is thisArg in array methods like forEach, map, filter etc.? What is it used for?

<!-- notecardId: 1776045488963 -->

Optional final argument that sets what `this` refers to _inside_ the callback; rarely and mainly used to solve `this` binding issues in older code.

[#objects]() [#.this()]() [#this()]() [#arrays()]() [#thisArg()]()

<!------------------------------------------------------------------------------------------- -->

## What array methods feature the optional thisArg parameter?

<!-- notecardId: 1776045488964 -->

The iterator methods that accept callbacks, except for `.reduce` and `.sort`.

[#objects]() [#.this()]() [#this()]() [#arrays()]() [#thisArg()]()

<!------------------------------------------------------------------------------------------- -->

## What's the quick and easy way to create a copy of an array?

<!-- notecardId: 1776045488965 -->

Call .slice() on the array, with no arguments.
`array.slice()`

[#arrays]() [#array.slice()]() [.slice()]()

<!------------------------------------------------------------------------------------------- -->

```js
// filter unique array items
```

// Still make card(s) on js.info 'shuffle an array', Fisher-Yates sorting algorithm
