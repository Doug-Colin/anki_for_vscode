### Node

# _banki_technical_Node_1_

#### What is Node.js? Where can you use it?

%

- Node.js is a single-threaded, open-source, cross-platform runtime environment used to build server-side and networking applications. It uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.

#### Source:

https://kinsta.com/knowledgebase/what-is-node-js/

# _banki_technical_Node_2_

#### Why use Node.js?

%

#### Explanation:

It uses fewer resources and memory (than what?) because it is single threaded, it has wide adoption with many open source packages available, it is multi-platform and it simplifies the full stack as you can use just one language: Javascript.

#### Use:

It's best used for real time applications that aren't data intensive. For programs that require more data processing a multi-threaded language like Java is a better choice.

#### Source:

https://kinsta.com/knowledgebase/what-is-node-js/

- [ ] T-Node-3) What are the features of Node.js?

  #### Explanation:

  Node innately offers valuable resources that standalone JavaScript environment doesn’t allow, such as access to http and fs modules.

#### Use:

Through node we have access to the V8 Engine via JavaScript, where we have browser functionalities in our JavaScript environment. We can access packages via npm to install established libraries, or require pre-established modules for things like server creation and file storage.
<br>

#### Example: const http = require('http')

    Allows us to access Node.js web server module (ES6) so we can use http methods such as createServer.

    const fs = require('fs');
    Allows us actions such as reading and writing to files in a file system

#### Source:

https://nodejs.dev/en/learn/the-nodejs-fs-module
https://nodejs.dev/en/learn/the-nodejs-http-module

# _banki_technical_Node_4_

#### How do you update NPM to a new version in Node.js?

%

#### Explanation:

With Mac or Linux systems it is rather easy just type the command `npm install -g npm@latest` into the terminal to update npm. With Windows it's a little more complex as you will need to either modify the Window's installation PATH or remove the npm files from the nodejs install directory then update npm in the terminal.

#### Source:

https://docs.npmjs.com/try-the-latest-stable-version-of-npm

# _banki_technical_Node_5_

#### Why is Node.js Single-threaded?

%

#### Explanation:

Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.

#### Source:

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions

# _banki_technical_Node_6_

#### Explain callback in Node.js.

%

#### Explanation:

A callback function is called after a given task. All APIs of Node are written to support callbacks.

#### Use:

Callbacks allow other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback.

#### Source:

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions

# _banki_technical_Node_7_

#### What is callback hell in Node.js?

%

#### Explanation:

This is a big issue caused by coding with complex nested callbacks. Imagine each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.

#### Use:

This should be avoided.
<br>

#### Example:

```callback hell
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})   //note this long line of stacking brackets is often a tell of callback hell
```

#### Source:

# _banki_technical_Node_8_

#### How do you prevent/fix callback hell?

%

#### Explanation:

One of the most common ways is to use promises (an object that represents the eventual completion or failure of an async operation and its value). Once each step is finished and we have our value, we can run then() method to call the async callback or if it fails we can catch an error. We could also just keep our code shallow and modularize (make each block of code do one thing only).
<br>

#### Example:

```promises and then() method
houseOne()
	.then(data=>console.log(data)
	.then(houseTwo)
	.then(data=>console.log(data)
	.then(houseTwo)
```

#### Source:

https://www.geeksforgeeks.org/what-is-callback-hell-in-node-js/

# _banki_technical_Node_9_

#### Explain the role of REPL in Node.js.

%

#### Explanation:

The Node.js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node.js expressions. The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code, prints the result to the user, and loops until the user signals to quit.

#### Use:

The REPL is bundled with every Node.js installation and allows you to quickly test and explore JavaScript code within the Node environment without having to store it in a file. Entering "node" in the terminal starts the REPL
<br>

#### Example:

```promises and then() method
sammy@b6755984:~$ node     //press enter on "node" to get ">", indicating the start
Welcome to Node.js v14.19.0.
Type ".help" for more information.
> 2+2    //used REPL to evaluate simple math
4
```

#### Source:

https://www.digitalocean.com/community/tutorials/how-to-use-the-node-js-repl

# _banki_technical_Node_10_

#### Name the types of API functions in Node.js.

%

#### Explanation:

