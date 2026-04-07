## In JS, what is an error?

<!-- notecardId: 1775577679559 -->

A type of object built into JS that contains a name/type and a message.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What's the technical term for when code generates an error?

<!-- notecardId: 1775577679562 -->

'Throwing' an error.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the three parts of an error object in JS?

<!-- notecardId: 1775577679563 -->

An error type, an error message, and the filename and line that caused the error.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What is a ReferenceError in JS?

<!-- notecardId: 1775577679564 -->

In JS, a ReferenceError occurs when referring to a variable that is not declared and/or initialized _within the current scope_.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the four usual causes for a JS ReferenceError?

<!-- notecardId: 1775577679565 -->

- Referencing a non-existent variable
- Referencing a variable not yet initialized (or)
- Referencing a variable outside current scope
- Misspelling of variables and functions.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## How can you make sure you understand any errors you encounter?

<!-- notecardId: 1775577679566 -->

By understanding the error type, _and_ the error message.

[#understanding-errors]()

<!------------------------------------------------------------------------------------------- -->

## Is there only one message for the JS error ReferenceError?

<!-- notecardId: 1775577679567 -->

No, there are multiple messages.

[#understanding-errors]()

<!------------------------------------------------------------------------------------------- -->

## Why are there multiple messages for a single type of error, like ReferenceError?

<!-- notecardId: 1775577679568 -->

Because there can be multiple causes for each type of ReferenceError.

[#understanding-errors]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What is a stack trace?

<!-- notecardId: 1775577679569 -->

The list of function calls that were active when the error occurred, from the most recent call where execution crashed, to the oldest, where execution began.

[#understanding-errors]() [#stack-trace]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## Explain what the stack trace listed below the following error tells us:

`TypeError: Cannot read properties of undefined (reading 'name')
    at getUserName (app.js:12:18)       
    at renderProfile (app.js:34:5)      
    at App (app.js:67:3)`
%

The stack trace shows that the program errored/crashed on function getUserName, from file app.js, and that getUserName was called from function renderProfile in app.js, which was called from function App.

[#understanding-errors]() [#stack-trace]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What is a `SyntaxError`?

<!-- notecardId: 1775577679571 -->

An error that occurs when the browser interprets invalid code syntax.

[#understanding-errors]() [#SyntaxError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What is a `TypeError` in JS?

<!-- notecardId: 1775577679572 -->

An error thrown when an operation is performed on a value of the wrong type; in other words, executing an operation with a value that doesn't support it.

[#understanding-errors]() [#TypeError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What specific error would the following code throw?

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

%

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

The above code would throw a TypeError, specifically `Uncaught TypeError: str1.push is not a function.`

[#understanding-errors]() [#TypeError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## Explain why the following code would throw the TypeError `Uncaught TypeError: str1.push is not a function`, even though .push() is a function?

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

%

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

The above code would throw `Uncaught TypeError: str1.push is not a function.` because .push() is an _Array_ method, so it is 'not a function' that can be used for Strings.

[#understanding-errors]() [#TypeError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What's the first thing you should consider when encountering and resolving a TypeError in JS?

<!-- notecardId: 1775577679575 -->

When debugging `TypeError`s, the first thing you should consider is the data type you are trying to run a method or operation with, because it's likely either no the type you think it is, or the method/operation you're using is incompatible with the type.

[#understanding-errors]() [#TypeError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the four primary causes of `TypeError` in JS?

<!-- notecardId: 1775577679576 -->

- The data type not being what's expected,
- Operand or argument type is incompatible with operator or function
- or the method/operation not being suitable for the data type.
- attempting to modify a value that can't be changed

[#understanding-errors]() [#TypeError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What are the four primary steps to resolving an error?

<!-- notecardId: 1775577679577 -->

- Understanding the error message and stack trace
- Googling the error
- Using the debugger and breakpoints to analyze variables, values, and types
- Using the console and its methods `console.log()`, `console.trace()`, and `console.table()`.

[#understanding-errors]() [#debugging]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between an error and a warning?

<!-- notecardId: 1775577679578 -->

Errors stop execution of the program or process, while warnings provide insight on potential problems that may not cause a crash.

[#understanding-errors]() [#errors]() [#warnings]()

<!------------------------------------------------------------------------------------------- -->

## What colors are errors and warnings typically shown in?

<!-- notecardId: 1775577679579 -->

Red and yellow.

[#understanding-errors]() [#errors]() [#warnings]()

<!------------------------------------------------------------------------------------------- -->

## What is the usual cause of the error `SyntaxError: missing ) after argument list?`?

<!-- notecardId: 1775577679580 -->

`SyntaxError: missing ) after argument list?` indicates a missing closing parenthesis at the end of a function/method call.

[#understanding-errors]() [#SyntaxError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What is the usual cause of the error `SyntaxError: missing : after property id`?

<!-- notecardId: 1775577679581 -->

`SyntaxError: missing : after property id` usually is caused by an incorrectly formed JS object, but can also be caused by syntax other errors, such as the following in function declarations:

`function checkGuess( { ...func code ` makes the browser think we're trying to pass the function contents as a parameter list, when it should be `function checkGuess( { ...func code`.

[#understanding-errors]() [#SyntaxError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What's the usual cause of `SyntaxError: missing } after function body`?

<!-- notecardId: 1775577679582 -->

A missing or shifted curly brace in a function or conditional.

[#understanding-errors]() [#SyntaxError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->

## What's the usual cause of `SyntaxError: expected expression, got 'string'` and `SyntaxError: string literal contains an unescaped line break`?

<!-- notecardId: 1775577679583 -->

That a string is missing an opening, or closing, quote mark or backtick.

[#understanding-errors]() [#SyntaxError]() [#JavaScript]()

<!------------------------------------------------------------------------------------------- -->
