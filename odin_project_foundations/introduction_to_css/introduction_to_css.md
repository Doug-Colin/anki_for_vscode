## What does CSS stand for?

<!-- notecardId: 1770760340926 -->

Cascading Style Sheets

<!------------------------------------------------------------------------------------------- -->

## What are CSS rules?

<!-- notecardId: 1770760340928 -->

Rules are the building blocks of a CSS stylesheet

## What is the syntax breakdown of a CSS rule?

<!-- notecardId: 1770760340930 -->

Syntactically, A CSS rule consists of a selector and a curly-bracket delimited block of property-value declarations separated by semicolon.

Example:
![image](./css_rule.jpg)
(_each prop-value pair is a declaration_)
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's a CSS selector?

<!-- notecardId: 1770760340931 -->

CSS CSS selectors 'select' the HTML elements that a CSS rule applies to.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's the syntax for the CSS universal selector, and what does it do?

<!-- notecardId: 1770760340932 -->

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

<!-- notecardId: 1770760340933 -->

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

<!-- notecardId: 1770760340934 -->

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

<!-- notecardId: 1770760340935 -->

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

<!-- notecardId: 1770760340936 -->

Rarely if ever.
Use ID CSS selectors for links redirecting to sections of current page, or for finely targeting specificity.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## Can CSS class or ID CSS selectors start with number?

<!-- notecardId: 1770760340937 -->

No.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## How can you group like CSS CSS selectors together, to cut down on repetition?

<!-- notecardId: 1770760340938 -->

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

<!-- notecardId: 1770760340939 -->

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

<!-- notecardId: 1770760340940 -->

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

<!-- notecardId: 1770760340941 -->

Grouping is best used for avoiding repetition by grouping _similar_ elements with identical styles.
Chaining is best used for more narrowly or specifically targeting elements. (note- is 'specificially' poor word choice on account of specificity).
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## How many types of CSS combinator CSS selectors are there?

<!-- notecardId: 1770760340942 -->

