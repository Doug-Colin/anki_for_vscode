## What does HTML stand for?

Hyper Text Markup Language

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What is HTML used for?

HTML is used to define the structure and content of webpages.

[#HTML]() [#fundamentals]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What are HTML tags?
%
HTML tags are the markup syntax defining the beginning and end of HTML elements.

Examples: `<head></head>, <p></p>. <span></span>` etc.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->
## What is semantic HTML?

Using HTML tags that describe the meaning of content (e.g., `<header>, <article>, <nav>`) instead of generic tags like `<div>` or `<span>`.
#html #accessibility

[#HTML]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->
## Do all HTML elements have opening and closing tags?

No, some elements only have opening tags, such as <br> and <img>.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What are HTML void elements?

Void elements are HTML elements without closing tags- for example <br> and <img>.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## Why are HTML elements without closing tags referred to as 'void' elements?

Because the tags are void of any content. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## Should void elements or 'self closing' tags like `<br>` and. `<img>` be written with a forward slash, for example `<br />` or `<img />`?

No, the latest HTML spec discourages using forward slashes in void elements.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What should the HTML file containing a web site's home page be named?
index.html

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What does every HTML page start with?

A DOCTYPE declaration.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
## What's the purpose of the DOCTYPE declaration at the beginning of an HTML file?
To tell the browser what version of HTML it should use to render the web page. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->
## What's the latest version of HTML?
HTML5.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->
## What is the doctype for HTML5 documents?

`<!DOCTYPE html>`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->
## What is the `lang` attribute of the `<html>` element?
Tha `lang` attribute specifies the language of an element's text content.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<head>` element?
The `<head>` element contains metadata about a webpage.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## How can you make sure that your HTML markup is correct and without error?
%
By pasting your HTML into an HTML Validator like the W3 markup validation service.   
https://validator.w3.org/#validate_by_input

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<body>` element?
The HTML `<body>`element is where all the user-displayed content goes.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What are the HTML heading element?
HTML heading elements display their content larger and bolder to signfiy that they are headings. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## How many HTML heading elements are there?

Six, `<h1>` through `<h6>`.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the syntax for writing a comment in html?
`<!-- comment text goes here -->`


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->
## When should you use the `<strong>` tag?
%
When content has strong importance, seriousness, or urgency. 

For example: <strong>Warning:</strong> Cannot be undone. 
Screen readers announce anything within a <strong> tag with emphasis.

[#HTML]() [#semantic html]() [#accessibility]()
<!------------------------------------------------------------------------------------------- -->
## When should you use the bold tag, `<b>`?
%
For text that should be visually bold without extra importance. 

Example: 
`<b>Product name:</b> Widget 3000` or keywords in a document.

[#HTML]() [#semantic html]() [#accessibility]()
<!------------------------------------------------------------------------------------------- -->
## When should you use the italic emphasis tag, `<em>`?
%
For stressed emphasis that changes sentence meaning. 

For Example: I <em>really</em> need this. 

Note: Screen readers use vocal stress; typically renders as italic.

[#HTML]() [#semantic html]() [#accessibility]()
<!------------------------------------------------------------------------------------------- -->

## What's the difference between `<strong>` and `<b>`?
%
The `<strong>` tag indicates importance or urgency (semantic meaning). 
The `<b>` tag is for visual styling without implying importance. 

Use <strong> when content matters more, <b> for visual offset only.

[#HTML]() [#semantic html]() [#accessibility]()
<!------------------------------------------------------------------------------------------- -->

## What is the `<ul>` tag used for?
%
The `<ul>` tag defines an unordered list and is used when the sequence of list items doesn't matter. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the `<ol>` tag used for?

The `<ol>` tag defines an ordered list and is used when the order of list items matters. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the `<li>` tag used for?

The `<li>` tag defines individual list items and must be a direct child of `<ul>`, `<ol>`, or `<menu>`; preferably `<ul>` or `<ol>`.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What element is used to create links?

The anchor element, `<a></a>`.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What attribute must be set on the anchor element's opening  tag to ensure that it functions as a link?

The `href` attribute.

Example:
`<a href="www.rainbow.com">Checkout rainbow.com!</a>`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## Can anchor tags be used only to link to web pages?

No, anchor tags can be used to link to any resource with a url address; images, pdfs, videos, and even telephone numbers, email addresses, SMS text messages, and executable code. 

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What attribute is used to specify where, or how, an anchor tag link will be opened?

The `target` attribute specifies whether a clicked anchor tag link will open in the current browser tab, or a new tab (or window, pending user's browser settings).

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the default behavior of the anchor element's `target` attribute, if unset?

If the `target` attribute is unset, an anchor link will open in the current browser tab.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## How can anchor links be set to open in a new browser tab (or windows, pending user settings), rather than current tab?

By setting the anchor link's target attribute to "_blank":
`<a href="https://www.rainbows.com" target="_blank">`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What attribute must be set on the `<anchor>` element if you are setting the link to open in a new tab via `target="_blank`?

If you use `target="_blank"` to make links open in new tabs, you must also set the `rel` relationship attribute to `"noopener noreffer"`

Example: `<a href="https://www.rainbows.com" target="_blank" rel="noopener noreffer">`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## Why must you set the relationship attribute to `rel="noopener noreffer"` on an anchor tag link whenever using `target="_blank"` so that it opens in a new tab?

Because not doing so introduces security and privacy vulnerabili


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is the purpose of the <a> element’s rel attribute?
%
The rel attribute describes the relationship and permissions between the current page and the linked document.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What does rel="noopener" do?
%
rel="noopener" prevents a newly opened page from accessing or manipulating the original page via JavaScript.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What does rel="noreferrer" do?
%
rel="noreferrer" prevents the new page from seeing the referrer URL and also blocks access to the original page.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## How are noopener and noreferrer related?
%
noreferrer includes the security behavior of noopener and also adds referrer privacy.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is tabnabbing?
%
Tabnabbing is an attack where a page opened in a new tab changes the original page to a malicious one.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is an absolute link in an HTML `<a>` tag??

An absolute link in an `<a>` tag points to an external website via a full URL `href` value.

Example: `<a href="https://www.rainbows.com" target="_blank" rel="noopener noreffer">`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is a relative link in an HTML `<a>` tag??

A relative link in an `<a>` tag points to a resource that is part of the same website using a relative path `href` value.

Example: `<a href="./pages/site_glossary.html">`

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## When should relative links be used for HTML anchor tags?
%
When linking to internal pages within the same site.
[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What attributes should always be set on `<img>` tags to prevent content from shifting as it loads?
%
The `height` and `width` attributes.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What attribute must always be set on `img` tags for accessibility?
%
The `alt` attribute should always be set so that screen readers can describe images to visually impaired users.

Example: `<img src="./assets/images/meteor_hitting_orphanage.jpg" alt="A wood-framed orphanage bursting into splinters and flame at the moment of a meteor's impact">


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What is a root-relative link in an HTML `<a>` tag?

%
A root-relative link has an `href` value that starts with `/` and points to a path relative to the root of the current website, not the current document.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What does the leading / mean in a root-relative link?
%
The leading `/` represents the root of the website, regardless of where the current page is located.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## When should root-relative links be used?
%
Use root-relative links for internal navigation when you want paths to work consistently from any page on the site.


[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

## What are the four main image formats used on the web?
%
The four main image formats used on the web are `JPG`, `GIF`, `PNG`, and `SVG`.

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

##
%

[#]() [#]() [#]()
<!------------------------------------------------------------------------------------------- -->

\*\*\* ADD TO


**_ A way to filter out low quality rhetoric and sustain high quality conversation and critical and or substantive dialogue; for example, repeated rhetorical devices and or argument tropes and debate tactic cliches. Could it be an upvote/downvote system? Too easuly gameable for tribes in its simplest form. What about ... a bot or hardcoded dict that assesses language and categorizes part of sentences/,essages/responses, assessing for those lowest quality things, that could actually be encodeable? New words and language would have to be regularly added. THAT'S AN INTERESTING PROJECT. _**