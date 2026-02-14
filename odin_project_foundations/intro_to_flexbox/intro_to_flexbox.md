## What is flexbox?

A CSS layout method that enables flexible sizing of items within rows or columns.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between a flex-container and a flex-item?

A flex container is any element that has `display: flex` on it. A flex item is any child within a parent flex container .

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Can all elements behave as flex containers and flex items? Or are the behaviors limited to container/block elements, versus inline/item elements?

All elements can be behave as either flex containers or flex items.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How do you create a flex-item?

By using `display: flex` on its parent element.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the CSS property `flex`?

A shorthand property that allows setting `flex-grow`, `flex-shrink`, `flex-basis`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What would the following rule set?

```css
div {
  flex: 1;
}
```

%
`flex: 1` sets `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0`.

_REMEMBER_: `flex-basis: 0` means 'ignore content size/`width` or `height`, and distribute space based on flex rations. Sett `flex-basis` to `auto` to use contents `width`/`height`, or to a fixed unit to replace it.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the `flex-grow` property value set?

The share of _available_ space a flex-item fills compared to its siblings, after initial sizing.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the default `flex-grow` value of a flex item?

Default is `0`; don't grow.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Explain how two flex items with `flex-grow: 1` behave compared to two flex items with `flex-grow: 2` and `flex-grow: 2` respectively:

Two items with `flex-grow: 1` they split extra space equally; if one has `flex-grow: 2` and one has `flex-grow: 1`, the first gets 2/3 of extra space.

_Remember_: Both `flex-grow` and `flex-shrink` determine the _ratio_ of expansion between sibling flex items.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the `flex-shrink` property value set?

How much an item _shrinks_ compared to its siblings, when items overflow the container.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the default `flex-shrink` value of a flex item?

Default is `1`; shrink proportionally to siblings; set to `0` to prevent shrinking.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## When is the `flex-shrink` value applied to flex items?

`flex-shrink` is only applied when the size of _all_ flex items exceeds or equals their parent container.

For example, imagine a parent container with `display: flex`, `width: 300px`, and three children. Setting each child to `width:100px` would overflow the parent, and the children would shrink to fit.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the `flex-basis` property value set?

The baseline size of a flex item, from which it shrinks or grows.

_Remember_: In rows, `flex-basis` does the same thing as `width`; in columns, it does the same thing as `height`!