%
Four.
[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What does the descendant combinator selector do, and syntactically, how is it used?

<!-- notecardId: 1770760340943 -->

Selects _descendant_ elements by parent-child relationships, no matter how nested, by separating space-separating CSS selectors>

```css
.ancestor .contents {
  /* some declarations */
}
```

[#CSS]() [#CSS CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between the CSS property values `color` and `background-color`?

<!-- notecardId: 1770760340944 -->

`color` styles an elements _text color_; `background-color` styles background color.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What are the four formats for specifying color values for CSS properties?

<!-- notecardId: 1770760340945 -->

Hexadecimal(a), HSL(a), RGB(a), and keywords.

_Note_: the (a), or _alpha_ channel, represents transparency/opacity.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## Why is it best practice to include a prioritized _list_ of values for the font-family property?

<!-- notecardId: 1770760340946 -->

Because fonts can fail, so we specify backups.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## How can you adjust images sizes with CSS, while ensuring changes are proportional?

<!-- notecardId: 1770760340947 -->

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

<!-- notecardId: 1770760340948 -->

By using a void `<link>` in the `<head>` element, with the attributes `relationship` and `href` set to `"stylesheet"` and `/"path_to_stylesheet.css"`.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's embedded or internal CSS, and when is it best used?

<!-- notecardId: 1770760340949 -->

Adding the CSS for a page to its `<head>` element in a `<style>` tag; largely discouraged (?).

MAKE CARD _Remember_: Embedded/Internal CSS refers to using the <style> tag in the <head elemen>

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's inline CSS, and when is it best used?

<!-- notecardId: 1770760340950 -->

Styling element-by-element, using the HTML `style=""` attribute; best used never, or only in Tailwind style projects.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## When should `class` attributes and selectors be used for styling, in comparison to `id`?

<!-- notecardId: 1770760340951 -->

Use `class` for styles that may apply to multiple elements, and `id` for _unique_ elements.

_Remember_: `id` is only for targeting single elements, if you ever find yourself grouping `id` selectors, don't.

[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## What is the rule of when to use the `id` attribute & selector for styling?

<!-- notecardId: 1770760340952 -->

Rarely if ever, only use `id` attributes & selectors for a style unique to a single element.

[#CSS]() [#CSS selectors]()

<!------------------------------------------------------------------------------------------- -->

## Two elements need the same style. Best practice?

<!-- notecardId: 1770760340953 -->

Class composition- create a reusable `class` attribute value and apply it to both elements.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What's the text-align property value for?

<!-- notecardId: 1770760340954 -->

Setting horizontal text alignment within an element.

<!------------------------------------------------------------------------------------------- -->

## What does the font-weight property value set?

<!-- notecardId: 1770760340955 -->

The boldness or weight of text.

[#CSS]() [#CSS properties]()

<!------------------------------------------------------------------------------------------- -->

## What is the Cascade?

<!-- notecardId: 1770760340956 -->

How CSS resolves conflicting declarations.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is CSS specificity?

<!-- notecardId: 1770760340957 -->

How CSS resolves conflicting styles; A CSS declaration that is more specific will take precedence over less specific ones.

Alternately, a system of 'weights' that prioritizes application of CSS style rules.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Why does CSS use the specificity system?

<!-- notecardId: 1770760340958 -->

To resolve conflicts.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## When is CSS specificity taken into account?

<!-- notecardId: 1770760340959 -->

Only when an element has multiple conflicting declarations targeting it.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What's the hierarchy of specificity between external, internal, and inline styles?

<!-- notecardId: 1770760340960 -->

Inline > internal > external.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is the hierarchy of CSS selectors?

<!-- notecardId: 1770760340961 -->

ID > class > type

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What is inheritance in CSS?

<!-- notecardId: 1770760340962 -->

How elements inherit styles from parent elements, even if not directly or explicitly targeted.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Are all CSS styles/properties inheritable?

<!-- notecardId: 1770760340963 -->

No, only certain CSS properties will style elements through inheritance, everything else must be directly selected for.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## What's a good rule of thumb for whether a property is inherited?

<!-- notecardId: 1770760340964 -->

Typography-based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## How can you find whether a CSS property is inheritable or not?

<!-- notecardId: 1770760340965 -->

By checking the "formal definition" in the MDN's reference article on that property, if present.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity, and why?

<!-- notecardId: 1770760340966 -->

%

The rule with the class selector.

```css
.subsection {
  /* Single class selector */
  background-color: yellow;
  color: blue;
}

div p span {
  /* Three type selectors */
  color: red;
}
```

**Why:** Specificity uses weighted categories: `inline` > `ID` > `class` > `type`. Categories don't add across tiers - 99 classes can't beat 1 ID, just like 99 type selectors can't beat 1 class.

[#CSS]() [#specificity]() [#]()

<!------------------------------------------------------------------------------------------- -->

<!-- Note: Following cards tagged with [#The CSS Cascade]() are a deeper dive into the cascade from the link https://2019.wattenberger.com/blog/css-cascade#specificity reccomended in Odin Project Foundations  -->

<!------------------------------------------------------------------------------------------- -->

## How many tiers, or levels, does the Cascade have ?

<!-- notecardId: 1770760340967 -->

Four

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the Cascade, what are the four tiers by which it is evaluated, in order?

<!-- notecardId: 1770760340968 -->

Importance, Origin, Specificity, and Position.

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the first tier of the Cascade, Importance, how is it evaluated, in order?

<!-- notecardId: 1770760340969 -->

In order: Active transitions, !important, active animations, and 'normal' (everything else).

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## Concerning the first tier of the Cascade, Importance, what's the difference between an active transition and an active animation?

<!-- notecardId: 1770760340970 -->

Active transitions refer to user-triggered changes to CSS like `:hover`; active animations use the CSS `animation` property (usually with keyframes).

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the second tier of the Cascade, Origin, how is it evaluated, in order?

<!-- notecardId: 1770760340971 -->

In order, by where the rule is defined: website, user, browser.

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the third tier of the Cascade, Specificity, how is it evaluated, in order?

<!-- notecardId: 1770760340972 -->

Inline styles
`@layer` order
ID selectors
Class, pseudo-class, and other attribute selectors
Type/psuedo-element selectors.

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## When a CSS rule enters the fourth tier of the Cascade, Order, how is it evaluated?

<!-- notecardId: 1770760340973 -->

By _order_ of appearance in the stylesheet (lowest/latest to highest/oldest).

[#CSS]() [#specificity]() [#The CSS Cascade]()

<!------------------------------------------------------------------------------------------- -->

## What does CSS specificity notation `(0,1,2,3)` represent?

<!-- notecardId: 1770760340974 -->

Four categories counted left-to-right by priority:

1. **Inline styles** (0)
2. **ID selectors** (1)
3. **Class selectors** (2)
4. **Type selectors** (3)

_Remember_: CSS rule specificity weights are _Not compared like number values_ they're compared like _version numbers_.
`(0,1,4,3)` beats `(0,1,4,2)`
`(0,1,0,0)` beats `(0,0,99,99)`

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## How do you compare two specificity values to determine which is higher?

<!-- notecardId: 1770760340975 -->

Like software _version numbers_, left-to-right, category by category.
The first non-equal category wins.

**Example:**
`(0,0,3,2)` vs `(0,0,1,10)` → First wins (3 classes > 1 class, types ignored)
`(0,1,0,0)` vs `(0,0,99,99)` → First wins (1 ID > any classes/types)

**Key**: Higher categories always win regardless of lower category counts - you can't "add up" to the next tier.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## How do CSS pseudo-classes and pseudo-elements count in specificity?

<!-- notecardId: 1770760340976 -->

Pseudo-classes count as class selectors and pseudo-elements count as type selectors.

<!------------------------------------------------------------------------------------------- -->

## Is a rule's specificity affected by whether its selectors are chained, versus combined?

<!-- notecardId: 1770760340977 -->

No; chaining or combining selectors does not affect specificity; its determined by the _amount_ of each selector category.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## Do the universal symbol or various combinator symbols affect specificity (`*`, and `+`, `~`, `>` and space)?

<!-- notecardId: 1770760340978 -->

%
No, symbols the universal and combinator selectors do not themselve have any specificity.

[#CSS]() [#specificity]()

<!------------------------------------------------------------------------------------------- -->

## If a parent element is styled `color: red;` using an ID selector, and a child element is styled `color: blue;` using a class selector, which one prevails?

<!-- notecardId: 1770761369561 -->

%
The `.child` selector's `blue` would prevail, because _directly applied_ styles always prevail over _inherited_ styles.

[#CSS]() [#specificity]()
