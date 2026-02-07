## What are CSS rules?

Rules are the building blocks of a CSS stylesheet

## What is the syntax breakdown of a CSS rule?

Syntactically, A CSS rule consists of a selector and a curly-bracket delimited block of property-value declarations separated by semicolon.

Example:
![image](./css_rule.jpg)
(_each prop-value pair is a declaration_)

<!------------------------------------------------------------------------------------------- -->

## What's a CSS selector?

CSS selectors 'select' the HTML elements that a CSS rule applies to.

<!------------------------------------------------------------------------------------------- -->

## What's the syntax for the CSS universal selector, and what does it do?

An asterisk is the CSS universal selector and it selects _all_ elements in the document.

```css
* {
  color: purple;
}
```

_Makes all elements purple._

<!------------------------------------------------------------------------------------------- -->

## What does the CSS type selector do, and how is it used?

The CSS type selector selects by HTML element, it's used by prepending the declaration block with any HTML element, sans tags.

```css
div {
  color: white;
}
```

_Makes text content of all `<div>`'s white._

<!------------------------------------------------------------------------------------------- -->

## What does the CSS class selector do, and how is it applied

Targets elements by their `class=""` attribute values;
Apply by prepending each class value with a period.

_case sensitive_.
Example:

```html
<!-- index.html -->
<div class="alert-text">Please agree to our terms of service.</div>
```

```css
/* styles.css */
.alert-text {
  color: red;
}
```

_Red-ifies text content of all elements with attribute_ `class="alert-text"`.

<!------------------------------------------------------------------------------------------- -->

## What do CSS ID selectors do, and how are they applied?

Like class selectors, ID selectors target elements by their `id=""` attribute values;
Apply by prepending id value with a hashtag.

_case sensitive_.

Example:

```html
<!-- index.html -->
<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */
#title {
  background-color: blue;
}
```

_Makes background color blue of all element with id attribute value of_ `id="title"`.

<!------------------------------------------------------------------------------------------- -->

## When should you use ID selectors?

Rarely if ever.
Use ID selectors for links redirecting to sections of current page, or for finely targeting specificity.

<!------------------------------------------------------------------------------------------- -->

## Can CSS class or ID selectors start with number?

No.

<!------------------------------------------------------------------------------------------- -->

## How can you group like CSS selectors together, to cut down on repetition?

By separating each selector with a comma.

```css
.read,
.unread {
  color: white;
  background-color: black;
}
```

_Selects HTML elements with class values `class="read"` and `class="unread"` for white text and black background._

<!------------------------------------------------------------------------------------------- -->
