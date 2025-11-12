## Javascript General

*banki_technical_JS_1*

Can you name two programming paradigms important for JavaScript app developers?
%

- OOP and Functional Programming are the most often used. OOP allows inheritance via different "classes". Functional is pure-functions without side effects.
- **Sources:**
  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/
  https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

*banki_technical_JS_2*

What is functional programming?
%

- **Explanation:** Using pure functions with no side effects to compose your program.
  <br>
- **Use:** You avoid mutable data and shared states and instead make use of simple functions. It makes the code more predictable.
- **Example:** Instead of having a function with two parameters that does two tasks, you break it into two functions. Each function would have a single parameter and do a single task.
- **Sources:**
  https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/

*banki_technical_JS_3*

What is the difference between classical inheritance and prototypal inheritance?
%

- **Explanation:** Classical instances inherit from class "templates" and create sub-class relationships. They are typically instantiated via
  constructor functions or the class keyword. Prototypal instances inherit directly from other objects and typically instantiated via factory functions or the `Object.create()` method.
  <br>
- **Use:** It's generally considered better practice to use Prototypal inheritance for a few reasons:
  - Protoypes are more flexible than classes
  - The abstraction is only a single level deep
  - It's less verbose than using classical inheritance
    <br>
- **Source:**

  - https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
  - https://dev.to/crishanks/classical-vs-prototypal-inheritance-2o5a

  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/

*banki_technical_JS_4*

What are the pros and cons of functional programming vs object-oriented programming?
%

- ** Functional programming:**
  Pros:
- Leads to reliable results without side effects
- Has an emphasis on efficiency and optimisation
- Very reusable
  Cons:
- Newer paradigm so not easy to find documentation
- Can be harder to read due to the large number of functions
- File structure can be more difficult to organise
  <br>

- ** Object-oriented programming:**
  Pros:
- Easy to understand the basic concept of objects and methods
- Easy to understand due to imperative style (like a simple set of instructions)
  Cons:
- OOP models can become very complex
- Programmers need to have brilliant designing skill and programming skill along with proper planning because using OOP is little bit tricky
  <br>

- **Sources:**
  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/
  https://farida-alv04.medium.com/functional-vs-object-oriented-programming-pros-and-cons-cecfbb4054ca

*banki_technical_JS_5*

What are two-way data binding and one-way data flow, and how are they different?
%

- **Explanation:** - Two-way data: UI fields are bound to model data dynamically. When a UI field changes, the model data changes with it and vice-versa. Side effects can occur. - One-way data: The model is the single source of truth. Changes in the UI signal user intent to the model (or “store” in React). Only the model has the access to change the app’s state. The effect is that data always flows in a single direction. It is deterministic meaning no side effects will occur.
  <br>

- **Use:** React is a popular framework which uses one-way data flow. Angular on the other hand uses two-way data binding.
  <br>

- **Sources:**
  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/
  https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

*banki_technical_JS_6*

What is asynchronous programming, and why is it important in JavaScript?
%

- **Explanation:** It allows you to run blocking code outside of the single thread so that the program can continue to run while it waits for the
  bloking code to complete. Javascript is synchronous by nature, but the runtime (browser or node) has an event loop which allows developers to write asynchronous programs.
  <br>

- **Use:** It is important for user interfaces, where you are waiting for user input, and for network requests, where you are waiting for some data back from a server.
  <br>
- **Example:** Using `async...await` and `fetch` to fetch resources from an API is a common implementation of async programming.
  <br>

- **Sources:**
  https://developer.mozilla.org/en-US/
  https://github.com/curtisbarnard/BANKI/blob/main/BANKI-answers.md
  https://www.frontendinterviewhandbook.com/js-questions/
  https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