Common values: `flex-basis: auto` (use item `width`/`height`), specific length (`200px`), or 0 (ignore content size, distribute space purely by grow/shrink ratios).
[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## If you set a parent container to `flex: 1`, what is the behavior of the child elements?

They will each grow or shrink the same amount, in response to changing container size.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What's `flex: auto`?

A shorthand for `flex: 1 1 auto`, or `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: auto`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How do the shortand values `flex: auto`, `flex: 1` or `flex: 1 1 0` differ in behavior?

`flex: auto` sets `grow` and `shrink` 1 to and `flex-basis: auto`; meaning items are initially sized by content `width`/`height`, but will grow or shrink proportionally within container.

`flex: 1` and `flex: 1 1 0` are the same shrink/growth rates, but they _ignore_ contents `width`/`height` in initial sizing, so items grow or shri

_Remember_: `flex: auto` means `flex: 1 1 auto`;

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How do you make flex items arrange themselves vertically instead of horizontally?

By setting `flex-direction: column` on the parent container.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a `column` flex container, what does the `flex-basis` property refer to?

`height`; Changing the `flex-direction` to column makes `flex-basis` refer to height instead of width.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a `row` flex container, what does the `flex-basis` property refer to?

`width`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What's the default layout direction of a container with `display: flex`?

Horizontal/row. Flex containers are `flex-direction: row` by default.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What are the four possible values for the `flex-direction` property?

`row`, `row-reverse`, `column`, and `column-reverse`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What are the three ways in which setting `flex-direction: row-reverse` or `column-reverse` change a flex container's behavior?

It reverses the order of element appearance, reverses the side from which the elements begin, and it creates a disconnect between what's rendered and DOM order, which adversely affects screen readers!.

[#CSS]() [#flexbox]() [#layout]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## What's the accessibility best practice forusing `flex-direction: row-reverse` or `column-reverse`?

Don't use them, because they affect what's rendered visually without affecting the DOM, adversely affecting screen reader users.

[#CSS]() [#flexbox]() [#layout]() [#accessibility]()

<!------------------------------------------------------------------------------------------- -->

## How can setting the HTML `dir` attribute change the behavior of flex containers?

The HTML `dir` attribute can reverse the directional order of a flex containers children because it sets whether an element's content is left to right (`ltr`), or right to left (`rtl`).

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What are the two different 'axes' of a flex container?

The main axis, and the cross axis.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a flex container with `flex-direction: row`, which is the main axis, and which is the cross axis?

A container with `flex-direction: row`, has a horizontal main axis, and a vertical cross axis.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a flex container with `flex-direction: column`, which is the main axis, and which is the cross axis?

A container with `flex-direction: column`, has a _vertical_ main axis, and a horizontal cross axis.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Do the `justify-content` and `align-items` properties work the same in row _and_ column flex containers? Why/Why not?

No, because alignment and justification properties work by main or cross axes, not by `flex-direction:`, and `flex-direction: column` reverses which are the main and cross axes.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a flex row, what do the `justify-content` and `align-items` properties do?

In a flex row, `justify-content` aligns horizontally and `align-items` aligns vertically.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In a flex column, what do the `justify-content` and `align-items` properties do?

In a flex column, `justify-content` and `align-items` are reversed; `justify-content` aligns _vertically_ and `align-items` aligns _horizontally_.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the `gap` property do?

Adds a specified space between flex items; like adding a margin to the items themselves.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between justify-content and align-items?

`justify-content` aligns items across the main axis, while `align-items` changes placement along the cross axis.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How do you use flexbox to _completely_ center a div inside a flex container?

`justify-content: center` and `align-items: center`, changes placement along the cross axis.
[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What’s the difference between `justify-content: space-between` and`justify-content: space-around`?

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the `flex-wrap` property do, and when should you use it?

`flex-wrap: wrap` enables overflowing items to _wrap_ onto a new 'row'; the new row acts as a standard flex container.

_Question_: what does `flex-wrap: wrap` do for columns?
[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Which 'axis' does the `justify-content:` property affect?

The main, or primary axis, of the container; _parallel_ to flow.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Which 'axis' do the `align-items` and `align-self` properties affect?

The cross, or primary axis, of the container; _perpendicular_ to flow.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the `align-self` property used for?

Changing the alignment of a _specific_ child along the _cross_ axis.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Why does flexbox feature an `align-self` property, but not a `justify-self` property?

Because aligning in flexbox always adjusts along the _cross_ axis, _perpendicular_ to flow; and justifying along the _main_ axis, _parallel_ to flow, and adjusting items individually in the direction of flow would cause collisions/conflicts.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What's the difference between how `flex-basis` affects items in row containers, versus column containers?

In rows, `flex-basis` does the same thing as `width`; in columns, it does the same thing as `height`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Which axis does `flex-basis` affect?

`flex-basis` always affects the _main_ axis; the direction of flow.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## In terms of growing or shrinking, what is the default behavior of a flex containers children?

By default, elements in a flex container will _shrink_ to their minimum comfortable size, along the _main_ axis.

In short: shrink to minimum size, in direction of flow.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How does `margin: auto` work in flexbox?

In flexbox, auto margins consume extra space; setting `margin: auto` is like setting an element to `margin: grow`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What's the common flex approach to a header layout featuring a logo/name at the left side, and nav links pushed all the way to the right?

Using a `<ul>` and `<li>`s within a `<nav>`, `gap`ping the `<li>`s, and setting `margin-right: auto` on the logo to push the nav links to the far right.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## When is it appropriate to use flexbox, versus grid?

Flexbox is most appropriate for small-scale and app component layout, whereas Grid is intended for larger scale layouts (like..?)

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is a flex items 'main size'?

The size of the item along the main dimension; main size for row items is `width`, while main size for column items of `height`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is a flex items 'cross size'?

The size of the item along the cross dimension; cross size for row items is `height`, while cross size for column items is `width`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What is the `flex-flow` property?

%
Shorthand for writing a containers `flex-direction` and `flex-wrap` properties.

_Example_:

```css
.container {
  flex-flow: column wrap;
}
```

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## When is it appropriate to use `align-items`, compared to `align-content`?

Use `align-items` for laying out the _cross axis_ of the current line; only use `align-content` for laying out multi-line flex-wrapped containers (A single-line flexible container will not reflect `align-content`.)

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## What does the flex `order` property do?

`order` shifts order of appearance among siblings by negative or positive values (1 to shift a spot over, -1 to shift backwards a spot)

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How can you perfectly center a singular flex item?

By setting the parent to `display: flex` and the child to `margin: auto`.

[#CSS]() [#flexbox]() [#layout]()

<!------------------------------------------------------------------------------------------- -->
