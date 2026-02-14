## What is the CSS box model?

The model for how CSS calculates an element's dimensions - how width, height, padding, border, and margin relate to each other.

<!------------------------------------------------------------------------------------------- -->

## From outside to inside, what are the four boxes and properties of the box-model?

Margin, border, padding, content.

<!------------------------------------------------------------------------------------------- -->

## From inside to outside, what is the order of box-model properties?

Content, padding, border, margin

<!------------------------------------------------------------------------------------------- -->

## What does padding do?

Increases the space between the content of a box and its border

<!------------------------------------------------------------------------------------------- -->

## What does border do?

Adds space between the padding directly around a content and the margin at its edges.

<!------------------------------------------------------------------------------------------- -->

## What does margin do?

Increases the space between the borders of adjacent boxes.

<!------------------------------------------------------------------------------------------- -->

## What does the `box-sizing:` CSS property do?

Sets whether an element's `width` and `height` values are the limits of the content box, or the border box.

<!------------------------------------------------------------------------------------------- -->

## What is the `box-sizing:` property's default value?

`content-box`

<!------------------------------------------------------------------------------------------- -->

## How does `box-sizing: content-box` treat an element's `width` and `height` values?

`width` and `height` size the _content_ box, so `padding` and `border` values are _added_ to width x height.

