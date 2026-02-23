## Is JavaScript considered an interpreted, or compiled language?

<!-- notecardId: 1771805901163 -->

JavaScript is considered an _interpreted_ language, because JS source code is executed directly by the browser, but in practice it's a hybrid, because JS browser engines use just-in-time compilation to compile optimization-worthy operations into machine code at runtime.

[#JavaScript]() [#CS]()

<!------------------------------------------------------------------------------------------- -->

## What is just-in-time compiling?

<!-- notecardId: 1771805901164 -->

A runtime compilation method by which code written in normally interpreted languages is assessed for optimization potential and accordingly compiled into binary at runtime/during execution.

[#JavaScript]() [#CS]()

<!------------------------------------------------------------------------------------------- -->

## What are the three ways of declaring variables in JS?

<!-- notecardId: 1771805901166 -->

let, const, and var

[#JavaScript]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## What is the Temporal Dead Zone (TDZ)?

<!-- notecardId: 1771805901167 -->

The TDZ refers to the time span between when variables are hoisted and when they're initialized. JS variables are hoisted to the top of operational order at runtime, but not initialized until their declaration is reached during execution; the time between is a 'temporal dead zone' during which they are inaccessible.

[#JavaScript]() [#hoisting]() [#TDZ]() [#scope]() [#ReferenceError]()

<!------------------------------------------------------------------------------------------- -->

## What happens if a variable declared via let or const is used or otherwise accessed before it has escaped the TDZ?

<!-- notecardId: 1771805901168 -->

Accessing `let` and `const`variables before their declaration throws a `ReferenceError`.

[#JavaScript]() [#hoisting]() [#TDZ]() [#scope]() [#ReferenceError]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## What are the similarities and differences between behavior of variables declared with `let` vs `const`?

<!-- notecardId: 1771805901169 -->

Both are block-scoped and subject to the TDZ (inaccessible until declaration is reached during runtime);
The only difference is that`let` is reassignable, while `const` is not and _must_ be initialized at declaration.

[#JavaScript]() [#let]() [#const]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## How does `var` differ from `let` and `const`?

<!-- notecardId: 1771805901170 -->

`var` is _function_-scoped (not block-scoped) and is thus hoisted _and initialized_ to `undefined` — so it can be accessed before its declaration without throwing, silently returning `undefined` instead.

_Note_:This is a common source of bugs; `var` is avoided in modern JS in favor of `let` and `const`.

[#JavaScript]() [#var]() [#hoisting]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## What is JavaScript?

<!-- notecardId: 1771805901171 -->

A dynamically typed, interpreted, single-threated scripting language with an event loop, JavaScript was initially developed for dynamic client-side content, though it's now commonly used on the backend via the Node runtime and frameworks like Express and Hono.

[#JavaScript]() [#CS]()

<!------------------------------------------------------------------------------------------- -->

## What does the term 'static' site refer to?

<!-- notecardId: 1771805901172 -->

A static site is one where the server serves pre-built files as-is, with no server-side processing or database queries per request. Static sites _can_ have dynamic client-side behavior via JS — "static" describes the server's role, not whether the page visually changes.

[#JavaScript]() [#web]() [#static]()

<!------------------------------------------------------------------------------------------- -->

## What does API stand for?

<!-- notecardId: 1771805901173 -->

Application Programming Interface

[#JavaScript]() [#CS]() [#acronyms]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What is an API?

<!-- notecardId: 1771805901174 -->

A defined interface that exposes system functionality to external code, allowing interaction without exposing internal implementation.

[#JavaScript]() [#CS]() [#acronyms]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What is the DOM, and what does the DOM API enable?

<!-- notecardId: 1771805901175 -->

The DOM (Document Object Model) is a browser API that represents the live HTML document as a tree of node objects; The DOM API enables reading and manipulating that tree — adding, removing, or modifying elements, attributes, and content - via JS.

[#DOM]() [#API]() [#browser]() [#JavaScript]() [#CS]() [#acronyms]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between declaration, initialization, and assignment?

<!-- notecardId: 1771805901176 -->

Declaration is introducing the variable name to the scope: `let x`

Initialization is giving a variable its first value: let `x = 5`

Assignment is setting or overwriting a value _after_ declaration: `x = 10`

[#JavaScript]() [#CS]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<script>` tag used for?

<!-- notecardId: 1771805901177 -->

The `<script>` tag embeds or references JavaScript in an HTML document — either inline or via a `src` attribute pointing to an external `.js` file.

[#JavaScript]() [#HTML]() [#script tag]() [#<script>]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between internal and external JS in HTML?

<!-- notecardId: 1771805901178 -->

**Internal JS:** written directly inside a `<script>` tag _in_ the HTML file (largely discouraged).
**ExternalJS:** written in a separate `.js` file, and referenced via `<script src="path/to/file.js">`. (Preferred — keeps JS and HTML separate and allows browsers to cache the file).

_Remember_:Both approaches use the `<script>` tag; external just adds a `src` attribute and leaves the tag body empty.

[#JavaScript]() [#HTML]() [#script tag]() [#<script>]()

<!------------------------------------------------------------------------------------------- -->

## What are 'constructs'?

<!-- notecardId: 1771805901179 -->

"Constructs" is an informal umbrella term for the building blocks of a programming language — variables, functions, loops, conditionals, classes, etc.
Not a formal technical term; used conversationally to mean "the things the language gives you to build programs with."

[#JavaScript]() [#CS]()

<!------------------------------------------------------------------------------------------- -->

## What is `querySelectorAll()`?

<!-- notecardId: 1771805901180 -->

A DOM API method that accepts a CSS selector string and returns a _static_ `NodeList` of all matching elements. Unlike `querySelector()` which returns the first match, `querySelectorAll()` returns all matches.

Example:
`document.querySelectorAll('.card')` — returns all elements with class `card`.

_Note_: the returned `NodeList` is not a _live_ array — it won't update if the DOM changes after the call. Use `Array.from()` to convert it if you need array methods.

[#DOM]() [#JavaScript]() [#selectors]() [#vanilla JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the two limitations on variable names in JavaScript?

<!-- notecardId: 1771805901181 -->

The name must contain only letters, digits, or the symbols $ and _.
\_and_
The first character must not be a digit.

[#JavaScript]() [#variables]() [#naming conventions]()

<!------------------------------------------------------------------------------------------- -->

## What are the script loading strategies for ensuring your JS runs only after the HTML is parsed, for both internal and external scripts?

<!-- notecardId: 1771805901182 -->

For internal JS, place the `<script>` element at the bottom of the `<body>` element; for external JS, place the `<script>` element in the `<head>` with `type="module"` and `src=/path/to/file.js` attributes.

[#JavaScript]() [#HTML]() [#script tag]() [#<script>]()

<!------------------------------------------------------------------------------------------- -->

## How do you write single line and multi line comments in JS?

<!-- notecardId: 1771805901183 -->

For single line comments, double forward slash (`// `); for multi-line comments, use the double forward slash and asterisk to delimit the comment (`//*   *//`).

[#JavaScript]() [#comments]()

<!------------------------------------------------------------------------------------------- -->

## Are variable names case-sensitive?

<!-- notecardId: 1771805901184 -->

Yes
[#JavaScript]() [#variables]() [#naming conventions]()

<!------------------------------------------------------------------------------------------- -->

## What is the most common naming convention used for JS variables and functions?

<!-- notecardId: 1771805901185 -->

camelCase (`userName` or `userAddress` or `validUsersArray` etc)

[#JavaScript]() [#variables]() [#naming conventions]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is `const` short for?

<!-- notecardId: 1771805901186 -->

`const` is short for _constant_; as in a _constant_, unchanging variable.

[#JavaScript]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## Generally, what is the order of execution of JavaScript code?

<!-- notecardId: 1771805901187 -->

JS executes top to bottom within a given execution context; However, _hoisting_ means anything _function-scoped_ is initialized and available pre-execution (_var_ variables, functions, ), and is thus available before declaration line is reached.

_Remember_:Async code (promises, async/await) introduces additional complexity via the event loop — covered separately.

[#JavaScript]() [#execution]() [#hoisting]()

<!------------------------------------------------------------------------------------------- -->

## When are uppercase constant variables used?

<!-- notecardId: 1771805901188 -->

Uppercase constant variables are commonly used as aliases, to hardcode values that are hard to remember or read; for example, hexadecimal color values could be confusing, so some developers save them to capitalized constant variables, with an underscore separating words, rather than a capitalized letter as in camelCase.

Example:

```js
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color, COLOR_ORANGE is easier to remember, harder to mistype, and far more legible than than #FF7F00.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

[#JavaScript]() [#const]() [#naming conventions]() [#variables]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between an integer and a float?

<!-- notecardId: 1771805901189 -->

Integers are whole numbers without a fractional part, and can be negative or positive. Floats, or floating point numbers, have decimal points and places to represent fractions of integers.

Example:
Integers: 1, 56, 723, 45
Floats/Floating Point Numbers:

[#JavaScript]() [#numbers]() [#types]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Name the six arithmetic operators of JS.

<!-- notecardId: 1771805901190 -->

Addition (`+`), subtraction (`-`), multiplication(`*`) , division(`/`) , remainder/modulo (`%`) and exponent (`** `) operator.

[#JavaScript]() [#numbers]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the result of running `50 + 10 / 8 + 2;` be in JS, and why?

<!-- notecardId: 1771805901191 -->

`53.25` - because of operator precedence. JS _always_ evaluates multiplication and division operators first, then addition and subtraction, from left to right.

_Remember_: PEMDAS (Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right)).

[#JavaScript]() [#numbers]() [#operators]() [#coercion]()

<!------------------------------------------------------------------------------------------- -->

## How can you override PEMDAS operator precedence, to ensure that certain parts of mathematical expressions are evaluated first?

<!-- notecardId: 1771805901192 -->

By putting parentheses around the parts you want explicitly dealt with first.

_Example:_
`num1 = 50`
`num2 = 10`
`num1 + num2 / 8 + 2;` evaluates to `53.25` because of PEMDAS order of operations (`10/8=1.25` first, then `50 + 1.25 + 2 = 53.25` ).
With parentheses:
`(50 + 10) / (8 + 2);` evaluates to `60/10=6`

[#JavaScript]() [#numbers]() [#operators]() [#math]()

<!------------------------------------------------------------------------------------------- -->

## What are the compound assignment operators `+=`, `-=`, `*=`, and `/=`?

<!-- notecardId: 1771805901193 -->

Shorthand operators that apply an arithmetic operation to a variable _and_ reassign the result in one step;
AKA "modify-and-assign" operators.
`x += 5` is equivalent to `x = x + 5`
`x -= 5` is equivalent to `x = x - 5`
`x *= 5` is equivalent to `x = x * 5`
`x /= 5` is equivalent to `x = x / 5`

[#JavaScript]() [#numbers]() [#operators]() [#math]()

<!------------------------------------------------------------------------------------------- -->

## What is the `===` operator in JavaScript?

<!-- notecardId: 1771805901194 -->

Strict equality operator; tests whether left and right operands are _identical_, in type _and_ value.

[#JavaScript]() [#operators]() [#comparison operators]()

<!------------------------------------------------------------------------------------------- -->

## What is the `!==` operator in JavaScript?

<!-- notecardId: 1771805901195 -->

Strict non-equality operator; tests whether left and right operands are _not identical_, in type _and_ value.

[#JavaScript]() [#operators]() [#comparison operators]()

<!------------------------------------------------------------------------------------------- -->

## What are the `==` and `!=` operators in JavaScript?

<!-- notecardId: 1771805901196 -->

General equality and non-equality operators; they test whether left and right operands have matching/noon-matchging values; they do not check for types.

[#JavaScript]() [#operators]() [#comparison operators]()

<!------------------------------------------------------------------------------------------- -->

## What is a toggle?

<!-- notecardId: 1771805901197 -->

A control that swaps between two states; it 'toggles' between two values, true and false, on and off, etc.

[#fundamentals]() [#CS]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What is an operand?

<!-- notecardId: 1771805901198 -->

Operands is what operators are applied to; `5 * 2` has two operands, five and two, and one operator, the multiplication operator.

[#JavaScript]() [#fundamentals]() [#CS]() [#operators]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What is a _unary_ operator?

<!-- notecardId: 1771805901199 -->

An operator is considered _unary_ if it only has one operand; for example `x = -x` is _unary_ negation.

[#JavaScript]() [#fundamentals]() [#CS]() [#operators]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What is a _binary_ operator?

<!-- notecardId: 1771805901200 -->

An operator is considered _binary_ if it has two operands; for example `y - x`; the `-` is a _binary_ subtraction operator.

[#JavaScript]() [#fundamentals]() [#CS]() [#operators]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What does the remainder, or modulus operator, `%` do?

<!-- notecardId: 1771805901201 -->

Returns the _remainder_ of integer division.

_Example: _
`5 % 2` returns 1, as it is the remainder of 5/2.
[#JavaScript]() [#fundamentals]() [#CS]() [#operators]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## What does the exponentiation operator, `**` do?

<!-- notecardId: 1771805901202 -->

Raises the left operand to the power of the right operand.

_Example: _
`2 ** 4` returns `16`, as it is two raised to the power of four; 2⁴ = 16
[#JavaScript]() [#fundamentals]() [#CS]() [#operators]() [#terminology]()

<!------------------------------------------------------------------------------------------- -->

## How does the `+` operator work on two string operands?

<!-- notecardId: 1771805901203 -->

It concatenates the strings.

[#JavaScript]() [#fundamentals]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## How does the `+` operator work when applied to a string operand and a non-string operand?

<!-- notecardId: 1771805901204 -->

It converts the non-string value to a string, and concatenates the two.

[#JavaScript]() [#fundamentals]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## Aside from the binary addition operator, which concatenates strings, how do the other JS arithmetic operators treat strings?

<!-- notecardId: 1771805901205 -->

They will convert a string numeral (`"5"`) to its `Number` equivalent (`5`), and execute the operation, but if the string is not numeric, the operation fails.

[#JavaScript]() [#fundamentals]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## What are bitwise operators used for?

<!-- notecardId: 1771805901206 -->

Manipulating numeric values at the binary level — working directly on the individual bits (each a `0` or `1`) that together represent a numeric value, rather than the numeric value itself.

_Note_: Bitwise operators are rarely encountered in JS; they appear in: performance-sensitive code, flags/permissions systems, canvas/graphics pixel manipulation, and cryptography.

_Practical example_: `~~x` (double bitwise NOT) is occasionally used as a faster alternative to `Math.floor(x)`.

[#JavaScript]() [#operators]() [#bitwise]() [#CS]()

<!------------------------------------------------------------------------------------------- -->

## What does the comma operator do?

<!-- notecardId: 1771805901207 -->

Allows for the evaluation of several expressions, but only returns the last.

```js
let a = (1 + 2, 3 + 4);

alert(a); // 7 (the result of 3 + 4)
```

[#JavaScript]() [#fundamentals]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## How do the prefix and postfix increment and decrement operators differ in behavior?

<!-- notecardId: 1771805901208 -->

When used as a prefix, increment and decrement operators alter the operand and return _the new value_; when used as postfix, they alter the operand and _return the old value_.

Example:

```js
let a = 1;
let b = 1;
console.log(a++); // --> logs 1, because it increments the value, changing it to 2, but returns the old value, 1.
console.log(++b); // --> logs 2, it increments the value, changing it to 2, and returns that new value.
```

[#JavaScript]() [#fundamentals]() [#operators]()

<!------------------------------------------------------------------------------------------- -->

## In JS, what does `"" + 1 + 0` evaluate to, and why?

<!-- notecardId: 1771805901209 -->

`"" + 1 + 0` evaluates to `"10"`.

The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.

[#JavaScript]() [#fundamentals]() [#operators]() [#coercion]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `"" - 1 + 0` evaluates to, and why.

<!-- notecardId: 1771805901210 -->

`-1`; the subtraction operator `-` only works with numbers (like most math operations); it converts an empty string `""` to `0`; so `"" - 1` is `0 - 1` in JS, which is `-1`, `+ 0`, makes `-1`.

[#JavaScript]() [#fundamentals]() [#operators]() [#coercion]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `true + false` evaluates to in JS, and why.

<!-- notecardId: 1771805901211 -->

In JS, `true + false` evaluates to 1, because JS coerces Booleans to numbers in numeric contexts; `true` coerces to `1` and `false` coerces to `0`, an `1+0`=`1`.

_Remember_: the addition operator `+` only coerces values to strings if one of the operands is type `String` (`true` and `false` are, of course, type `Boolean`).

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expressions `"5" +3` amd `"5" - 3` evaluate to in JS, and why.

<!-- notecardId: 1771805901212 -->

`"5" + 3` evaluates to `"53"` because if _either_ operand is a string, the addition operator `+` concatenates and returns a string.

`"5" - 3` evaluates to the Number `2`, because aside from the addition operator, `+`, JS arithmetic operators have no string behavior. They instead _coerce_ non-number operands to numbers, if possible.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expressions `6 / "3"` and `"2" * "3"` evaluate to in JS, and why.

<!-- notecardId: 1771805901213 -->

`2` and `6`, because all of the arithmetic operators in JS coerce non-number operands to numbers, with the exception of the addition operator, `+`, which concatenates when encountering a string operand.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expressions `4 + 5 + "px"` and `"$" + 4 + 5` evaluate to in JS, and why.

<!-- notecardId: 1771805901214 -->

`"9px"` and `"$45"`; `"9px"` because in `4 + 5 + "px"`, 'PEMDAS' order of operations is 'AS' left to right, so `4 + 5` first evaluates to `9`, which the `+` operator then converts to a string upon encountering `"px"`, thus returning `"9px"`.

In `"$" + 4 + 5`, because the expression starts with a string, the addition operator `+` will coerce all other values to strings, then concatenate; so `"$" + 4` is `"$4"`, then `"$4" + 5` concatenates to the string `"$45"`.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]() [#math]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `"4px" - 2` evaluates to in JS, and why.

<!-- notecardId: 1771805901215 -->

`NaN`, because the subtraction arithmetic operator does not coerce string values.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `"  -9  " + 5` evaluates to in JS, and why.

`"  -9  5"`, because the addition operator coerces non-string operands to strings and concatenates them, so long as one of the operands is a string.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `"  -9  " - 5` evaluates to in JS, and why.

`-14`, because all of the arithmetic operators in JS will coerce non-number types to numbers, aside from `+`, which will convert to string and concatenate should it encounter a string.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `null + 1` evaluates to in JS, and why.

<!-- notecardId: 1771805901218 -->

`null + 1` = `1`;

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Why does the behavior of the values `null` and `undefined` differ in numeric coercion contexts? For example, `null + 1 = 1` , but `undefined + 1 = NaN`.

<!-- notecardId: 1771805901219 -->

Because `null` and `undefined` coerce differently in numeric contexts:
`null` represents _deliberate_ empty assignment, meaning '_this value is intentionally empty_', so JS coerces `null` to `0` in numeric contexts.

`undefined`, however, represents a value _absent_ or _unknown_ ; so JS coerces `undefined` to `NaN` in numeric contexts.

`NaN` is contagious - any arithmetic operation involving `NaN` produces `NaN

`undefined`, however,

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the expression `" \t \n" - 2` evaluates to in JS, and why.

<!-- notecardId: 1771805901220 -->

`0`, because the string `" \t \n"` only contains spaces and escape sequences; backslash t (`\t`) is the escape sequence for `tab`, and backslash n (`\n`) is the escape sequence for `newline`, so the string in the expression only contains space characters, which coerce in JS numeric context to `0`.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## How do JS arithmetic operators handle non-number operands?

<!-- notecardId: 1771805901221 -->

All arithmetic operators coerce non-number operands to numbers — _except_ the addition operator `+`, which has a string short-circuit: if _either_ operand is a string, it coerces the other to a string and concatenates them.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is `NaN` in JS?

<!-- notecardId: 1771805901222 -->

`NaN` (Not a Number) is a numeric type value that represents the result of a nonsensical arithmetic operation — e.g. `undefined + 1` or `"hello" - 1`.
Counterintuitively, `typeof NaN === "number"` — it's not an absent value, it's a numeric signal that an operation produced no meaningful result.
`NaN` is contagious: any arithmetic involving `NaN` returns `NaN`.
[#JavaScript]() [#NaN]() [#types]()

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between `null` and `undefined` in JS?

<!-- notecardId: 1771805901223 -->

`undefined` — variable declared but never assigned; JS assigns this automatically.
`null` — deliberately assigned by the developer to indicate "no value."
Both represent absence, but `undefined` means _unknown/unset_ while `null` means _intentionally empty_.
[#JavaScript]() [#null]() [#undefined]() [#types]()

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Explain the following code (see comment);

```js
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // Alerts 12, rather than 3. Why?
```

%
Because the Window.prompt() web API returns a _string_ of the user's input. In this example, the user is prompted to enter a value, first with the message `"First number?"`, and then after, with the message `"Second number?"`. In this case the secondary arguments provided (`1` and `2` ) are number values, but still, .prompt returns a string, and the addition operator concatenates whenever encountering a string.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What does the unary plus operator do to string representations of integers (eg. `+”10”`)?

<!-- notecardId: 1771805901225 -->

Converts them to number values; `+true`=`1`, and `+""`=`0`.

[#JavaScript]() [#coercion]() [#operators]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->
