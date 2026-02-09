# What does CSS stand for?

Cascading Style Sheets

<!------------------------------------------------------------------------------------------- -->

## What are CSS rules?

Rules are the building blocks of a CSS stylesheet

## What is the syntax breakdown of a CSS rule?

Syntactically, A CSS rule consists of a selector and a curly-bracket delimited block of property-value declarations separated by semicolon.

Example:
![image](./css_rule.jpg)
(_each prop-value pair is a declaration_)
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's a CSS selector?

CSS CSS selectors 'select' the HTML elements that a CSS rule applies to.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's the syntax for the CSS universal selector, and what does it do?

An asterisk is the CSS universal selector and it selects _all_ elements in the document.

```css
* {
  color: purple;
}
```

_Makes all elements purple._
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What does the CSS type selector do, and how is it used?

The CSS type selector selects by HTML element, it's used by prepending the declaration block with any HTML element, sans tags.

```css
div {
  color: white;
}
```

_Makes text content of all `<div>`'s white._
[#CSS]() [#CSS selectors]()

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

_Makes all text content of all elements with attribute_ `class="alert-text"` red.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What do CSS ID CSS selectors do, and how are they applied?

Like class CSS selectors, ID CSS selectors target elements by their `id=""` attribute values;
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
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## When should you use ID CSS selectors?

Rarely if ever.
Use ID CSS selectors for links redirecting to sections of current page, or for finely targeting specificity.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## Can CSS class or ID CSS selectors start with number?

No.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## How can you group like CSS CSS selectors together, to cut down on repetition?

By separating each selector with a comma.

```css
.read,
.unread {
  color: white;
  background-color: black;
}
```

_Selects HTML elements with class values `class="read"` and `class="unread"` for white text and black background._
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## How can you chain CSS selectors together?

By appending the CSS selectors to each other, without spaces.

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

```css
.subsection.header {
  color: red;
}
```

_Selects HTML elements with class values `class="read"` and `class="unread"` for white text and black background._
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## Does chaining different CSS selectors together work?

Yes, chain different CSS selectors works, aside from type CSS selectors.

_Note_: An element can only be one type, hence no type selector chaining.

```css
.subsection.header {
  /* targets elements with subsection and header classes. */
  color: red;
}

.subsection#preview {
  /* targets elements with class of subsection and id of preview. */
  color: blue;
}
```

[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## When is it best to use grouping, versus chaining of CSS selectors?

Grouping is best used for avoiding repetition by grouping _similar_ elements with identical styles.
Chaining is best used for more narrowly or specifically targeting elements. (note- is 'specificially' poor word choice on account of specificity).
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## How many types of CSS combinator CSS selectors are there?

Four.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What does the descendant combinator selector do, and syntactically, how is it used?

Selects _descendant_ elements by parent-child relationships, no matter how nested, by separating space-separating CSS selectors>

```css
.ancestor .contents {
  /* some declarations */
}
```

[#CSS]() [#CSS CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between the CSS property values `color` and `background-color`?

`color` styles an elements _text color_; `background-color` styles background color.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What are the four formats for specifying color values for CSS properties?

Hexadecimal(a), HSL(a), RGB(a), and keywords.

_Note_: the (a), or _alpha_ channel, represents transparency/opacity.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## Why is it best practice to include a prioritized _list_ of values for the font-family property?

Because fonts can fail, so we specify backups.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## How can you adjust images sizes with CSS, while ensuring changes are proportional?

By setting `height: auto` and adjusting via width.

```css
img {
  height: auto;
  width: 500px;
}
```

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## How do you link an HTML document with its CSS stylesheet?

By using a void `<link>` in the `<head>` element, with the attributes `relationship` and `href` set to `"stylesheet"` and `/"path_to_stylesheet.css"`.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's embedded or internal CSS, and when is it best used?

Adding the CSS for a page to its `<head>` element in a `<style>` tag; largely discouraged (?).

MAKE CARD _Remember_: Embedded/Internal CSS refers to using the <style> tag in the <head elemen>

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's inline CSS, and when is it best used?

Styling element-by-element, using the HTML `style=""` attribute; best used never, or only in Tailwind style projects.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## When should `class` attributes and selectors be used for styling, in comparison to `id`?

Use `class` for styles that may apply to multiple elements, and `id` for _unique_ elements.

_Remember_: `id` is only for targeting single elements, if you ever find yourself grouping `id` selectors, don't.

[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What is the rule of when to use the `id` attribute & selector for styling?

Rarely if ever, only use `id` attributes & selectors for a style unique to a single element.

[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## Two elements need the same style. Best practice?

Class composition- create a reusable `class` attribute value and apply it to both elements.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's the text-align property value for?

Setting horizontal text alignment within an element.

<!------------------------------------------------------------------------------------------- -->

## What does the font-weight property value set?

The boldness or weight of text.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What is the Cascade?

How CSS resolves conflicting declarations.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Do the universal or various combinator symbols affect specificity (`*`, and `+`, `~`, `>` ` `)?

No, symbols the universal and combinator selectors do not themselvs have any specificity.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is CSS specificity?

How CSS resolves conflicting styles; A CSS declaration that is more specific will take precedence over less specific ones.

Alternately, a system of 'weights' that prioritizes application of CSS style rules.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Why does CSS use the specificity system?

To resolve conflicts.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Which of the following has the most specificity?

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## When is CSS specificity taken into account?

Only when an element has multiple conflicting declarations targeting it.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What's the hierarchy of specificity between external, internal, and inline styles?

Inline > internal > external.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is the hierarchy of CSS selectors?

ID > class > type

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is inheritance in CSS?

How elements inherit styles from parent elements, even if not directly or explicitly targeted.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Are all CSS styles/properties inheritable?

No, only certain CSS properties will style elements through inheritance, everything else must be directly selected for.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What's a good rule of thumb for whether a property is inherited?

Typography-based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## How can you find whether a CSS property is inheritable or not?

By checking the "formal definition" in the MDN's reference article on that property, if present.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Which of the following conflicting styles would prevail, and why?

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

%
The `.child` selector's `blue` would prevail, because _directly_ targeted styles always prevail over _inherited_ styles.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity, and why?

```css
.subsection {.      /* Single class selector */
  background-color: yellow;
  color: blue;
}

div p span {        /* Three type selectors */
 color: red;
}
```

%

The rule with the class selector, because class selectors have a higher specificity than type selectors, and three type selectors are the same specficity as one (!!!???? CORRECT?)

[#CSS]() [#specificity]() [#]()

<!------------------------------------------------------------------------------------------- -->

<!-- Note: Following cards tagged with [#The CSS Cascade]() are a deeper dive into the cascade from the link https://2019.wattenberger.com/blog/css-cascade#specificity reccomended in Odin Project Foundations  -->

<!------------------------------------------------------------------------------------------- -->

## How many tiers, or levels, does the Cascade have ?

Four

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the Cascade, what are the four tiers by which it is evaluated, in order?

Importance, Origin, Specificity, and Position.

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the first tier of the Cascade, Importance, how is it evaluated, in order?

In order: Active transitions, !important, active animations, and 'normal' (everything else).

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## Concerning the first tier of the Cascade, Importance, what's the difference between an active transition and an active animation?

Active transitions refer to user-triggered changes to CSS like `:hover`; active animations use the CSS `animation` property (usually with keyframes).

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the second tier of the Cascade, Origin, how is it evaluated, in order?

In order, by where the rule is defined: website, user, browser.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the third tier of the Cascade, Specificity, how is it evaluated, in order?

Inline styles
`@layer` order
ID selectors
Class, pseudo-class, and other attribute selectors
Type/psuedo-element selectors.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the fourth tier of the Cascade, Order, how is it evaluated?

By _order_ of appearance in the stylesheet (lowest/latest to highest/oldest).

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->