[#CSS]() [#box-sizing]() [#box-model]()

<!------------------------------------------------------------------------------------------- -->

## How does `box-sizing: border-box` treat an element's `width` and `height` values?

`width` and `height` size the _border_ box, so `border` and `padding` values are _subtracted_ from width x height.

<!------------------------------------------------------------------------------------------- -->

## What is the recommended `box-sizing` pattern for modern web development?

Set `border-box` on `html`, then use `inherit` on all elements:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

_Why_:

- `border-box` makes sizing more predictable and development intuitive; `width: 300px` means the element is 300px wide, regardless of padding/border.
- setting the value to `inherit` makes component-level overrides easier; changing a component back to `content-box` affects its descendants too.

[#CSS]() [#box-sizing]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## What is a CSS reset?

A stylesheet that removes or normalizes browser default styles to create a consistent cross-browsers baseline.

<!------------------------------------------------------------------------------------------- -->

## What are the two approaches to CSS reset, and how do they differ?

A _Hard reset_, and _normalize_. _Hard reset_ strips all CSS defaults, whereas a _normalize_ reset only targets inconsistencies.

<!------------------------------------------------------------------------------------------- -->

## What is the current best practice for using CSS resets?

Using a _normalize_ reset rather than an aggressive _hard_ reset.

See normalize.css, and modern-normalize.

<!------------------------------------------------------------------------------------------- -->

## When do margins of adjacent elements collapse into each other, rather than push against each other?

_Vertical_ margins collapse into each other on block elements in _normal flow_.

<!------------------------------------------------------------------------------------------- -->

## Do horizontal margins ever collapse like vertical margins do?

No. Horizontal margins (left/right) _never collapse_ - they always add together when elements are side-by-side, regardless of layout mode (normal flow, flexbox, grid).

<!------------------------------------------------------------------------------------------- -->

## How do two positive, adjoining vertical margin values 'collapse'?

The _larger_ value becomes the space between the two adjoining boxes.

<!------------------------------------------------------------------------------------------- -->

## How do two negative, adjoining vertical margin values 'collapse'?

The _lesser_ value becomes the space between the two adjoining boxes.

<!------------------------------------------------------------------------------------------- -->

## How do negative and positive adjoining vertical margin values 'collapse'?

The negative value is subtracted from the positive value.

<!------------------------------------------------------------------------------------------- -->

## What does the `display` property do?

Sets whether an element is treated as a `block` or `inline` box, along with the layout style of its children (`flow`, `grid`, or `flex`)

<!------------------------------------------------------------------------------------------- -->

## What are the two CSS box types that determine an element's layout behavior?

Block and inline.

<!------------------------------------------------------------------------------------------- -->

## What are the two different types of `display:` CSS property values ?

Outer display types and inner display types.

<!------------------------------------------------------------------------------------------- -->

## What's the difference between the `display` property's 'inner' and 'outer' type values?

Inner type `display` values determine layout behavior for descendants, while outer type `display` values determine how the element itself is laid out in relation to adjacent boxes.

REVISE

<!------------------------------------------------------------------------------------------- -->

## What are the four layout behaviors of `display: block` elements?

1. Start on a new line
2. Respect `width` and `height` properties
3. Push adjacent elements away with padding/margin/border
4. Fill available width by default (100% of container if `width` unspecified)

[#CSS]() [#display]() [#block]()

<!------------------------------------------------------------------------------------------- -->

## What are the layout behaviors of elements that are set or default to `display: inline;`?

Inline elements:

1. Layout in-line
2. Ignores `width`, `height`, and vertical margins
3. Ignores vertical padding/border _for layout_, but renders (overlaps vertical neighbors)
4. Horizontal properties affect layout normally (`padding`, `border`, `margin` push neighbors)

<!------------------------------------------------------------------------------------------- -->

## Does changing the value of the `display` property only affect the layout behavior of an element's children?

No, `display` values can also change the _outer_ display type of a box, affecting how it displays in relation to sibling/adjacent elements

<!------------------------------------------------------------------------------------------- -->

## Is `margin` counted as part of the size of a box?

No, a box's area stops at the border; margin determines the space outside the box.

<!------------------------------------------------------------------------------------------- -->

## How should you set a page to use the alternative `box-sizing` property, `border-box`?

Two CSS rules: setting `box-sizing: border-box;` on the `<html>` element, and setting `box-sizing: inherit;` on universal and universal ::before and ::after pseudo-elements.
**Example**

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

<!------------------------------------------------------------------------------------------- -->

## Do the `content-box` and `border-box` values of `box-sizing` affect margin?

No, margin is always added after calculating the size of the visible box.

<!------------------------------------------------------------------------------------------- -->

## What happens if the `margin`property of a box is set to a negative value?

It pulls instead of pushing.

<!------------------------------------------------------------------------------------------- -->

## What are the properties used for styling borders?

`border-style`, `border-width`, and `border-color`.

<!------------------------------------------------------------------------------------------- -->

## What determines the default `display` value of an element?

Whether it is a structural and container elements (`display: block`) or a text-level element (`inline`).

_Remember_: semantic purpose determines default `display` values.
Block elements were meant to be stacked "chunks of content", while inline elements were meant to flow within text.

<!------------------------------------------------------------------------------------------- -->

## What's the best practice for giving users a larger 'hit' area on a link?

%
Setting the <a> link to `display: inline-block` and increasing padding.

_Why `inline-block`_? Makes padding behave predictably (no overlap rendering) while keeping inline flow.

<!------------------------------------------------------------------------------------------- -->

## How would you use shorthand to set the top and bottom of an element's margin to 10px, but the horizontal margins to 5px?

%

```css
.box {
    margin: 10px 5p;x
}
```

<!------------------------------------------------------------------------------------------- -->

## If _three_ values are declared to set an element's margin, how does the shorthand evaluate?

%

```css
.box {
  margin: 5px 20px 10px;
}
```

[top] [left-and-right] [bottom];.

<!------------------------------------------------------------------------------------------- -->

## How can you use `margin: auto;` to center elements horizontally?

By setting a `width` for the visible container and setting the `margin` to `0 auto`.

```css
.container {
  width: 980px;
  margin: 0 auto;
}
```

<!------------------------------------------------------------------------------------------- -->

## Can `margin: auto;` be used to center elements vertically?

No, `margin: auto;` can only center elements horizontally.
Because

```css
.container {
  width: 980px;
  margin: 0 auto;
}
```

<!------------------------------------------------------------------------------------------- -->

## Do horizontal margins and vertical margins share the same collapsing behavior ?

No, horizontal margins do not collapse, only vertical margins collapse, on block elements.

<!------------------------------------------------------------------------------------------- -->

## Would you use margin or padding to create more space between 2 elements??

Margin.

<!------------------------------------------------------------------------------------------- -->

## Would you use margin or padding to create more space between the contents of an element and its border?

Padding.

<!------------------------------------------------------------------------------------------- -->

## Would you use margin or padding if you wanted two elements to overlap each other?

Margin, negative margin.

<!------------------------------------------------------------------------------------------- -->

## What's the primary difference between how block elements and inline elements appear on the page?

Block elements stack, each starting on a new line, while inline elements appear in line with each other.

<!------------------------------------------------------------------------------------------- -->

## What's the best practice for using `padding` or `margin` on inline elements?

Only use _horizontal_ `padding`/`margin` on inline elements; _vertical_ `padding`/`margin` behave unpredictably with `display: inline`.

_Note_: If you need to se vertical `padding` or `margin` on an inline element, change it to `inline-block`

[#CSS]() [#display]() [#inline]() [#best-practices]()

<!------------------------------------------------------------------------------------------- -->

## How do inline-block elements behave, compared to strictly block and strictly inline elements?

Inline-block elements lay out inline, but like block elements, they respect `width` and `height`, and _all_ padding/border/margin push surrounding content (no overlap).
[#CSS]() [#display]() [#inline-block]()

<!------------------------------------------------------------------------------------------- -->

## What's the default `display` behavior of a `<div>` element?

`block`

<!------------------------------------------------------------------------------------------- -->

## What are `<div>` elements used for?

_Dividing_ the page into different blocks and styling those blocks.

<!------------------------------------------------------------------------------------------- -->

## ## What's the default `display` behavior of a `<span>` element?

`inline`

<!------------------------------------------------------------------------------------------- -->

## What are `<span>` elements used for??

Grouping text content and inline elements for styleing.

<!------------------------------------------------------------------------------------------- -->

## When should `<span>` elements be used?

Only when _no_ other HTML element is semantically appropriate.

<!------------------------------------------------------------------------------------------- -->

## What does the `float` property do?

Removes an element from normal document flow and pushes it to the left or right of its container, allowing inline content to **wrap around** it.

_Note_: Replaced by flexbox/grid mostly, but still useful for text-wrapping images.

[#CSS]() [#float]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

ADD CARD ON aligning elements horizontally within parents via margin-left or margin-right auto
