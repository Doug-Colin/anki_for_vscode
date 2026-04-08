## What case convention should you use when naming ?

camelCase

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What's wrong with the following functions?

```javascript
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();
```

%
Inconsistent verb use - use consistent verbs across functions that perform similar actions:

```javascript
function getUserScore();
function getPlayerName();
function getPlayer1Tag();
```

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What should function names begin with?

A verb.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What should variable names begin with?

A noun or adjective.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What's wrong with the following code, and how could it be improved?

`setTimeout(stopTimer, 3600000);`
%
It uses the hard to understand number 3,600,000 seconds! Instead, write that number more legibly and create a _memorable_ variable to hold it:

```js
const ONE_HOUR = 3600000; // 1000ms * 60s * 60m;

setTimeout(stopTimer, ONE_HOUR);
```

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## Why does the following code use a variable name in full caps?

```js
const ONE_HOUR = 3600000; // 1000ms * 60s * 60m;

setTimeout(stopTimer, ONE_HOUR);
```

%
Because ONE*HOUR is something that \_never changes*.
For a _true_ constant, that never changes, some developers use all caps variable names (and underscore?)

[#clean-code]() [#best-practices]() [#constants]()

<!------------------------------------------------------------------------------------------- -->

## SHould you use semicolons wherever required in JS?

It's recommended to do so; though the most important thing is consistency, so what you should do is configure prettier to consistently format your code.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## Should you leave psuedocode comments that duplicate your code?

No, clean those up; the code itself should is the cleaned up version of the pseudocode.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## SHould comments explain _how_ something is done?

No, keep that to yourself. Tell _why_ not _how_.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What's wrong with the following code, and how could it be cleaned up? Explain and demonstrate by refactoring.

```js
// Function to extract text
function extractText(s) {
  // Return the string starting after the "[" and ending at "]"
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

%

```js
// Function to extract text
function extractText(s) {
  // Return the string starting after the "[" and ending at "]"
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

- The comments explain what is being done and how, rather than _why_.
- The parameter 's' could be more explicit.
- .substring() arguments could be explicit variable.
  Code could be improved by removing comments, and using explicit parameter and variables to explain what is being done.
  Refactored:

```js
function extractTextWithinBrackets(text) {
  const bracketTextStart = text.indexOf("[") + 1;
  const bracketTextStart = text.s.indexOf("]");
  return text.substring(bracketTextStart, bracketTextEnd);
}
```

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## How could the following code be 'cleaner'?

```js
function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

%
It would be cleaner to have a comment explaining how bmi is calculated:

```js
function calculateBMI(height, weight) {
  // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## How could you clean up the following code?

```html
<div>
  <div>
    <div>...</div>
    <div>...</div>
  </div>
  <div>
    <div>...</div>

    <div>...</div>
    <div>...</div>
  </div>
  <div>
    <div>...</div>
    <div>...</div>
  </div>
</div>
```

%
By using `id=` attributes that represent the structure of the page.

```html
<div id="main-container">
  <div id="header">
    <div id="logo">...</div>
    <div id="main-menu">...</div>
  </div>
  <div id="content">
    <div id="left-column">...</div>

    <div id="center-column">...</div>
    <div id="right-column">...</div>
  </div>
  <div id="footer">
    <div id="footer-menu">...</div>
    <div id="disclaimer">...</div>
  </div>
</div>
```

[#clean-code]() [#best-practices]() [#html]()

<!------------------------------------------------------------------------------------------- -->

## How can you easily ensure you use correct and consistent indentation?

By using and configuring prettier to format files on every save.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What is the number one rule of what to avoid in code comments?

Avoid _commenting out_ chunks of old or redundant code.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## Does clean code feature extremely large functions?

No, avoid extremely large functions by breaking them up into smaller ones.
It's easier for teams to reuse code when it's broken into more modular functions.

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What are the three conventions of writing clean code in codebases shared with other developers?

By:

- keeping correct indentations and formatting
- commenting on the modification (_why_, not how)
- by respecting all standards observed/in use

[#clean-code]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->
