## How many data types are there in JS?

Eight

[#JavaScript]() [#CS]() [#data types]() [#types]()

<!------------------------------------------------------------------------------------------- -->

## Name the eight data types of JS.

`number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `object`.

[#JavaScript]() [#CS]() [#data types]() [#types]()

<!------------------------------------------------------------------------------------------- -->

## Which data types in JS are considered primitive?

In JS, all of the data types are considered primitive, with the sole exception of `object`, so JavaScript's _primitive_ data types are `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, and `symbol`.

[#JavaScript]() [#CS]() [#data types]() [#types]() [#primitive]()

<!------------------------------------------------------------------------------------------- -->

## How many non-primitive data types are there in JavaScript? Name them all.

One! `object`; the rest of JavaScript's data types are primitive.

[#JavaScript]() [#CS]() [#data types]() [#types]() [#primitive]()

<!------------------------------------------------------------------------------------------- -->

## Aside from integers and floating point numbers, what else in JS has type `number`?

The three 'special numeric values', `Infinity`, `-Infinity`, and `NaN`.

[#JavaScript]() [#data types]() [#types]() [#numbers]()

<!------------------------------------------------------------------------------------------- -->

## What does it mean when we say that `NaN` is 'sticky', or 'contagious'?

That a `NaN` in any mathematical expression will propagate to the whole result, returning `NaN`.

[#JavaScript]() [#data types]() [#types]() [#numbers]()

<!------------------------------------------------------------------------------------------- -->

## What is the JS `BigInt` data type?

In JS,

[#JavaScript]() [#data types]() [#types]() [#numbers]() [#BigInt]()

<!------------------------------------------------------------------------------------------- -->

## How do you create a `BigInt` in JS?

By appending `n` to the number.

_Example_:

```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

[#JavaScript]() [#data types]() [#types]() [#numbers]() [#BigInt]()

<!------------------------------------------------------------------------------------------- -->

## What operator can be used to see the data type stored in a variable?

The `typeof` operator.

[#JavaScript]() [#data types]() [#types]() [#typeof]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax used for finding a variable's data type via the `typeof` operator?

The operator with the operand appended, _either_ after a space, or within parentheses.

_Example_:
`typeof "dictionary"` and `typeof(dictionary)` both work, and return `string`.

_Note_: `typeof` is an operator, _not_ a function, despite the parenthetical 'argument' syntax working.

[#JavaScript]() [#data types]() [#types]() [#typeof]()

<!------------------------------------------------------------------------------------------- -->

## What does the `typeof` operator return when applied to operand `null`?

`"object"`. Note, however, that this is a longstanding error in the language, and `null` is not actually an object.

[#JavaScript]() [#data types]() [#types]() [#numbers]()

<!------------------------------------------------------------------------------------------- -->

## What's the output of each of the alert statements in the following script?

```js
let name = "Ilya";

alert(`hello ${1}`); // ?

alert(`hello ${"name"}`); // ?

alert(`hello ${name}`); // ?
```

%

```js
let name = "Ilya";

// the expression is a number 1
alert(`hello ${1}`); // hello 1

// the expression is a string "name"
alert(`hello ${"name"}`); // hello name

// the expression is a variable, embed it
alert(`hello ${name}`); // hello Ilya
```

[#JavaScript]() [#data types]() [#types]() [#numbers]()

<!------------------------------------------------------------------------------------------- -->

## What are the three delimiters for JavaScript string values ?

Double quotes, single quotes, and backticks.

[#JavaScript]() [#strings]()

<!------------------------------------------------------------------------------------------- -->

## What is a template literal, and how does it differ from other strings in JS?

A template literal is a string delimited by backticks, unlike single or double quote delimited strings, template literals enable embedding of variables or expressions, by passing them into `${}` within the template literal.

[#JavaScript]() [#strings]() [#template literals]()

<!------------------------------------------------------------------------------------------- -->

## What type of value do all logical operators return in JS?

_All_ JS logical operators return a `boolean` value.

[#JavaScript]() [#logical operators]()

<!------------------------------------------------------------------------------------------- -->

## How does JS determine which operand is 'greater' when using `<`, `>`, `<=`, `>=` on two string operands?

JS compares strings character by character, left to right, by each character's Unicode code point (a plain integer, represented in HexaDecimal); the _first_ character with a greater Unicode code point integer is 'greater'.

_Example_:
`'Glow' > 'Glee'` //→ `G` then`l` are equal, then `o` (111) vs `e` (101) //→ `true`

_Gotcha:_ uppercase letters have lower code points than lowercase, as they come first in the unicode table — `'Z' < 'a'` is `true`, not intuitive alphabetical order.

_Note_: For locale-aware alphabetical sorting use `str.localeCompare()` instead of `<` / `>`.

[#javascript]() [#strings]() [#comparison operators]() [#unicode]() [#locale]()

<!------------------------------------------------------------------------------------------- -->

## How does JS evaluate the equality of `null` and `undefined` using the strict `===` and loose `==` equality operators?

The strict equality operator (`===`) returns `false` when comparing `null` and `undefined`.
However, the loose equality operator (`==`) returns `true` when comparing `null` and `undefined`.

_Note_: Thw loose (`==`) equality of `null` and `undefined` is simply a hardcoded rule in the JS spec, there is no value coercion going on.

[#JavaScript]() [#comparison operators]() [#comparison]() [#null]() [#undefined]()

<!------------------------------------------------------------------------------------------- -->

## How should you handle comparisons involving `null` or `undefined`?

Avoid using mathematical comparison operators (`>`, `<`, `>=`, `<=`) with values that could be `null` or `undefined` — coercion behavior is unintuitive and a common bug source. Check for `null`/`undefined` _explicitly_ and _separately_ before comparing.
Only `===` behaves predictably with both — use it when you need to distinguish them.

[#javascript]() [#null]() [#undefined]() [#operators]() [#best practices]()

<!------------------------------------------------------------------------------------------- -->

## What will be the result for these expressions?

```js
5 > 4;
"apple" > "pineapple";
"2" > "12";
undefined == null;
undefined === null;
null == "\n0\n";
null === +"\n0\n";
```

%

```js
5 > 4; ////→ true
"apple" > "pineapple"; //→ false, "a" unicode char code is not > that of "p"
"2" > "12"; //→ true,  "2" unicode char code IS > than that of "1", comparison returns there
undefined == null; //→ true, hardcoded in the JS spec
undefined === null; //→ false
null == "\n0\n"; //→ false, even with loose equality operator, null is only 'loosely equal' to undefined.
null === +"\n0\n"; //→ false, null === (anything but null) is always false
```

[#JavaScript]() [#data types]() [#null]() [#undefined]() [#comparison operators]()

<!------------------------------------------------------------------------------------------- -->

## How many are logical operators are there in JavaScript?

Four.

[#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the four logical operators in JavaScript?

AND (`&&`), OR (`||`), NOT (`!`), and Nullish Coalescing (`??`).

[#JavaScript]() [#logical operators]()

<!------------------------------------------------------------------------------------------- -->

## Do JS logical operators return boolean values?

NO. JS logical operators _return the values of the operand_.

[#JavaScript]() [#logical operators]()

<!------------------------------------------------------------------------------------------- -->

## How does the logical AND operator (`&&`) work in JS?

_Examples_:
Returns the first _falsy_ operand it encounters, or the last operand if all are truthy.
`true && true` → `true`
`true && false` → `false`
`"hello" && 42` → `42` (both truthy, returns last)
`null && "hello"` → `null` (first falsy, short-circuits — `"hello"` is never evaluated)

_Remember_: _AND_ `&&` first falsy, _OR_ `||` first truthy.

[#javascript]() [#operators]() [#logical]()

<!------------------------------------------------------------------------------------------- -->

## How does the logical OR operator (`||`) work in JS?

Returns the first _truthy_ operand it encounters, or the last operand if all are falsy.

_Examples_:
`false || true` → `true`
`null || "hello"` → `"hello"` (first truthy)
`null || undefined` → `undefined` (all falsy, returns last)
`"hello" || 42` → `"hello"` (first truthy, short-circuits — `42` is never evaluated)

[#javascript]() [#operators]() [#logical]()

<!------------------------------------------------------------------------------------------- -->

## How does the logical NOT operator (`!`) work in JS?

Inverts the boolean value of an operand. If the operand is truthy, returns `false`; if falsy, returns `true`.

_Examples_:
`!true` → `false`
`!null` → `true`
`!!value` — double NOT, commonly used to explicitly coerce any value to its boolean equivalent.

[#javascript]() [#operators]() [#logical]()

<!------------------------------------------------------------------------------------------- -->

## How does the Nullish Coalescing operator (`??`) work in JS?

Returns the right operand only if the left is `null` or `undefined` — otherwise returns the left.

_Examples_:
`null ?? "default"` → `"default"`
`undefined ?? "default"` → `"default"`
`0 ?? "default"` → `0` (0 is falsy but not null/undefined)
`"" ?? "default"` → `""` (empty string is falsy but not null/undefined)
Use `??` over `||` when `0` or `""` are valid values you don't want overridden.
[#javascript]() [#operators]() [#logical]()

<!------------------------------------------------------------------------------------------- -->

## Explain use of the conditional operator, AKA the ternary operator, in JS.

The ternary operator tests a condition and returns one value if condition evaluates to `true`, and another if `false`.

_Syntax_:

`condition ? run this code : run this code instead`

[#JavaScript]() [#conditional operators]() [#operators]() [#ternary]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the `if...else` conditional is used for, and how..

The if...else statement is used to execute code _if_ a condition is _truthy_, and optionally, alternate code if the condition is _falsy_.,

_Syntax_ (how):

```js
if (condition) {
  // run this code
} else {
  // run this code instead
}
```

[#JavaScript]() [#if...else]() [#conditionals]() [#control flow]()

<!------------------------------------------------------------------------------------------- -->

## How does an `if...else if` statement work in JS?

`if...else if` chains multiple conditions, evaluating each in order — the code of the first _truthy_ condition executes, skipping the rest.

```javascript
if (conditionA) {
  // runs if conditionA is truthy
} else if (conditionB) {
  // runs if conditionA is falsy and conditionB is truthy
} else {
  // runs if all conditions are falsy
}
```

Only one block ever executes — once a truthy condition is found, the chain short-circuits.

[#JavaScript]() [#conditionals]() [#control flow]() [#if...else if]()

<!------------------------------------------------------------------------------------------- -->

## When should you use a `switch` conditional statement over an `if...else`?

Use `switch` when matching a _single value_ against multiple possible cases ( cleaner than a long `if...else if` chain).

_Note_: Use `if...else` when conditions are complex (multiple logical operators) or each branch requires substantial logic.

[#JavaScript]() [#conditionals]() [#control flow]() [#switch]()

<!------------------------------------------------------------------------------------------- -->

## Explain how `switch` conditional statements work in JS:

`switch` takes a single value and jumps to the matching `case`, executing its block. Cases must be terminated by the keyword `break`; because without it, successibe case blocks continue execuyting. `default` runs if no case matches.

```javascript
switch (day) {
  case "Monday":
    // ...
    break;
  case "Tuesday":
    // ...
    break;
  default:
  // ...
}
```

[#JavaScript]() [#conditionals]() [#control flow]() [#switch]() [#if...else]()

<!------------------------------------------------------------------------------------------- -->

## What are _falsy_ values?

Values that convert to _false_ when passed into a conditional statement or operator on there own.

[#JavaScript]() [#conditionals]() [#boolean]() [#falsy]()

<!------------------------------------------------------------------------------------------- -->

## Name the five _falsy_ values of JS (The ones that convert to _false_ when passed into a conditional).

`0`, Empty strings (`""`), `null`, `undefined`, and `NaN`.

[#JavaScript]() [#conditionals]() [#control flow]() [#boolean]() [#falsy]()

<!------------------------------------------------------------------------------------------- -->

## Do switch statements check for a matching value, or for a matching type and value?

Switch statements check for matching type and value, as they use the strict equality operator to check matches.

[#JavaScript]() [#switch]() [#conditionals]()

<!------------------------------------------------------------------------------------------- -->

## How do you write a switch statement when you want the same block to execute for multiple cases, or matches?

By grouping those cases together under a single `break`.

_Example_

```js
let a = 3;

switch (a) {
  case 4:
    alert("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;

  default:
    alert("The result is strange. Really.");
}
```

[#JavaScript]() [#switch]() [#conditionals]()

<!------------------------------------------------------------------------------------------- -->
