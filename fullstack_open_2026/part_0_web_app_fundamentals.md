# Part 0: Fundamentals of Web Apps

<!------------------------------------------------------------------------------------------- -->

## What is the <head> element of an HTML document?

%
The <head> element of an HTML document contains configuration metadata that the browser uses to render the <body>; for example, the document's <title>, <charset>, CSS stylesheet <link>, and JS <script>.

[#html]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What does the <script> tag of an HTML <head> section do?

The HTML <script> tag instructs the browser to fetch a JavaScript file, usually main.js.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is an event listener?

An event listener is a function that the browser uses to monitor DOM elements for specific user or system actions; when such actions occur, event listeners call their callback args a function trigger .

[#callbacks]() [#events]() [#DOM]()

<!------------------------------------------------------------------------------------------- -->

## What is an event handler?

An event handler is a callback function that JS registers with the host environment for invoking upon triggering events.

[#callbacks]()

<!------------------------------------------------------------------------------------------- -->

## What does I/O refer to?

%
I/O refers to Input / Output; a general CS concept describing interaction with external systems. JavaScript simply provides a non-blocking, event-driven way to handle it.

[#CS fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the DOM?

%
The DOM, or Document Object Model, is a lang-agnostic web API that represents HTML/XML documents as object-element trees and provides methods for determining and modifying the document's structure, style, and content.

[#DOM]() [#fundamentals]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is JSON?

[#functions]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is CSS?

CSS, or Cascading Style Sheets, is neither a programming nor a markup language; it is a style sheet language used to style the appearance of elements in HTML and XML documents (primarily web pages, but also XML dialects like SVG and XHTML).

[#CSS]()

<!------------------------------------------------------------------------------------------- -->

## What is a CSS Rule or Ruleset?

A CSS Rule is

[#CSS]() [#css selectors]()

<!------------------------------------------------------------------------------------------- -->

## What is a CSS class selector?

The CSS class selector styles html elements by targeting their class attribute.

[#CSS]() [#css selectors]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of a CSS class selector?

%
The CSS class selector syntax is a period followed by the string value of the target element's class atrribute. For example, to target the following html element:

```html
<p class="yellow-bg">Make this text have a yellow background</p>
<p></p>
```

You would write:

```css
.yellow-bg {
  background: #ffffaa;
}
```

[#CSS]() [#css selectors]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML attributes?

In HTML markup language, attributes are opening-tag key-value pairs used for providing metadata and configuring behavior of elements.

[#HTML]() [#attributes]()

<!------------------------------------------------------------------------------------------- -->

## When the browser parses an HTML document into the DOM, what happens to HTML element attributes?

When the browsser parses an HTML document into a DOM tree, most element attributes become properties of the resulting element object nodes.

[#HTML]() [#attributes]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is AJAX?

%
AJAX, or Asynchronous Javascript and XML, is an early 2000's webdev pattern that enabled dynamic page content changes via the built-in JS XMLHttpRequest object; previously, displaying server-side data changes required fully reloading entire pages.

Today the term is superfluous as JavaScript requests are currently made via fetch() or async/await and XML has largely been replaced with JSON.

[#JavaScript]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is an SPA?

A Single Page Application is a web app or site that loads HTML, CSS, and JS once, then dynamically updates content by fetching data from the server and rewriting the DOM. Unlike traditional multi-page sites, navigation doesn't reload the entire page.

[#SPA]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