There are two types; **Asynchronous**, Non-blocking functions and **Synchronous**, Blocking functions
<br>

#### Example: Asynchronous examples would be emails and online forums. Synchronous examples would be instant messaging and video calls.

#### Source:

https://www.geeksforgeeks.org/types-of-api-functions-in-node-js/

# _banki_technical_Node_11_

#### What are the functionalities of NPM in Node.js?

%

#### Explanation:

NPM serves two main purposes; being an online repository of open-source Node.js projects and a command line utility for interacting with said repository.

#### Use:

Typically it is used to install packages, manage versions and manage project dependencies.

#### Source:

https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/

# _banki_technical_Node_12_

#### What is the difference between Node.js and Ajax?

%

#### Explanation:

Node.js is an open-source server-side environment that makes it possible to run JavaScript outside of the browser. Ajax is a client-side web development technique used for making asynchronous calls to the server.

#### Use:

You would use Node.js to create a server environment to interact with local files or dynamic files on the internet. Ajax is used to communicate with servers.

#### Source:

https://www.geeksforgeeks.org/difference-between-nodejs-ajax-and-jquery/#:~:text=NodeJs%20is%20an%20open%2Dsource,javascript%20outside%20of%20the%20browser.

# _banki_technical_Node_13_

#### What are “streams” in Node.js? Explain the different types of streams present in Node.js.

%

#### Explanation:

Streams are objects that enable you to read data or write data continuously.

#### Use:

There are four types of streams: - Readable – Used for reading operations - Writable − Used for write operations - Duplex − Can be used for both reading and write operations - Transform − A type of duplex stream where the output is computed based on input

#### Source:

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions

# _banki_technical_Node_14_

#### Explain chaining in Node.js.

%

#### Explanation:

Promise chaining allows you to chain together multiple asynchronous tasks in a specific order.

#### Use:

Chaining is great when you have complex code that has any number of asynchronous tasks that need to be performed after the completion of a different asynchronous task.

#### Example:

The .then handler is used for promise chaining. After the initial promise resolves, the .then handler creates a new promise based on the result of the previous promise, and so on and so forth.

#### Source:

https://javascript.info/promise-chaining

# _banki_technical_Node_15_

#### What are Globals in Node.js?

%

#### Explanation:

Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.

#### Use:

Common built-in modules, functions, strings and objects used widely in Node.
<br>

#### Example: setTimeout() is a global function used to run a callback after at least x milliseconds:

```javascript
function printHello() {
  console.log("Hello World!");
}
//call printHello() after 2 seconds
setTimeout(printHello, 2000);
```

#### Source:

https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm

# _banki_technical_Node_16_

#### What is Event-driven programming?

%

#### Explanation:

Event-driven programming is a programming paradigm where the control flow of the program is determined by occurance of events. The events are usually user interactions with the website such as clicking buttons, filling out forms, etc.

#### Use:

The events are monitored by code known as event listeners.
<br>

#### Example: element.addEventListener('click', function) will call a function upon clicking element

#### Source:

https://www.computerhope.com/jargon/e/event-driven-prog.htm

# _banki_technical_Node_17_

#### What is Event loop in Node.js? And How does it work?

%

#### Explanation:

The Event loop handles all async callbacks. We can attach listeners to events, and when a said event fires, the listener executes the callback we provided.

#### Use:

Whenever we call `setTimeout`, `http.get` and `fs.readFile`, Node.js runs the operation and continues to run other code without waiting for the output. When the operation is finished, it receives the output and runs our callback function. All the callback functions are queued in an loop, and will run one-by-one when the response has been received.

#### Source:

https://vigowebs.medium.com/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

# _banki_technical_Node_18_

#### What is the purpose of `module.exports` in Node.js?

%

#### Explanation:

In Node.js, a module encapsulates all related code into a single unit of code by moving all relevant functions into a single file.

#### Use:

You may export a module with the `module.exports` function, which lets it be imported into another file using `require`

#### Source:

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions

# _banki_technical_Node_19_

#### What is the difference between Asynchronous and Non-blocking?

%

#### Explanation:

