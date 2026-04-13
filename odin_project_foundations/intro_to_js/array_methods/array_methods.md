## Which array method adds items to the end of an array?

<!-- notecardId: 1776084563779 -->

`array.push()`

[#arrays]() [#array.push()]() [#.push()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.push()` array method do, and what does it return?

<!-- notecardId: 1776084563780 -->

`array.push()` mutates an array by adding its arguments to the _end_ of an array, and it returns the lengthened `array.length`.

[#arrays]() [#array.push()]() [#.push()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Which array method extracts an item, or items, from the end of an array?

<!-- notecardId: 1776084563781 -->

`array.pop()`

[#arrays]() [#array.pop()]() [#.pop()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.pop()` array method do, and what does it return? Does it accept arguments?

<!-- notecardId: 1776084563782 -->

`array.pop()` mutates an array by removing and returning the last element; it does not accept arguments.

[#arrays]() [#array.pop()]() [#.pop()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Which array method extracts an item, or items, from the beginning of an array?

<!-- notecardId: 1776084563783 -->

`array.shift()`

[#arrays]() [#array.shift()]() [#.shift()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.shift()` array method do, and what does it return? Does it accept arguments?

<!-- notecardId: 1776084563784 -->

`array.shift()` mutates an array by removing and returning the first element; it does not accept arguments.

[#arrays]() [#array.shift()]() [#.shift()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Which array method adds an item, or items, to the beginning of an array?

<!-- notecardId: 1776084563785 -->

`array.unshift()`

[#arrays]() [#array.unshift()]() [#.unshift()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What operation does the `.unshift()` array method do, and what does it return?

<!-- notecardId: 1776084563786 -->

`array.unshift()` mutates an array by adding its arguments to the beginning of the array; it returns the increased `array.length`.

[#arrays]() [#array.unshift()]() [#.unshift()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Which array methods add and remove items at the beginning of arrays, add which and remove items at the ends of arrays??

<!-- notecardId: 1776084563787 -->

`.shift()` and `.unshift()` add and remove items from the beginning of arrays, and `.pop()` and `.push()` do so from the end of arrays.

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Of the array methods `.shift()`, `.unshift()`, `.pop()`, and `.push()`, which accept arguments, which do not, and what does each return?

<!-- notecardId: 1776084563788 -->

Of the four array methods mentioned, the additive methods `.push()` and `.unshift()` accept arguments and return the new `array.length`, while the subtractive methods `.shift` and `.pop()` do not accept args and return the single removed element.

[#arrays]() [#array.shift()]() [#.shift()]() [#array.unshift()]() [#.unshift()]() [#array.pop()]() [#.pop()] [#array-methods]()() [#array.push()]() [#.push()]()

<!------------------------------------------------------------------------------------------- -->

## Should you use .`delete` to remove array elements? Why/Why not?

<!-- notecardId: 1776084563789 -->

No, never use `.delete` to remove array elements, because `.delete` is designed for objects and it will remove an array element's value but not index, leaving that element `undefined`.

[#arrays]() [#array.delete()]() [.delete()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What array method is 'the swiss army knife' of methods, because it can insert, remove, and replace elements?

<!-- notecardId: 1776084563790 -->

`array.splice()`

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What's the syntax of the `array.splice` method?

<!-- notecardId: 1776084563791 -->

`array.splice(start, deleteCount, item1, item2, /* ..., */)`

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## How can you _add_ items to a specific part of an array using `array.splice()`?

<!-- notecardId: 1776084563792 -->

%
Add items to arrays using `array.splice()` by specifying where to `start` in the first argument, `0` as deleteCount in second argument, and giving values to add as additional arguments.

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## How does the behavior of `array.splice()` change if using a non-negative start parameter, versus using a negative one?

<!-- notecardId: 1776084563793 -->

%
With a non-negative initial `start` parameter, it counts from the front (zero-indexed); with a _negative_ `start` parameter, it counts from the back.
So `splice(3, deleteCount, item(s))` would start at index 3, the fourth element from the front, _inclusive_, whereas `splice(-3, deleteCount, item(s))` would start _three_ elements from the back, _inclusive_.

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## How can you easily calculate where a .splice() operation will begin, whether given a negative or non-negative initial start parameter?

<!-- notecardId: 1776084563794 -->

`array.length + start`
[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the array.splice() method return?

<!-- notecardId: 1776084563795 -->

An array of the deleted elements, or if none are removed, an empty array.

[#arrays]() [#array.splice()]() [#.splice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## The array.splice() method mutates the array; what method is best if you want the functionality of .splice(), but you want to return a _new_ array?

<!-- notecardId: 1776084563796 -->

`array.toSpliced()`; same syntax.

[#arrays]() [#array.splice()]() [#.splice()]() [#array.toSpliced()]() [#.toSpliced()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Which array methods accept negative index values to count from the back, and which don't?

<!-- notecardId: 1776084563797 -->

For the most part, all non-iterative array methods accept negative index values, whereas iterative methods do not.

[#arrays]() [#array-methods()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the array.slice() method return, and what does it do?

<!-- notecardId: 1776084563798 -->

Returns a _new_ array, with copies of elements from index `start` inclusive, through `end` exclusive.

[#arrays]() [#array.slice()]() [.slice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the array.slice() method?

<!-- notecardId: 1776084563799 -->

`array.slice([start][end])`; wherein `[start]` and `[end]` are zero-indexed if non-negative, and count from the back when negative.

[#arrays]() [#array.slice()]() [.slice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the array method `array.concat()` return?

<!-- notecardId: 1776084563800 -->

A new array containing the items from `array.`, and the array or value arguments passed into it.

[#arrays]() [#array.concat()]() [#.concat()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the array `array.concat()` method?

<!-- notecardId: 1776084563801 -->

`array.concat(args)`, where `args` can be array literals, or primitive values, but not non-array objects.

_note_: `.concat()` _can_ accept objects, but only when they are given `Symbol.isConcatSpreadable: true,` property; this is only really used to build library/framework internals and custom Stack or Queue collection classes.

[#arrays]() [#array.concat()]() [#.concat()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.forEach()` iterator method, and what does `.forEach()` return?

<!-- notecardId: 1776084563802 -->

`array.forEach(callback = (element, index, array) => {code})`
Return value of `.forEach()` is none/undefined.

[#arrays]() [#array.forEach()]() [#.forEach()]() [#iterators]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.indexOf()` method do/return?

<!-- notecardId: 1776084563803 -->

Forward search for a given element's first occurrence; returns the index, or `-1` if not found.

[#arrays]() [#array.indexOf()]() [.indexOf()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.lastIndexOf()` method do/return?

<!-- notecardId: 1776084563804 -->

Backwards search for a given element's last occurrence; returns the index, or `-1` if not found.

[#arrays]() [#array.lastIndexOf()]() [.lastIndexOf()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.includes()` method do/return?

<!-- notecardId: 1776084563805 -->

Returns the `true` or `false` depending on whether the given element is found in the array.

[#arrays]() [#array.includes()]() [#.includes()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of the array search methods `.indexOf()`, `.lastIndexOf()`, and `.includes()`?

<!-- notecardId: 1776084563806 -->

`array.indexOf(value, startIndex)`
`array.lastIndexOf(value, startIndex)`
`array.includes(value, startIndex)`

[#arrays]() [#array.includes()]() [#.includes()]() [#array.indexOf()]() [.indexOf()]() [#array.lastIndexOf()] [#array-methods]()() [.lastIndexOf()]()

<!------------------------------------------------------------------------------------------- -->

## If you need to search an array for `NaN`, is it better to use `.indexOf()`, or `.includes()`?

<!-- notecardId: 1776084563807 -->

Use `.includes()` if searching an array for `NaN`, as `.indexOf()` does not work with `NaN`.

[#arrays]() [#array.includes()]() [#.includes()]() [#array.indexOf()]() [.indexOf()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## If you need to search an array of objects for something, for example, and array of user objects for one with a certain .id property, what methods should you use, and why?

<!-- notecardId: 1776084563808 -->

Use the `array.find()` methods for searching arrays of objects, because they take callback functions with conditional logic.

[#arrays]() [#array.find()]() [#.find()]() [#array.findLast()]() [#.findLast()]() [#array.findIndex()]() [#. [#array-methods]()findIndex()]() [#array.findLastIndex()]() [#.findLastIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.find()` method do, and what does it return?

<!-- notecardId: 1776084563809 -->

Forward search for first element matching the callback's condition; returns element or `undefined` if not found.

[#arrays]() [#array.find()]() [#.find()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findLast()` method do, and what does it return?

<!-- notecardId: 1776084563810 -->

Backward search for last element matching the callback's condition; returns element or `undefined` if not found.

[#arrays]() [#array.find()]() [#.find()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findIndex()` method do, and what does it return?

<!-- notecardId: 1776084563811 -->

Forward search for first element matching the callback's condition; returns element's index or `-1` if not found.

[#arrays]() [#array.findIndex()]() [#.findIndex()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does `array.findLastIndex()` method do, and what does it return?

<!-- notecardId: 1776084563812 -->

Backward search for last element matching the callback's condition; returns element's index or `-1` if not found.

[#arrays]() [#array.findLastIndex()]() [#.findLastIndex()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for `array.find()`, `.findLast()`, `.findIndex()`, and `.findLastIndex()`?

<!-- notecardId: 1776084563813 -->

`array.find(currentElement, currIndex, currArray => condition)`, though usually only the first arg is used, so `array.find(currentElement => condition)`
For Example:

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
users.find((user) => user.id === 2);
```

[#arrays]() [#array.find()]() [#.find()]() [#array.findLast()]() [#.findLast()]() [#array.findIndex()]() [#. [#array-methods]()findIndex()]() [#array.findLastIndex()]() [#.findLastIndex()]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.filter()` method do, and what does it return?

<!-- notecardId: 1776084563814 -->

Filters an array for values matching the condition given in the callback; returns a new array

[#arrays]() [#array.filter()]() [#.filter()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.filter()` method?

<!-- notecardId: 1776084563815 -->

`array.filter(currentElement, currIndex, currArray => condition)`, though usually only first arg is used, so `array.find(currentElement => condition)`

[#arrays]() [#array.filter()]() [#.filter()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.map()` method do, and what does it return?

<!-- notecardId: 1776084563816 -->

Returns a _new_ array of the altered elements by operating on each element using the provided function.

[#arrays]() [#array.map()]() [#.map()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.map()` method?

<!-- notecardId: 1776084563817 -->

`array.map((element, index, array) => operation)`, though used most often as `array.map((element) => operation)`

[#arrays]() [#array.map()]() [#.map()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.sort()` method do, and what does it return?

<!-- notecardId: 1776084563818 -->

Modifies the array according to the given comparison function; returns a reference to the now-modified array.

[#arrays]() [#array.sort()]() [#.sort()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## How does `array.sort()` use a given comparison function to determine the order of array elements?

<!-- notecardId: 1776084563819 -->

If the comparison function returns a negative result, it swaps the element's orders, when it returns a positive result, it keeps them.

[#arrays]() [#array.sort()]() [#.sort()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.sort()` method?

<!-- notecardId: 1776084563820 -->

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

[#arrays]() [#array.sort()]() [#.sort()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## If `array.sort()` is not passed a comparison function, how does it sort the given array?

<!-- notecardId: 1776084563821 -->

By coercing the values to string characters and sorting by UTF-16 character code.

[#arrays]() [#array.sort()]() [#.sort()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reverse()` method do, and what does it return?

<!-- notecardId: 1776084563822 -->

Modifies the given array by reversing the element order; returns a reference to the now-modified array.

[#arrays]() [#array.reverse()]() [#.reverse()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `string.split()` method do, what does it return, and what does it have to do with arrays?

<!-- notecardId: 1776084563823 -->

`string.split()` splits a string into an array of substrings by the given pattern, or an array of characters if given none; returns the array.
It's useful because it enables using array methods for string operations.

[#arrays]() [#array.split()]() [#.split()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `string.split()` method?

<!-- notecardId: 1776084563824 -->

`string.split(char.pattern)`
For example:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";
sentence.split(" "); // returns [ "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog." ]
const word = "abracadabra";
word.split(""); // [ "a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a" ]
```

[#arrays]() [#array.split()]() [#.split()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.join()` method do, and what does it return?

<!-- notecardId: 1776084563825 -->

`array.join()` joins an array of elements into a single string, separated by the given pattern; returns the array.

[#arrays]() [#array.join()]() [#.join()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.join()` method?

<!-- notecardId: 1776084563826 -->

`array.join(stringPattern)`, wherein array elements are joined as a string, with the given pattern between them.

[#arrays]() [#array.join()]() [#.join()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reduce()` method do, what does it return? Does it mutate the original array?

<!-- notecardId: 1776084563827 -->

Returns the accumulated result of running the given callback on each element; does not mutate the original array.

[#arrays]() [#array.reduce()]() [#.reduce()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the `array.reduce()` method?

<!-- notecardId: 1776084563828 -->

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

[#arrays]() [#array.reduce()]() [#.reduce()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.reduceRight()` method do, and what does it return?

<!-- notecardId: 1776084563829 -->

Runs `array.reduce()`, but from back to front.

[#arrays]() [#array.reduceRight()]() [#.reduceRight()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## Can you use `typeof` to distinguish arrays from objects?

<!-- notecardId: 1776084563830 -->

No, because javascript arrays are type `object`, so `typeof` returns `object` for both arrays and objects.

[#arrays]() [#typeof()]() [#objects]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## If you need to check if a variable or value is an array, what built in function must you use?

<!-- notecardId: 1776084563831 -->

`array.isArray`; you _cannot_ use `typeof`, because arrays and objects are the same type in JS.

[#arrays]() [#.isArray()]() [#typeof()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What does the `array.isArray()` method do, and what does it return?

<!-- notecardId: 1776084563832 -->

Checks if a value is an array; returns `true` if so, otherwise 'false'.

[#arrays]() [#.isArray()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## In simple terms, what does .`this` refer to in JS?

<!-- notecardId: 1776084563833 -->

Generally, `.this` refers to whatever is to the left of the dot.

[#objects]() [#.this()]() [#this()]() [#arrays()]()

<!------------------------------------------------------------------------------------------- -->

## What is thisArg in array methods like forEach, map, filter etc.? What is it used for?

<!-- notecardId: 1776084563834 -->

Optional final argument that sets what `this` refers to _inside_ the callback; rarely and mainly used to solve `this` binding issues in older code.

[#objects]() [#.this()]() [#this()]() [#arrays()]() [#thisArg()]()

<!------------------------------------------------------------------------------------------- -->

## What array methods feature the optional thisArg parameter?

<!-- notecardId: 1776084563835 -->

The iterator methods that accept callbacks, except for `.reduce` and `.sort`.

[#objects]() [#.this()]() [#this()]() [#arrays()]() [#thisArg()]()

<!------------------------------------------------------------------------------------------- -->

## What's the quick and easy way to create a copy of an array?

<!-- notecardId: 1776084563836 -->

Call .slice() on the array, with no arguments.
`array.slice()`

[#arrays]() [#array.slice()]() [.slice()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## You can use `.filter` to filter arrays by a condition, and you can see if an array includes a value by passing the value into .`includes()`. But if you wanted to check if any of an array's values meet a certain condition, aside from using array.filter((element) => condition), what array method could you use?

<!-- notecardId: 1776084563837 -->

array.some()

[#arrays]() [#array.some()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for the array.some() method?

<!-- notecardId: 1776084563838 -->

array.some((element, index, array) => condition)

[#arrays]() [#array.some()]() [#array-methods]()

<!------------------------------------------------------------------------------------------- -->

<!--
```js
// filter unique array items
```
// Still make card(s) on js.info 'shuffle an array', Fisher-Yates sorting algorithm
 -->
