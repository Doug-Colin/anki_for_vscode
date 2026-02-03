# javascript_functions

<!------------------------------------------------------------------------------------------- -->

## In terms of access, What's the difference between a variable declared inside a function, and a variable declared outside of a function?

%
A variable declared inside a function is locally scoped and can only be accessed by that funtion.
A variable declared outside of a function is globally scoped and can be accessed by (any function in that module?).

[#javascript]() [#functions]() [#scope]()

<!------------------------------------------------------------------------------------------- -->

## What terms are used to distinguish between the JS variables declared within a specific function, versus the variables declared outside of it?

Local variables versus outer variables.

[#variables]() [#functions]() [#scope]()

<!------------------------------------------------------------------------------------------- -->

## What's a global variable in JS?

A variable declared outside of the body and scope of a function.

[#scope]() [#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## In terms of syntax, What's a parameter?

Parameters are the parentheses-wrapped variables that precede a function's body in any function declaration or expression.

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What do parameters do?

Parameters bind argument values so that they can be operated on and returned within the function body at call time.

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What's an argument?

An argument is a value passed into a function when called.

<!------------------------------------------------------------------------------------------- -->

## If a function with parameters is called without an argument, what does it return?

Undefined.

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What keyword is used within a function body to ensure that the function outputs a value?

return

[#functions]() [#keywords]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Does JS distinguish between only two types of scope, local and global?

No, JS distinguished between varying degreees of locality, as variables and functions can be created within each other, creating varying degrees of scope locality.

[#functions]() [#scope]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do function declarations fit into the top-to-bottom flow of control?

Directly declared functions like function startCar() {} are not part of the regular flow of control top to bottom. They are conceptually 'hoisted' to the top of their scope, and can be used by all the code in that scope.

[#functions]() [#hoisting]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What's hoisting in JS?

%

In JS, all function declarations (not function expressions!) are 'hoisted' to the top of their scope to be available at runtime to all co-scoped code, no matter where they are declared in the top-to-bottom control flow.

[#functions]() [#hoisting]() [#scope]() [#javascript_general]()

<!------------------------------------------------------------------------------------------- -->

## What's a helper function?

A helper function is a function called within another function.

[#functions]()

<!------------------------------------------------------------------------------------------- -->

## What's an anonymous function?

An anonymous function is a function without a name; examples include built-in functions like (?) , and

[#functions]()

<!------------------------------------------------------------------------------------------- -->

## Are all function expressions anonymous?

%

No, function expressions can be named or anonymous. For example:

```javascript
const addOne = function(integer) {integer+1}
// COMPLETE THIS ACCURATELY
const (????)
```

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the three primary ways of defining a function in JavaScript? Give syntax examples for each.

The three main ways of defining JavaScript functions are function declarations, function expressions, and arrow function expressions.

Function declarations use the 'function' keyword and must have a name and return statement:

```javascript
function addOne(integer) {
  return integer + 1;
}
```

Function expressions are functions saved to variables; :

```js
const incrementByOne = function addOne(integer) {
  return integer++;
};
```

Arrow expressions are concise function expressions that use arrow syntax and lack a defined body ({}):

```js
const addOneArrowStyle = (integer) => return integer + 1
```

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## In JS, What's a function definition?

A function definition is a function defined through any means; function declarations, expressions, and arrow expressions are all function definitions.

[#functions]()

<!------------------------------------------------------------------------------------------- -->

## What's a higher order function in JS?

A higher order function is a function can accept other functions as arguments and or return a function as a result.

[#functions]() [#hof]() [#higher order functions]()

<!------------------------------------------------------------------------------------------- -->
<!--
Arrow functions werre added to JS so you could write small ffunction expressions in a less verbose way. What's the symbol used for arrow functions? =>

_Refine into syntax q's for various arrow function types_
What's the syntax of an arrow function? Write one. let func = (arg1, arg 2, arg3) => expression; or let sum = (a,b) => a+b;

_Refine into_

The following is a function expression; turn it into a function declaration and an arrow function. let sum = function(a, b) { return a + b; }; Function Declaration: function sum (a,b) { return a+b; } Arrow function: let sum = (a,b) => a+b;

"Storing context in the call stack requires memory, and when the stack grows to big, the computer fails witha message like ""out of **\_** **\_**"" or ""to much **\_\_**""" stack space, recursion

A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was **\_\_**, not the environment in which it is **\_\_\_\_**. created, called.

A function that calls itself is called ****\_\_**** recursive

There are three main ways of writing a function: defined, declared, and arrow functions. Write the syntax for each, for a function that multiplies two numbers together. Be midnful of where the semicolins are. Defined const multiplyTwo = function(a, b) { return (a _ b); }; Declared function multiplyTwo(a, b) { return (a _ b); } Arrow function (the shortest way of writing it) let multiplyTwo = (a, b) => (a \* b);

The ****\_**** feature in JavaScript which allows access to function declarations before they’re defined hoisting

Arguments can be passed to a function as **\_\_\_** or **\_\_\_** values variables

Another term for a declared function's name is ******\_****** identifier a

******\_\_\_****** parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. Default

Parameters can be passes as variables and values, but you can also assign a default value to a parameter variable, so that it will be used in the event that the function is called without any passed arguments. Imagine for example your function is greeting club members by using the variable theirName as a paramter, via a template literal in the function body. . What if someone who hasn't signed up to the club is on the website? How would you use default paramters to greet them, when there is no name or name is undefined? Think through this like Psuedo code. What would the two steps be? -variable theirName must be included as a parameter when declaring the function -variable theirName must be assigned a default value in the parameter parentheses of the function declaration. For Ex: function greeting (name = 'stranger') { console.log(`Hello, ${name}!`) } greeting('Nick') // Output: Hello, Nick! greeting() // Output: Hello, stranger!
I

If you're assinging a parameter a default value, what happens if you call the function without passing an argument? What happens if you call it with an argument passed? For Ex: function greeting (name = 'stranger') { console.log(`Hello, ${name}!`) } greeting('James') // Output?: greeting() // Output? greeting('James') // Output: Hello, James! greeting() // Output: Hello, stranger!

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is ****\_**** undefined.

Change the following function so that it returns a value. function rectangleArea(width, height) { let area = width _ height; } console.log(rectangleArea(5, 7)) // Prints undefined function rectangleArea(width, height) { let area = width _ height; return area; } console.log(rectangleArea(5, 7))

To create a ****\_**** statement, we use the **\_\_\_** keyword followed by the value that we wish to return. return, return

When a return statement is used in a function body, the execution of the function is ****\_****'d and the code that follows it will not be **\_\_\_** styopped, executed

You can use return statements to control the flow of a function's code, in association with conditional statements. What would the following example return: function rectangleArea(width, height) { if (width < 0 || height < 0) { return 'You need positive integers to calculate area!'; } return width \* height; } rectangleArea(-25, -50); It would return 'You need positive integers to calculate area!'

A function expression, as opposed to declaration, usually doesn't have a name. So it would be an anonymous function. So how would we usually refer to it? by storing the function expression in a variable

Arrow functions remove the need to type out the keyword ****\_**** every time you need to create a function function

**\_\_\_\_** arrow functions are single line functions that, as a result, don't need curly braces, so they also don't need the keyword **\_\_**, because concise body arrow functions, in the absence of **\_** **\_\_\_**'s, have an implicit return Concise body return Concise body curlie brackets implicit return

**\_\_\_\_** define the scope of variables. Blocks

In higher-order functions, the other functions that are passed as arguments are known as **\_\_\_\_** ****\_****. callback functions
When doing writing a higher-order function that acecpts a callback function as an argument, it's crucial to pass in the callback without it's own ****\_\_****. parentheses

What does local versus global scope mean

If an **\_\_** **\_\_** exists before the function, and a same-name **\_\_\_** is declared inside the function, then that local variable **\_\_\_** the other, meaning when the function is called, the \_**\_ \_\_\_** is ignored. outer varaible, variable, shadows, outer variable

"In the example below, the declared function's parameters are from, text. What will happen when the function is later called each time with given values? What will the screen display? function showMessage(from, text) { alert(from + ': ' + text); } showMessage('Ann', 'Hello!'); showMessage('Ann', ""What's up?"");" The given values wil

"In the following example, when the function is called, it will get the value ""****\_\_\_\_****"",since the text parameter is not passed as an argument. function showMessage(from, text = ""no text given"") { alert( from + "": "" + text ); } showMessage(""Ann""); Actually I believe it will alert Ann: no text given. But confirm this via testing, I think this was written down incorrectly. There may be another mistake here, as from is not in quotes and this not a string, and not defined anywhere." """no text given"" Actually I believe it will alert Ann: no text given. There may be another mistake here, as from is not in quotes and this not a string, and not defined anywhere. This is because What I dont get is why is doesn't also display from when called- ask Discord!"

TRUE?
What are the differences between function expressions and function declarations? Disadvantage- loading/initialization and scope. Declared functions are are all loaded initially, whereas function expressions are not- so function expressions can only be called after their point in the document flow Advantage- Function expressions are advantageous for debugging, as the error can load the name of the function. this will not happen with a declared function.

Because they allow us to avoid repetition through repeat function calls.

What does lexical scope refer to in JS?

When are global variables used?
...Ideally never?

We can delare functiions with a “default” value, to be used if the function is later called, without mention of that functions **\_\_\_**. Parameter

"What will the following called and built-in functions do when executed? function showMessage(from, text) { from = '_' + from + '_'; alert( from + ': ' + text ); } let from = ""Ann""; showMessage(from, ""Hello""); alert ( from );" "showMessage(from, ""Hello""); Will display an alert that read _Ann_: Hello - even though Ann wasn't a local varibale, the function inherits it where the gloal variable is declared alert ( from ); will only read Ann, because even though it doesn't contain Ann, Ann was reserved as the value of variable from with let from = ""Ann""; It won't show \* \* or Hello because those are only local variables, and and thanks to the global variable declared in let from = ""Ann"";" -->

<!-- ------------------------------------------------------------------------------------------------------------------------------------ -->

<!-- ✔️ Use function declaration when:

You’re writing top-level helper functions

You want hoisting

You want a named function in stack traces

You want a normal this

You want arguments or new

✔️ Use function expressions (const) when:

You want block scoping

You’re passing a function as data

You’re returning a function

You want stable bindings (const)

The name isn’t important

✔️ Use arrow functions when:

You want lexical this

You write callbacks (map/filter/reduce)

You write promises/async chain code

You do functional programming

You write small functions, especially inline

You do not want the function to have this or arguments

If you want:

I can also make:

- A visual flowchart: “which function type to choose?”

- A cheat sheet for your Anki deck

- Example code blocks showing pros/cons

- Real-world code samples from React/Node best practices

Just let me know.

Want?

- A cheat sheet for your Anki deck

- Example code blocks showing pros/cons

- Real-world code samples from React/Node best practices -->