**Asynchronous** literally means not synchronous. HTTP requests which are asynchronous, means we are not waiting for the server response. The program continues with other code blocks and deals with the server response when it is received. The term **Non-Blocking** is widely used with I/O. For example non-blocking read/write calls return with whatever they can do and expect caller to execute the call again. Read will wait until it hassome data and put the calling thread to sleep.

#### Source:

https://vigowebs.medium.com/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

# _banki_technical_Node_20_

#### What is Tracing in Node.js?

%

#### Explanation:

Tracing provides a mechanism to collect tracing information generated by V8, Node core and userspace code in a log file.

#### Use:

Tracing can be enabled by passing the `--trace-events-enabled` flag when starting a Node.js application. The set of categories for which traces are recorded can be specified using the `--trace-event-categories` flag followed by a list of comma separated category names. By default the `node` and `v8` categories are enabled. Log files can be opened in the `chrome://tracing` tab of Chrome.

#### Source:

https://vigowebs.medium.com/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

# _banki_technical_Node_21_

#### How will you debug an application in Node.js?

%

#### Explanation:

Typically using the `debugger` utility and `console.log()`. I would place `debugger` statements in the code wherever I would like a breakpoint inserted and then run the script with node and `debug` enabled.

#### Source:

https://vigowebs.medium.com/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

# _banki_technical_Node_22_

#### Difference between `setImmediate()` and `setTimeout()`?

%

#### Explanation:

setImmediate() is to schedule the immediate execution of callback after I/O (input/output) event callbacks and before setTimeout and setInterval. setTimeout() is to schedule execution of a one-time callback after delay milliseconds. both are async.

#### Use:

Inside an I/O cycle, the setImmediate() should execute before setTimeout({},0).
<br>

#### Example:

```// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
```

#### Source:

https://dev.to/ynmanware/setimmediate-settimeout-and-process-nexttick-3mfd

# _banki_technical_Node_23_

#### What is `process.nextTick()`?

%

#### Explanation:

Every time the event loop takes a full trip, we call it a tick. When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts. process.nextTick() is actually faster

#### Use:

Calling setTimeout(() => {}, 0) will execute the function at the end of next tick, much later than when using nextTick() which prioritizes the call and executes it just before the beginning of the next tick.
<br>

#### Example:

```
process.nextTick(() => {
  // do something
});
```

#### Source:

https://nodejs.dev/learn/understanding-process-nexttick

# _banki_technical_Node_24_

#### What is package.json? What is it used for?

%

#### Explanation:

All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. It's a central repository of configuration for tools, for example. It's also where npm and yarn store the names and versions for all the installed packages.

#### Use:

This file is used to give information to npm that allows it to identify the project as well as handle **the project's dependencies**. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.

#### Source:

https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/

# \*banki_technical_Node_25

What is libuv?
%

#### Explanation:

Node.js has two major dependencies, written in C. One is the V8 engine, which converts JavaScript into machine code, and the other is libuv, which provides access to the event loop and the thread pool.

#### Use:

Similar to how client-side JavaScript utilizes Web APIs to take advantage of asynchronous processes, libuv allows Node.js to perform non-blocking input-output (I/0) operations with the event loop. More expensive tasks are offloaded to the thread pool.
<br>

#### Example:

setTimeout() works the same in the libuv event loop as it would in a browser environment, executing a callback function after a minimum time is specified. The thread pool handles more intensive tasks, such as DNS lookup and encryption.

#### Source:

https://nodejs.org/en/docs/meta/topics/dependencies/

# _banki_technical_Node_26_

What are some of the most popular modules of Node.js?
%

#### Explanation:

Node modules provide a way to re-use code in your Node application. At its core, a module is a piece of re-usable code with a defined interface. You bring a module into scope using require(). Thanks to the modules and libraries available through the NPM package manager, creating a website takes only a few minutes.

#### Use:

Node modules can provide additional functionality or utilities that would be time-consuming or difficult to implement from scratch.

#### Example: Some common Node modules that I have used are: express, mongoose, passport, cloudinary

#### Source:

https://www.codemag.com/article/1709061/Introduction-to-Node-Modules

# _banki_technical_Node_27_

#### What is `EventEmitter` in Node.js?

%

#### Explanation:

EventEmitter is a class that holds all the objects that can emit events.

#### Use:

Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously.

#### Source:

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions
