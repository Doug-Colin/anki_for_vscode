## What does HTML stand for?

Hyper Text Markup Language

[#HTML]() [#fundamentals]() [#]()

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

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Do all HTML elements have opening and closing tags?

No, some elements only have opening tags, such as <br> and <img>.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML void elements?

Void elements are HTML elements without closing tags- for example <br> and <img>.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Why are HTML elements without closing tags referred to as 'void' elements?

Because the tags are void of any content.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Should void elements or 'self closing' tags like `<br>` and. `<img>` be written with a forward slash, for example `<br />` or `<img />`?

No, the latest HTML spec discourages using forward slashes in void elements.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What should the HTML file containing a web site's home page be named?

index.html

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What does every HTML page start with?

A DOCTYPE declaration.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What's the purpose of the DOCTYPE declaration at the beginning of an HTML file?

To tell the browser what version of HTML it should use to render the web page.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What's the latest version of HTML?

HTML5.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the doctype for HTML5 documents?

`<!DOCTYPE html>`

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `lang` attribute of the `<html>` element?

Tha `lang` attribute specifies the language of an element's text content.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<head>` element?

The `<head>` element contains metadata about a webpage.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## How can you make sure that your HTML markup is correct and without error?

%
By pasting your HTML into an HTML Validator like the W3 markup validation service.  
https://validator.w3.org/#validate_by_input

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<body>` element?

The HTML `<body>`element is where all the user-displayed content goes.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are the HTML heading element?

HTML heading elements display their content larger and bolder to signfiy that they are headings.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## How many HTML heading elements are there?

Six, `<h1>` through `<h6>`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for writing a comment in html?

`<!-- comment text goes here -->`

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the `<strong>` tag?

%
When content has strong importance, seriousness, or urgency.

For example: <strong>Warning:</strong> Cannot be undone.
Screen readers announce anything within a <strong> tag with emphasis.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the bold tag, `<b>`?

%
For text that should be visually bold without extra importance.

Example:
`<b>Product name:</b> Widget 3000` or keywords in a document.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the italic emphasis tag, `<em>`?

%
For stressed emphasis that changes sentence meaning.

For Example: I <em>really</em> need this.

Note: Screen readers use vocal stress; typically renders as italic.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between `<strong>` and `<b>`?

%
The `<strong>` tag indicates importance or urgency (semantic meaning).
The `<b>` tag is for visual styling without implying importance.

Use <strong> when content matters more, <b> for visual offset only.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<ul>` tag used for?

%
The `<ul>` tag defines an unordered list and is used when the sequence of list items doesn't matter.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<ol>` tag used for?

The `<ol>` tag defines an ordered list and is used when the order of list items matters.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<li>` tag used for?

The `<li>` tag defines individual list items and must be a direct child of `<ul>`, `<ol>`, or `<menu>`; preferably `<ul>` or `<ol>`.

[#HTML]() [#fundamentals]() [#list]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What element is used to create links?

The anchor element, `<a></a>`.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute must be set on the anchor element's opening tag to ensure that it functions as a link?

The `href` attribute.

Example:
`<a href="www.rainbow.com">Checkout rainbow.com!</a>`

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## Can anchor tags be used only to link to web pages?

No, anchor tags can be used to link to any resource with a url address; images, pdfs, videos, and even telephone numbers, email addresses, SMS text messages, and executable code.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute is used to specify where, or how, an anchor tag link will be opened?

The `target` attribute specifies whether a clicked anchor tag link will open in the current browser tab, or a new tab (or window, pending user's browser settings).

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is the default behavior of the anchor element's `target` attribute, if unset?

If the `target` attribute is unset, an anchor link will open in the current browser tab.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## How can anchor links be set to open in a new browser tab (or windows, pending user settings), rather than current tab?

By setting the anchor link's target attribute to "\_blank":
`<a href="https://www.rainbows.com" target="_blank">`

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute must be set on the `<anchor>` element if you are setting the link to open in a new tab via `target="_blank`?

If you use `target="_blank"` to make links open in new tabs, you must also set the `rel` relationship attribute to `"noopener noreffer"`

Example: `<a href="https://www.rainbows.com" target="_blank" rel="noopener noreffer">`

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## Why must you set the relationship attribute to `rel="noopener noreffer"` on an anchor tag link whenever using `target="_blank"` so that it opens in a new tab?

Because not doing so can introduces security and privacy vulnerabilities.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is the purpose of the `<a>` element’s `rel=""` attribute?

%
The rel attribute describes the relationship and permissions between the current page and the linked document.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What does `rel="noopener"` do when used in an `<a>` element?

%
rel="noopener" prevents a newly opened page from accessing or manipulating the original page via JavaScript.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What does `rel="noreferrer"` do?

%
rel="noreferrer" prevents the new page from seeing the referrer URL and also blocks access to the original page.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How are the HTML relationship (`rel`) attribute values noopener and noreferrer related?

%
noreferrer includes the security behavior of noopener and also adds referrer privacy.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is tabnabbing?

%
Tabnabbing is an attack where a page opened in a new tab changes the original page to a malicious one.

[#HTML]() [#fundamentals]() [#links]() [#security]()

<!------------------------------------------------------------------------------------------- -->

## What is an absolute HTML link?

An absolute HTML link points to a resource using a full URL (protocol + domain) and resolves independently of the current page's URL or location.

Example: `<a href="https://example.com/pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What is a relative, or document-relative HTML link??

A relative a.k.a. document-relative HTML link points to a resource in terms relative to the current resource's location using a path that starts with `./`, `../`, or simple the path without url protocol and domain.

Example: `<a href="./pages/site_glossary.html">` or `<a href="pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What is a root-relative HTML link?

A root-relative HTML link points to a resource in terms relative to the root directory of the current website (the 'domain root'), and always starts with `/`.

Example: `<a href="/pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What does the leading / mean in a root-relative link?

%
The leading `/` represents the the domain root, or root directory of a website.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should relative, or document-relative, links be used?

%
Use document-relative links for navigating to resources closely related to the current file, such as images and references such as footnotes.

Example: Linking to an image via `<img src="">` or

```
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should root-relative links be used?

%
Use root-relative links for navigating to internal pages not closely related to the current document, such as unique webapp feature or deeply nested page.

Example: Wikipedia has many deeply nested pages and often uses root-relative links.
[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should absolute links be used?

%
Use absolute links when linking to external sites and resources and whenever a fully qualified URL is required.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should relative links be used for HTML anchor tags?

%
When linking to internal pages within the same site.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What attributes should always be set on `<img>` tags to prevent content from shifting as it loads?

%
The `height` and `width` attributes.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## What attribute must always be set on `img` tags for accessibility?

%
The `alt` attribute should always be set so that screen readers can describe images to visually impaired users.

Example: `<img src="./assets/images/meteor_hitting_orphanage.jpg" alt="A wood-framed orphanage bursting into splinters and flame at the moment of a meteor's impact">

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## What are the four main image formats used on the web?

%
The four main image formats used on the web are `JPG`, `GIF`, `PNG`, and `SVG`.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## What type of image is the JPG format designed for?

%
The JPG format is designed for photos and other images with large color palettes and gradients.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## What type of images is the GIF format designed for?

%
The GIF format is designed for simple animations with limited color palettes.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## What type of images is the PNG format designed for, and when should it be used?

%
The PNG format is designed for images that need transparency, and should be used for icons, logos, and diagrams.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]()

<!------------------------------------------------------------------------------------------- -->

## ## What type of images is the SVG format designed for, and when should they be used?

%
The SVG format is designed for icons, logos, and diagrams and should be used whenever you need an image scale without losing quality.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]() [#svg]()

<!------------------------------------------------------------------------------------------- -->

## When should SVGs be avoided in favor of PNGs?

%
SVG image format should be avoided for any text-heavy images.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#imagetag]() [#png]()

<!------------------------------------------------------------------------------------------- -->

## When is it appropriate to use the HTML `<figure>` element?

%
The `figure` element is for diagrams and figures that explain something.
[#HTML]() [#fundamentals]() [#figure]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<figcaption>` element for?

%
The `<figcaption>` element is for captions to any diagrams or expanatory images in a `<figure>` tag.
[#HTML]() [#fundamentals]() [#figure]() [#figcaption]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML entities?

%
Entities are text codes used for representing characters the browser can't interpret HTML content.

For Example:
The browser cannot interpret characters `<`, `>`, and `&` because it reads them as HTML syntax.
So if you need to make a web page with a sentencethat uses the less than (`<`), greater than (`>`), or ampersand (`&`) characters, you have to describe those characters to the browser as HTML entities.

```
<p>In this parapgraph I will talk about the characters used to signify 'less than' and 'greater than'; &<; and &>; </p>
```

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are two common reasons to use HTML entities?

%
To escape reserved characters (like <, >, &) and to represent special or hard-to-type characters (especially invisible ones like &nbsp;).

[#HTML]() [#fundamentals]() [#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What are the three HTML reserved characters?

%
The left arrow (<), right arrow(>), and ampersand (&) characters are all reserved in HTML and cannot be used as plain text characters.

[#HTML]() [#fundamentals]()[#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of HTML entities?

%
HTML entities begin with an ampersand (`&`) and are closed with a semicolon (`;`).

[#HTML]() [#fundamentals]() [#entity]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Demonstrate the HTML entity syntax needed to put the `<`, `>`, and `&` characters into an HTML documents content.

%
`&lt;`, `&gt;`, and `&amp;`.

To display the right arrow or 'greater than' character `>`: `&gt;`.
To display the left arrow or 'less than' character `<`: `&lt;`.
To display the ampersand character `&`: `&amp;`.

[#HTML]() [#fundamentals]() [#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What is the best practice to avoid images becoming low-res or 'blurry' on high-DPI (retina) screens?

%
Use SVG images whenever possible, and make raster images responsive with attribute `srcset` so browsers on high-DPI displays can choose higher-res files.

[#<img>]() [#HTML]() [#fundamentals]() [#images]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## How do you set the default language for a web page?

%
You can set the default language of a web page via the `<html>` element's `lang`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->
