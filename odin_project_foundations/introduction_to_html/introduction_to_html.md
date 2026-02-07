# introduction_to_html

## What does HTML stand for?

<!-- notecardId: 1770140554496 -->

Hyper Text Markup Language

[#HTML]() [#fundamentals]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTML used for?

<!-- notecardId: 1770140554497 -->

HTML is used to define the structure and content of webpages.

[#HTML]() [#fundamentals]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML tags?

<!-- notecardId: 1770140554498 -->

%
The markup syntax delimiting html elements.

Examples:
`<head></head>`
`<p></p>`
`<span></span>`

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is semantic HTML?

<!-- notecardId: 1770140554499 -->

Using HTML tags that describe content's role or purpose in the document's structure, instead of generic tags like `<div>` or `<span>`.

_Remember: semantic HTML a the foundation of HTML best-practices._

[#HTML]() [#fundamentals]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## Do all HTML elements have opening and closing tags?

<!-- notecardId: 1770140554500 -->

No, some elements only have opening tags, such as `<br>` and `<img>`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML void elements?

<!-- notecardId: 1770140554501 -->

Elements without closing tags.

Example: `<br>` and `<img>`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Why are HTML elements without closing tags referred to as 'void' elements?

<!-- notecardId: 1770140554502 -->

Because the tags are void of any content.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Should void elements or 'self closing' tags like `<br>` and. `<img>` be written with a forward slash, for example `<br />` or `<img />`?

<!-- notecardId: 1770140554503 -->

No, the latest HTML spec discourages using forward slashes in void elements.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What should the HTML file containing a web site's home page be named?

<!-- notecardId: 1770140554504 -->

index.html

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What does every HTML page start with?

<!-- notecardId: 1770140554505 -->

A DOCTYPE declaration.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What's the purpose of the DOCTYPE declaration at the beginning of an HTML file?

<!-- notecardId: 1770140554506 -->

To tell the browser what version of HTML it should use to render the web page.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What's the latest version of HTML?

<!-- notecardId: 1770140554507 -->

HTML5.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the doctype for HTML5 documents?

<!-- notecardId: 1770140554508 -->

`<!DOCTYPE html>`

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `lang` attribute used for?

<!-- notecardId: 1770140554509 -->

Tha `lang` attribute specifies the language of an element's text content.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<head>` element?

<!-- notecardId: 1770140554510 -->

The `<head>` element contains metadata about a webpage.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## How can you make sure that your HTML markup is correct and without error?

<!-- notecardId: 1770140554511 -->

%
By passing it through an HTML Validator.

Example:
The W3 markup validation service.  
https://validator.w3.org/#validate_by_input

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the HTML `<body>` element?

<!-- notecardId: 1770140554512 -->

The parent element for all page content.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are the HTML heading elements?

<!-- notecardId: 1770140554513 -->

Heading elements signify headings by displaying content larger and bolder.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## How many HTML heading elements are there?

<!-- notecardId: 1770140554514 -->

Six, `<h1>` through `<h6>`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax for writing a comment in html?

<!-- notecardId: 1770140554515 -->

`<!-- comment text goes here -->`

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the `<strong>` tag?

<!-- notecardId: 1770140554516 -->

%
Use <strong> for warnings and critical emphasis; use CSS when in doubt.

For example:
`<strong>Warning:</strong> <span>Cannot be undone.<span>`

_Remember: Screen readers announce anything within a `<strong>` tag with emphasis._

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the bold tag, `<b>`?

<!-- notecardId: 1770140554517 -->

%
For text that should be visually bold for screen readers, without voice emphasis (use `<em>`) or critical significance (use `<strong>`).

Example:
`<b>Product name:</b> Widget 3000` or keywords in a document.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## When should you use the emphasis tag, `<em>`?

<!-- notecardId: 1770140554518 -->

%
Use the `<em>` tag for any text that you'd emphasize when reading aloud, as it changes how screen readers announce it.

For Example: I <em>really</em> need this.

_Note_: Screen readers use vocal stress; typically renders as italic, though changeable by CSS.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between `<strong>` and `<b>`?

<!-- notecardId: 1770140554519 -->

%
The `<strong>` tag indicates importance or urgency to devices and systems.
The `<b>` tag is for visual styling, not importance.

Use <strong> for warnings and urgency, <b> for visual offset only.

_Note_: Many developers just use CSS for everything boldface and use `<strong>` only when importance matters.

[#HTML]() [#fundamentals]() [#semantic html]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<ul>` tag used for?

<!-- notecardId: 1770140554520 -->

%
The `<ul>` tag defines an unordered list and is used when the sequence of list items doesn't matter.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<ol>` tag used for?

<!-- notecardId: 1770140554521 -->

The `<ol>` tag defines an ordered list and is used when the order of list items matters.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<li>` tag used for?

<!-- notecardId: 1770140554522 -->

The `<li>` tag defines individual list items and must be a direct child of `<ul>`, `<ol>`, or `<menu>`; preferably `<ul>` or `<ol>`.

[#HTML]() [#fundamentals]() [#list]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What element is used to create links?

<!-- notecardId: 1770140554523 -->

The anchor element, `<a></a>`.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute must be set on the `<a>` element's opening tag to ensure that it functions as a link?

<!-- notecardId: 1770140554524 -->

The `href` attribute.

Example:
`<a href="www.rainbow.com">Checkout rainbow.com!</a>`

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## Can anchor tags be used only to link to web pages?

<!-- notecardId: 1770140554525 -->

No, anchor tags can be used to link to any resource with a url address; images, pdfs, videos, and even telephone numbers, email addresses, SMS text messages, and executable code.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute is used to specify where, or how, an anchor tag link will be opened?

<!-- notecardId: 1770140554526 -->

The `target` attribute specifies whether a clicked anchor tag link will open in the current browser tab, or a new tab (or window, pending user's browser settings).

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is the default behavior of the anchor element's `target` attribute, if unset?

<!-- notecardId: 1770140554527 -->

If the `target` attribute is unset, an anchor link will open in the current browser tab.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## How can anchor links be set to open in a new browser tab (or windows, pending user settings), rather than current tab?

<!-- notecardId: 1770140554528 -->

By setting attributes `target` to `_blank` and `rel` to `noreferrer`:

Example:
`<a href="https://www.rainbows.com" target="_blank" rel="noreferrer">`

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What attribute values must be set on the `<a>` element if you're setting the link to open in a new tab/page via `target="_blank`?

<!-- notecardId: 1770140554529 -->

The `rel=""` attribute must be set to values `rel="noopener noreferrer"`.

Example: `<a href="https://www.rainbows.com" target="_blank" rel="noopener noreferrer">`
_Note: Today browsers mostly automate hits security behavior, but it's considered best practice to set both attributes anyway._

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## Why must you set the relationship attribute to `rel="noopener noreferrer"` or simply `rel="noreferrer"` on an anchor tag link whenever using `target="_blank"` so that it opens in a new tab?

<!-- notecardId: 1770140554530 -->

Because not doing so can introduces security and privacy vulnerabilities.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is the purpose of the `rel=""` attribute?

<!-- notecardId: 1770140554531 -->

%
Defines relationships between current and linked resources and controls security and privacy.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What does `rel="noopener"` do when used in an `<a>` element?

<!-- notecardId: 1770140554532 -->

%
Prevents pages opened in new tabs/windows from accessing/manipulating the original via the JS `window.opener` object.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What does `rel="noreferrer"` do?

<!-- notecardId: 1770140554533 -->

%
Hides the user's origin from a newly opened page by preventing the browser from sending the `Referer` HTTP header; also includes `noopener` protection.

_Note_: Yes, the HTTP header `Referer` is misspelled, a long-preserved typo in the spec.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## How are the HTML relationship (`rel`) attribute values noopener and noreferrer related?

<!-- notecardId: 1770140554534 -->

%
Using `noreferrer` includes the `noopener`'s security behavior _and_ adds referrer privacy.

[#HTML]() [#fundamentals]() [#links]()

<!------------------------------------------------------------------------------------------- -->

## What is tabnabbing?

<!-- notecardId: 1770140554535 -->

%
An attack where a page opened in a new tab/window redirects the referring page to a malicious one.

Example: A link that opens in a new page checks if you're coming from citibank.com and uses the JS `window.opener` object to redirect the referring page to citibank.co.ru for phishing.

[#HTML]() [#fundamentals]() [#links]() [#security]()

<!------------------------------------------------------------------------------------------- -->

## What is an absolute HTML link?

<!-- notecardId: 1770140554536 -->

A link that uses a full URL and resolves independently of current URL/path.

Example: `<a href="https://example.com/pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What is a relative, or document-relative HTML link??

<!-- notecardId: 1770140554537 -->

A relative a.k.a. document-relative HTML link points to a resource in terms relative to the current resource's location using a path that starts with `./`, `../`, or simple the path without url protocol and domain.

Example: `<a href="./pages/site_glossary.html">` or `<a href="pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What is a root-relative HTML link?

<!-- notecardId: 1770140554538 -->

A root-relative HTML link points to a resource in terms relative to the root directory of the current website (the 'domain root'), and always starts with `/`.

Example: `<a href="/pages/site_glossary.html">`

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What does the leading / mean in a root-relative link?

<!-- notecardId: 1770140554539 -->

%
The leading `/` represents the the domain root, or root directory of a website.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should relative, or document-relative, paths be used?

<!-- notecardId: 1770140554540 -->

%
Use document-relative paths for navigating to resources closely related to the current file, such as images and references such as footnotes.

Example: An `<img src="">` path:

```html
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset"
  />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should root-relative links be used?

<!-- notecardId: 1770140554541 -->

%
Use root-relative links for navigating to internal pages not closely related to the current document, such as unique webapp feature or deeply nested page.

Example: Wikipedia has many deeply nested pages and often uses root-relative links.
[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should absolute links be used?

<!-- notecardId: 1770140554542 -->

%
Use absolute links when linking to external sites and resources and whenever a fully qualified URL is required.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## When should relative links be used for HTML anchor tags?

<!-- notecardId: 1770140554543 -->

%
When linking to internal pages within the same site.

[#HTML]() [#fundamentals]() [#links]() [#paths]()

<!------------------------------------------------------------------------------------------- -->

## What attributes should always be set on `<img>` tags to prevent content from shifting as it loads?

<!-- notecardId: 1770140554544 -->

%
The `height` and `width` attributes.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## What attribute must always be set on `img` tags for accessibility, and why?

<!-- notecardId: 1770140554545 -->

%
The `alt` attribute must always be set, because that's how screen readers describe images to the visually impaired.

Example:

```
<img src="./assets/images/meteor_hitting_orphanage.jpg" alt="A wood-framed orphanage bursting into splinters and flame at the moment of a meteor's impact">
```

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## What are the four main image formats used on the web?

<!-- notecardId: 1770140554546 -->

%
The four main image formats used on the web are `JPG`, `GIF`, `PNG`, and `SVG`.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## What type of image is the JPG format designed for?

<!-- notecardId: 1770140554547 -->

%
The JPG format is designed for photos and other images with large color palettes and gradients.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## What type of images is the GIF format designed for?

<!-- notecardId: 1770140554548 -->

%
The GIF format is designed for simple animations with limited color palettes.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## What type of images is the PNG format designed for, and when should it be used?

<!-- notecardId: 1770140554549 -->

%
The PNG format is designed for images that need transparency, and should be used for icons, logos, and diagrams.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## ## What type of images is the SVG format designed for, and when should they be used?

<!-- notecardId: 1770140554550 -->

%
SVG is designed for icons, logos, and diagrams; Use when needing image quality while scaling.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]() [#svg]()

<!------------------------------------------------------------------------------------------- -->

## When should SVGs be avoided in favor of PNGs?

<!-- notecardId: 1770140554551 -->

%
SVG image format should be avoided for any text-heavy images.

[#HTML]() [#fundamentals]() [#images]() [#<img>]() [#image tag]() [#png]()

<!------------------------------------------------------------------------------------------- -->

## When is it appropriate to use the HTML `<figure>` element?

<!-- notecardId: 1770140554552 -->

%
Use `<figure>` for explanatory diagrams and images ' _discussed in the page content_.

Good rule: _If an image needs a caption, it's a figure, not decorative_

[#HTML]() [#fundamentals]() [#figure]()

<!------------------------------------------------------------------------------------------- -->

## What is the `<figcaption>` element for?

<!-- notecardId: 1770140554553 -->

%
The `<figcaption>` element is for captioning explanatory diagrams/images in the `<figure>` tag.
[#HTML]() [#fundamentals]() [#figure]() [#figcaption]()

<!------------------------------------------------------------------------------------------- -->

## What are HTML entities?

<!-- notecardId: 1770140554554 -->

%
Text codes used to represent characters the browser can't see as page content.

For Example:
Browsers read `<`, `>`, and `&` chars as HTML syntax, and can't see them as page content.

Example:
HTML markup: `<p>This paragraph discusses the 'less than' and 'greater than' chars &<; and &>; </p>`
Output: <p>This paragraph discusses the 'less than' and 'greater than' chars &<; and &>; </p>

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## What are two common reasons to use HTML entities?

<!-- notecardId: 1770140554555 -->

%
To escape reserved characters and display special ones.

Example:
Escaping reserved characters (`&lt;`, `&gt;`, `&amp;` for <, >, &)
Displaying special characters (`&copy;` for © or `&nbsp;` for non-breaking space)

[#HTML]() [#fundamentals]() [#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What are the three HTML reserved characters?

<!-- notecardId: 1770140554556 -->

%
The left arrow (<), right arrow(>), and ampersand (&) characters are all reserved in HTML and cannot be used as plain text characters.

[#HTML]() [#fundamentals]()[#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What is the syntax of HTML entities?

<!-- notecardId: 1770140554557 -->

%
HTML entities begin with an ampersand (`&`) and are closed with a semicolon (`;`).

[#HTML]() [#fundamentals]() [#entity]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Demonstrate the HTML entity syntax needed to put the `<`, `>`, and `&` characters into an HTML documents content.

<!-- notecardId: 1770140554558 -->

%
`&lt;`, `&gt;`, and `&amp;`.

To display the right arrow or 'greater than' character `>`: `&gt;`.
To display the left arrow or 'less than' character `<`: `&lt;`.
To display the ampersand character `&`: `&amp;`.

[#HTML]() [#fundamentals]() [#entity]() [#reserved]()

<!------------------------------------------------------------------------------------------- -->

## What is the best practice to avoid _raster_ images becoming low-res or 'blurry' on high-DPI (retina) screens?

<!-- notecardId: 1770140554559 -->

%
Use the `srcset` attribute to serve higher-resolution images to high-DPI displays.

Remember: DPI is pixel _density_ (dots per inch); resolution is _total pixel count_.

[#<img>]() [#HTML]() [#fundamentals]() [#images]() [#image tag]()

<!------------------------------------------------------------------------------------------- -->

## How do you set the default language for a web page?

<!-- notecardId: 1770140554560 -->

%
You can set the default language of a web page via the `<html>` element's `lang`.

[#HTML]() [#fundamentals]()

<!------------------------------------------------------------------------------------------- -->

## Are HTML tags and HTML elements the same thing?

<!-- notecardId: 1770427349588 -->

No, tags are only elements' delimiting syntax, whereas elements include the tags _and_ content.

<!------------------------------------------------------------------------------------------- -->

## What are the syntax rules of `class=""` attribute values?

<!-- notecardId: 1770429736387 -->

Always use hyphens, not spaces, to separate multi-word values, as spaces are used to apply multiple class attribute values to elements.

Example:

```html
<strong>
  <span class="alert-text severe-alert">FLASH FLOOD WARNING</span>
</strong>
```

<!------------------------------------------------------------------------------------------- -->

## Can the values of the `class=""` or `id=""` attributes start with numbers?

<!-- notecardId: 1770429736389 -->

No, never start `class=""` or `id=""` attribute values with numbers, because values starting with numbers cant be used as CSS selectors.

<!------------------------------------------------------------------------------------------- -->

## Besides <a> tags, where else is the `rel` attribute commonly used?

On `<link>` elements in the `<head>` (e.g., rel="stylesheet", rel="icon", rel="canonical")

_Remember_: The `rel=""` attribute is not only for for external links (`rel="noreferrer"`) but also internal metadata (`rel="stylesheet"`, `"preload"`) and document (`author`, `next`) links.

<!------------------------------------------------------------------------------------------- -->

## Is the `lang` attribute only used to specify an entire documents language via the `<html>` element?

No, `lang` attribute specifies the language of any element's text content.

_Remember_: It's primarily used in `<html>` but for screen readers, use it for indicating any distinct language changes.

[#HTML]() [#fundamentals]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## When should you use `<em>` vs `<strong>`?

Use `<em>` where you'd naturally stress words when speaking (`My dog <em>loves</em> treats`), and use `<strong>` for important or urgent information (`<strong>Warning: Flash Flood Alert</strong>`).

<!------------------------------------------------------------------------------------------- -->
