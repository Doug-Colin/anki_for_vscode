# JavaScript Array Methods

## What does the map() method do?

Creates a new array by applying a function to each element of the original array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8]
```

Key points:

- Does NOT mutate the original array
- Returns a new array of the same length
- Skips empty slots in sparse arrays

[#javascript]() [#array-methods]() [#map]()

<!-- ----------------------------------------------------------------------------------- -->

## What does the filter() method return?

Returns a new array containing only elements that pass a test function.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

Key points:

- Does NOT mutate the original array
- Returns array that may be shorter than original
- If no elements pass test, returns empty array

[#javascript]() [#array-methods]() [#filter]()

<!-- ----------------------------------------------------------------------------------- -->

## What's the difference between map() and forEach()?

`map()` returns a new array, `forEach()` returns undefined.

```javascript
const arr = [1, 2, 3];

// map - returns new array
const doubled = arr.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]

// forEach - returns undefined, used for side effects
const result = arr.forEach((x) => console.log(x * 2));
console.log(result); // undefined
```

Use `map()` when you need a transformed array. Use `forEach()` when you just need to execute code for each element.

[#javascript]() [#array-methods]() [#map]() [#forEach]()

<!-- ----------------------------------------------------------------------------------- -->

## What does reduce() do?

Reduces an array to a single value by applying a function cumulatively.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// How it works:
// Step 1: acc = 0, curr = 1 → returns 1
// Step 2: acc = 1, curr = 2 → returns 3
// Step 3: acc = 3, curr = 3 → returns 6
// Step 4: acc = 6, curr = 4 → returns 10
```

Parameters: `reduce(callback, initialValue)`

- callback receives: (accumulator, currentValue, index, array)
- initialValue is optional but recommended

[#javascript]() [#array-methods]() [#reduce]()

<!-- ----------------------------------------------------------------------------------- -->

## What's the difference between find() and filter()?

`find()` returns the **first** matching element, `filter()` returns **all** matching elements in an array.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
];

// find - returns first match (single element)
const firstAlice = users.find((user) => user.name === "Alice");
console.log(firstAlice); // { id: 1, name: 'Alice' }

// filter - returns all matches (array)
const allAlices = users.filter((user) => user.name === "Alice");
console.log(allAlices); // [{ id: 1, name: 'Alice' }, { id: 3, name: 'Alice' }]
```

Use `find()` when you need one item. Use `filter()` when you need all matches.

[#javascript]() [#array-methods]() [#find]() [#filter]()

<!-- ----------------------------------------------------------------------------------- -->

## What does the function shitBurger() do?

Takes in hamburger argument and console logs "HAMBURGER SHITS!".

For example:

```javascript
function shitBurger (hamburger) => {
    // Do stuff like {... eat hamburger etc }
    console.log ("HAMBURGER SHITS!")
}
```

<!-- ----------------------------------------------------------------------------------- -->

## What does the function diarrheaPants() do?

Takes in an argument laxative and console logs "DIARRHEA PANTS!".

```javascript
function diarrheaPants (laxative) => {
    //  eat.laxative()
    console.log ( "DIARRHEA PANTS!")
}
```
