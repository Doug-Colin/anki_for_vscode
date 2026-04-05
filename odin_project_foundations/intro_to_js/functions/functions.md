## What's the difference between a parameter and an argument?

A parameter is a function declaration's placeholder for arguments, whereas an argument is the actual value passed to the function when called.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is a parameter?

Parameters are the declaration-time placeholder variables for the arguments that a function can accept at calltime.

[#JavaScript]() [#functions]() [#parameters]()

<!------------------------------------------------------------------------------------------- -->

## What does the term 'inner variable' refer to?

A variable declared _inside_ a specific function.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What does the term 'outer variable' refer to?

A variable declared outside of a specific function's scope.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is a global variable?

A variable declared outside any function, which means it has global scope.

[#JavaScript]() [#functions]() [#scope]()

<!------------------------------------------------------------------------------------------- -->

## If a parameter-accepting function is called without an argument for any given parameter, and the parameter is not assigned a default value, what does the value of that parameter become?

`undefined`.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## How can you specify a default value for function's parameters?

You can specify default values for function parameters by simply assigning them in the function's parameter list.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between a function declaration and a function signature?

A function declaration is the entire statement that initially defines the function, whereas a function signature is merely the function's name and parameter list.

_Note_: In JS, 'function signature' is a somewhat informal term, as function signatures are more meaningful in typed languages, since the signature includes types in the parameter list.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## Say a given function has default values assigned to its parameters; and these values are expressions or other functions. What determines whether the default expression/function value of the parameter is evaluated or not?

When a JavaScript function's parameters are assigned default values, expressions, or functions, they will only be used/evaluated if a values is not give for that parameter at call time.

_Remember_: Functions only evaluate default parameter values if a value is not given for that parameter at call time.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is the following function _an example of_?

```javascript
function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }

  alert(from + ": " + text);
}
```

%

This function is an example of an explicit undefined check, and also, the old way of specifying a default value for a parameter (now param default values can be assigned in the params list).

```javascript
function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }

  alert(from + ": " + text);
}
```

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is the following function an example of?

```javascript
function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}
```

%

This function is an example of specifying a default value for a parameter, the old way. Now param default values can be assigned in the params list.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## Explain the use of the nullish coalescing operator in the following function:

```javascript
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "count value is undefined or null");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

%
The nullish coalescing operator is being used here to return the given string is the operand count has a value of undefined or null.

```javascript
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "count value is undefined or null");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## If a function does not have a return statement, what does it return?

`undefined`

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## If a function has a return statement, but no value is given to the return statement, what does the function return?

`undefined`

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What syntax is recommended for return statements that are multiple lines long?

If a return statement is multiple lines long, open it with a parenthesis on the same line, and close it with a parenthesis on a new line. For example:

```javascript
return some + long + expression + or + whatever * f(a) + f(b);
```

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What relationship is good to keep between a function name and its action?

A functions name should represent the _one_ action that the function does.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is the term for a function that is a property-value of an Object?

Functions that are properties of objects are called _methods_.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is an anonymous function?

An anonymous function is a nameless function; usually they are simple single-use functions, most often arrow function callbacks.

[#JavaScript]() [#functions]() [#callbacks]()[#anonymous functions]()

<!------------------------------------------------------------------------------------------- -->

## What are the three conditions of when you should use anonymous functions?

The three conditions for appropriate anonymous function use are that the function is:

- _only_ needed once
- won't be referenced
- has simple logic

_Consider_: anonymous functions are most commonly used as callbacks passed to other functions, com seen in _event handler_ functions .

```js
button.addEventListener("click", function () {
  console.log("clicked");
});
```

\__However_, named eventHandler functions are also commonly used in the exact same scenario, and they are named functions; but this is usually because the eventHandler has more complex logic, or, it will be removed via JavaScript.

For example:

```js
// Can't remove this later
button.addEventListener('click', function() { ... });

// Can remove this
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

[#JavaScript]() [#functions]() [#callbacks]() [#anonymous functions]()

<!------------------------------------------------------------------------------------------- -->

## What is a callback?

A callback is any function passed as an argument to another function, to be called later.
_Example_: An anonymous callback.

```js
button.addEventListener("click", function () {
  console.log("clicked");
});
```

[#JavaScript]() [#functions]() [#anonymous functions]() [#callbacks]()

<!------------------------------------------------------------------------------------------- -->

## The following anonymous function logs user's pressed keys to the console; Rewrite the function using arrow function syntax:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

%

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

[#JavaScript]() [#functions]() [#arrow functions]()

<!------------------------------------------------------------------------------------------- -->

## When can you omit the parentheses delimiting an arrow function's parameter list?

Whenever the arrow function has only _one_ paramter, you can omit the parentheses around it.

_For example_:

```javascript
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Can be re-written as:

```javascript
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

[#JavaScript]() [#functions]() [#arrow functions]() [#anonymous functions]()

<!------------------------------------------------------------------------------------------- -->

## What is an _implicit return_ in an arrow function?

An implicit return refers to the arrow function syntax enabling the return of a value, without explicitly using the `return` keyword or using post-arrow symbol curly brackets.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## When can _implicit returns_ be used in arrow functions?

Implicit returns can be used only when an arrow function consists of a _one line return statement_.

_For Example_:

```js
const integerArray = [1, 2, 3];

const doubledIntegerArray = integerArray.map((integer) => integer * 2);

console.log(doubledIntegerArray); // [2, 4, 6]
```

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What are arrow functions?

Arrow functions are a shorter way to write functions, as compared to typical function declarations.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What are the syntax rules of writing an arrow function, as compared to writing a function declaration?

Unlike function declarations, arrow functions:

- Are _assigned_ to variables rather than declared with the `function` keyword: `const add = (a, b) => {a+b}` (unless used anonymously)
- Can _implicitly_ return values, _if_ using _single line return statements_

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## `ReferenceError: "x" is not defined` is one of the most common errors you'll encounter. What are the two usual causes for this?

Variable "x" is not defined, or, variable "x" is defined but not in accessible scope.

[#JavaScript]() [#functions]() [#errors]() [#scope]()

<!------------------------------------------------------------------------------------------- -->

## What are return values?

THe values a function returns upon completion.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## If the MDN reference page for a function lists a return value as `void` or `undefined`, what does that mean?

That the function does not return any value; it likely performs some other non-returning action.

[#JavaScript]() [#functions]() [#void]()

<!------------------------------------------------------------------------------------------- -->

## If a return statement returns contains an expression with multiple functions, in order to return a value that is calculated using the result of the functions, in what order do the operations take place?

All function calls on the line are run first, then their values are substituted for the function calls, then the line itself is executed.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What are two basic, core approaches to error handling in functions?

Check that any parameters are validation, and that any _optional_ parameters have default values.

[#JavaScript]() [#functions]() [#error handling]()

<!------------------------------------------------------------------------------------------- -->

## How can you easily remember and reuse functions as you continue programming and building over years?

Maintain your own function library.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between a function _declaration_ and a function _expression_?

A function _declaration_ is as statement that stands alone, whereas a function _expresssion_ is whenever a function is _used as a value_.

The distinction between function _declarations_ and function _expressions_ has nothing to do with use of the `function` keyword, and everything to do with the context the function appears in.

Functions assigned a variables, passed as arguments, or returned from functions are _all_ function _expressions_, as the are value usages and not standalone _statements_.

Function Declaration

```javascript
function sayHi() {
  alert("Hello");
}
```

Function Expression

```javascript
let sayHi = function () {
  alert("Hello");
};
```

Also Function Expression

```javascript
let sayHi = () => alert("Hello");
```

_Rememeber_: Function _expressions_ are defined using the _assignement expression_.

[#JavaScript]() [#functions]() [

<!------------------------------------------------------------------------------------------- -->

## What is the difference between an _expression_ and a _statement_?

A statement is an instruction that _does something_ — it performs an action, but doesn't produce a value you can use elsewhere, whereas an _expression_ is anything that evaluates to a value.

<!------------------------------------------------------------------------------------------- -->

## Given function `squared()`, what is the difference between what only the name of the function represents (`squared`), and what the function with parentheses (`squared()`) represents?

Without the parentheses, a function's name refers to the variable that is storing the function itself, meaning, the code of the function, whereas a function's name with parentheses always invokes (or calls) the function.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## Aside from the variable assignment expression or arrow function parts of a function expression, how does its syntax differ from that of a function declaration?

A function _expression_ should be concluded with a semicolon, as all assignment expressions are concluded with semicolons.

[#JavaScript]() [#functions]() [#function expressions]()

<!------------------------------------------------------------------------------------------- -->

## What is strict mode, and what is its status in modern JavaScript?

An opt-in mode that makes JavaScript behave more predictably by throwing errors for things that would otherwise fail silently or behave inconsistently. Enabled with `'use strict'` at the top of a file or function. In strict-mode, hoisting behavior changes; fucntion declarations are _hoisted_, but they're hoisted to the top of _block scope_, and thus can be contained within if ... else blocks (whereas in non strict-mode, func. declarations are _hoisted_, but to the scope of their parent function, or global scope.

In modern JavaScript, ES Modules and class bodies run in strict mode _automatically_ — so in most modern codebases you rarely need to write `'use strict'` explicitly.

[#JavaScript]() [#strict-mode]() [#ES6]() [#ES Modules]()

<!------------------------------------------------------------------------------------------- -->

## How are function _declarations_ scoped?

In _strict mode_ (which ES6 modules use automatically), function declarations are _block scoped_ — meaning they're only available within the `{}` block they're declared in, just like `let` and `const`.

In _non-strict mode_, blocks like `if`, `for`, or `{}` are _transparent_ to function declarations — the declarations are hoisted to the nearest enclosing function, an barring that, to global scope.

_Remember_: Most modern JavaScript runs as ES6 modules, so _strict mode_ is predominant, thus function declarions will usually have block scoping.

[#JavaScript]() [#functions]() [#scope]() [#hoisting]() [#strict-mode]()

<!------------------------------------------------------------------------------------------- -->

## How are function _expressions_ scoped?

Function expressions follow the scoping rules of the variable they're assigned to — `const`/`let` are block scoped, `var` is function scoped.

Unlike function declarations, function expressions are _not_ hoisted — they are only available once execution reaches that line.

```js
greet(); // ❌ ReferenceError — not hoisted
const greet = function () {
  return "hi";
};
```

[#JavaScript]() [#functions]() [#scope]() [#hoisting]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference in scope behavior between functions _declarations_ and function _expressions_, and how is it affected by `strict-mode`?

- Function declarations in `strict mode` (ES 6 modules are auto strict) are _block scoped_, so they're hoisted to the top of the block they are declared within (An if ... else code block, etc), or global scope, if declared at top-level.
- Function declarations in non-strict mode (pre ES6 JS without explicit `use strict` declared in file) are _function scoped_, and are hoisted to the top of their nearest enclosing _function_, or global scope, if declared at top-level.
- So, non `strict-mode` function declarations leak out of if ... else block contexts, only to be limited by the nearest enclosing function, whereas `strict-mode` func declarations are limited by blocks.
- Function _expressions_, however, are not hoisted, so they're only available when execution reaches the line of expression, `strict-mode` or not.

- Shorter answer: Function declarations are block scoped in strict mode, and function scoped in non-strict mode, whereas function expressions are only available when reached in execution.

[#JavaScript]() [#functions]() [#function-expressions]() [#function-declarations]() [#scope]() [#strict-mode]()

<!------------------------------------------------------------------------------------------- -->

## When should you use each of the following: function expressions, versus anonymous function expressions, versus function declarations?

- Use `const` function expressions and arrow functions as your _default_ in ES6 modules
- Use anonymous function expressions for callbacks and one-off use cases
- Only use function declarations where hoisting is needed in old codebases, or, in examples where syntax makes it easier to write the function (self calling recursive functions).

[#JavaScript]() [#functions]() [#function expressions]() [#function declarations]()

<!------------------------------------------------------------------------------------------- -->

## Under what circumstance can you omit the parentheses around the parameters in an arrow function?

You can omit the parentheses around an arrow function's params whenever the function hs only one argument.

[#JavaScript]() [#functions]() [#arrow-functions]()

<!------------------------------------------------------------------------------------------- -->

## Are all arrow functions expressions?

Yes, because they are always assigned to a variable or passed as an argument.

[#JavaScript]() [#functions]() [#arrow-functions]()

<!------------------------------------------------------------------------------------------- -->

## What is an execution context?

An execution context is a JavaScript-specific version of a call stack frame.

[#JavaScript]() [#functions]() [#call-stack]() [#execution-context]()

<!------------------------------------------------------------------------------------------- -->

## What three things does a JS Execution context (a stack frame in JS) contain?

A variable environment, a lexical environment, and a `this` binding.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What are the two types of execution contexts in JavaScript (Execution contexts as in JS specific stack frame)??

The Global Execution Context, and the Function Execution Context.

[#JavaScript]() [#functions]() [#call-stack]() [#execution-contexts]()

<!------------------------------------------------------------------------------------------- -->

## What is the Global Execution Context?

A singular JS execution context (stack frame) created upon script execution, the Global Execution Context sets up the global `this` and, depending on environment, either `window` in browsers or `global` in Node.

[#JavaScript]() [#functions]() [#call-stack]() [#global-execution-context] [#execution-contexts]()

<!------------------------------------------------------------------------------------------- -->

## What is the Function Execution Context?

Function execution contexts are the stack frames created every time a function is called in JS; each function call, even if repeated, gets its own fresh execution context.

[#JavaScript]() [#functions]() [#call-stack]() [#function-execution-context] [#execution-contexts]()

<!------------------------------------------------------------------------------------------- -->

## What denotes the Global Execution Context in the JS call stack?

On the JS call stack, the Global Execution Context is called either `main()` or `global()`.

[#JavaScript]() [#functions]() [#global-execution-context] [#call-stack]()

<!------------------------------------------------------------------------------------------- -->

## What is a stack overflow?

A type of error that occurs when the number of execution contexts, or stack frames, exceed the limit of the call stack.

[#JavaScript]() [#functions]() [#call-stack]()

<!------------------------------------------------------------------------------------------- -->

## How many call stacks does JavaScript have?

JavaScript has only one call stack; it's a single-threaded language, so it can only do one thing at a time.

[#JavaScript]() [#functions]() [#call-stack]()

<!------------------------------------------------------------------------------------------- -->

## How many threads does JS have?

One, JS is a single-threaded language, with one thread and one call stack.

[#JavaScript]() [#functions]() [#call-stack]()

<!------------------------------------------------------------------------------------------- -->

## Is JS a synchronous, or asynchronous language?

JavaScript is a synchronous language.

[#JavaScript]() [#functions]() [#call-stack]()

<!------------------------------------------------------------------------------------------- -->

## If JS is a single threaded, _synchronous_ language, how can it run asynchronous code?

By using the event loop.

[#JavaScript]() [#functions]() [#call-stack] ()[#event-loop]()

<!------------------------------------------------------------------------------------------- -->

## What is the order of execution of the JS call stack?

Like other stack data structures, the JavaScript call stack is LIFO; _last-in, first-out_.

[#JavaScript]() [#functions]() [#call-stack]() [#LIFO]()

<!------------------------------------------------------------------------------------------- -->

## Explicitly, how do you invoke a function?

Explicitly, by writing the function name and appending it with opening and closing parentheses, with any arguments within the parentheses.

[#JavaScript]() [#functions]()

<!------------------------------------------------------------------------------------------- -->

## What is function scope?

The scope context within which a function is able to be called.

[#JavaScript]() [#functions]() [#scope]()

<!------------------------------------------------------------------------------------------- -->

## Are function expressions hoisted?

No, function expressions are NOT hoisted, they are only available when the execution reaches and evaluates them.

[#JavaScript]() [#functions]() [#function-expressions]()

<!------------------------------------------------------------------------------------------- -->
