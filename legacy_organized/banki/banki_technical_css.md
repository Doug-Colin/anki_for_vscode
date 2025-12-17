### CSS

# banki_technical_CSS_1
*banki_technical_CSS_1*

What is CSS selector specificity and how does it work?
  - **Explanation:** The means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
  - **Use:** Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector.
  - **Example:** A selector of `#id .class tag` would have 111 points as id's count for 100, classes for 10 and tags 1.
  - **Source:** https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

# banki_technical_CSS_2
*banki_technical_CSS_2*

What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  - **Explanation:** "Normalize" alters the default styles of various browser to match each other. "Reset" will remove the browsers default styles so you are starting from scratch.
  - **Use:** Applying one or the other is done to try and make websites visually consistent across different browsers. I prefer to use a mix of both. Starting with the normalize to keep it conscise and then add some elements like anchors and headers with a reset. Going full "nuke" is often unnecessary and creates a larger, harder to debug file.
  - **Example:**

Normalize:

```css
/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
```

Reset:

```css
html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
```

**Source:** https://elad.medium.com/normalize-css-or-css-reset-9d75175c5d1e

# banki_technical_CSS_3
*banki_technical_CSS_3*

Describe floats and how they work.
  - **Explanation:** Floats are a positioning property where the element that is floated will be removed from the flow of the page and affect the elements around it. A parent element will collapse to zero height if it contains only floated elements, to fix this it was common to use a `.clearfix` hack.
  - **Use:** It was used prior to flex and grid to layout pages in a more flexible manner.
  - **Example:** You could float three elements left and give them widths of 33% to create three even width columns.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_4
*banki_technical_CSS_4*

Describe z-index and how stacking context is formed.
  - **Explanation:** The `z-index` property in CSS controls the vertical stacking order of elements that overlap. A stacking context is an element that contains a set of layers. The z-index values of its children are set relative to that element rather than to the document root. Layers outside of that context can't sit between layers within it.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_5
*banki_technical_CSS_5*

Describe BFC (Block Formatting Context) and how it works.
  - **Explanation:** A BFC is an HTML box that satisfies at least one of the following conditions:
    - The value of float is not none.
    - The value of position is neither static nor relative.
    - The value of display is table-cell, table-caption, inline-block, flex, or inline-flex, grid, or inline-grid.
    - The value of overflow is not visible.
  - **Use:** Knowing how to establish a block formatting context is important, because without doing so, the containing box will not contain floated children.
  - **Example:** Without forming a BFC you could have content of a float that is taller than the content alongside it. The border of the parent element could then "cut-through" the floated box.
  - **Source:** https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context

# banki_technical_CSS_6
*banki_technical_CSS_6*

What are the various clearing techniques and which is appropriate for what context?
  - **Explanation:**
    - Empty `div` method
    - Clearfix method
    - `overflow: auto` or `overflow: hidden` method
  - **Use:** `.clearfix` utility class is probably the best method to use in general as it doesn't take long to construct and doesn't suffer from clipping issues like the overflow methods.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_7
*banki_technical_CSS_7*

Explain CSS sprites, and how you would implement them on a page or site.
  - **Explanation:** CSS Sprites are a means of combining multiple images into a single image file for use on a website, to help with performance.
  - **Use:** Browsers limit the number of concurrent requests a site can make so leading several images with a single HTTP request helps increase page load speed.
  - **Example:** An example would be combining press logo's for Wired, NY Times and The Washington Post into a single image file. Then on the site, with CSS, placing the file three times and moving/cropping it to display the applicable logo.
  - **Source:** https://css-tricks.com/css-sprites/

# banki_technical_CSS_8
*banki_technical_CSS_8*

How would you approach fixing browser-specific styling issues?
  - **Explanation:** There are a handful of ways to solve the issue such as browser specific stylesheets, using a library like bootstrap, etc. MY preference would be to use a combination normalize/reset style sheet. I'd rather use a combination as going full nuke with a reset isn't necessary and makes it a little harder to debug.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_9
*banki_technical_CSS_9*

How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?

  - **Explanation:** My preference is to try and build lightweight simple websites that incorporate progressive enhancement.
  - **Use:** Build the base level of HTML/CSS with semantics and accessibility in the forefront you get a site that works well on feature-constrained browsers. I would then add any CSS on JavaScript enhancements deliberately, checking [caniuse.com](https://caniuse.com/) and using vendor prefixs and polyfills if required.
  - **Example:** Instead of filling the site with `<div>` using more semantically appropriate tags like `<section> <aside> <article> <header> <footer>`
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_10
*banki_technical_CSS_10*

What are the different ways to visually hide content (and make it available only for screen readers)?
  - **Explanation:**
    - Make the element have a size of zero `width: 0; height: 0`
    - Absolute position off screen `position: absolute; left: -99999px`
    - Text indent off screen if within block element `text-indent: -9999px`
    - aria-label which will read the string given to the attribute.
  - **Use:** I typically absolutely position the element off screen as it covers the most scenarios.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_11
*banki_technical_CSS_11*

Have you ever used a grid system, and if so, what do you prefer?
  - **Explanation:** I typically use a 12 column "grid" system when doing my initial web layout.
  - **Use:** I find that it works well for laying out the average website and giving the site some visual consistency. When if comes to coding the site I find it helps speed up the layout immensely.
  - **Source:** https://www.flux-academy.com/blog/how-to-use-a-grid-in-web-design

# banki_technical_CSS_12
*banki_technical_CSS_12*

Have you used or implemented media queries or mobile specific layouts/CSS?
  - **Explanation:** I use them quite frequently.
  - **Use:** I use them on every website and typically build mobile first. The breakpoints and media queries are then used to convert the layout from mobile to desktop.
  - **Example:** Some examples is changing a bunch of cards from being a single column stack on mobile to a three column layout on desktop.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_13
*banki_technical_CSS_13*

Are you familiar with styling SVG?
  - **Explanation:** Yes there are a few ways to style them including inline CSS, embedded CSS or an external style sheet. Basic coloring can be done with the fill and stroke attributes.
  - **Example:**
  ```html
  <rect width="100" height="100" stroke="blue" fill="purple" />
  ```
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/
# banki_technical_CSS_14
*banki_technical_CSS_14*

Can you give an example of an `@media` property other than screen?
  - **Explanation & Use:** There are four types:
    - `all` - for all media type devices
    - `print` - for printers
    - `speech` - for screenreaders that "reads" the page out loud
    - `screen` - for computer screens, tablets, smart-phones etc.
  - **Example:** An example of using print and making all the text black:
  ```css
  @media print {
    body {
      color: black;
    }
  }
  ```
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_15
*banki_technical_CSS_15*

What are two "gotchas" for writing efficient CSS?
  - **Explanation:**
    - Browsers match selectors from rightmost (key selector) to left. The shorter the length of the chain the faster the browser can find a match. Avoid using tag and universal selectors for your key selector.
    - Avoid using styles that trigger reflow.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_16
*banki_technical_CSS_16*

What are the advantages/disadvantages of using CSS preprocessors?

  - **Explanation:** Some advantages would be:

    - The code is easier to maintain
    - More efficient to write with nested selectors
    - Mixins can be used for repeated styles
    - Ability to split into different files

    Disadvantages would be:

    - Additional tooling is required
    - You aren't able to use the most current features of standard CSS

  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_17
*banki_technical_CSS_17*

Describe what you like and dislike about the CSS preprocessors you have used.
  - **Explanation:** I've found that being able to split files and nest selectors is the most useful. A couple of downsides are that debugging is a little more difficult and having to wait for compilation.
  - **Source:** https://adamsilver.io/blog/the-disadvantages-of-css-preprocessors/

# banki_technical_CSS_18
*banki_technical_CSS_18*

How would you implement a web design comp that uses non-standard fonts?
  - **Explanation:** Use @font-face and define font-family
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_19
*banki_technical_CSS_19*

Explain how a browser determines what elements match a CSS selector.
  - **Explanation:** Browsers match selectors from rightmost (key selector) to left.
  - **Example:** For example with this selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches and can stop its matching.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_20
*banki_technical_CSS_20*

Describe pseudo-elements and discuss what they are used for.
  - **Explanation & Use:** A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s)
  - **Example:** ::first-line can be used to change the font of the first line of a paragraph
  - **Source:** https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

# banki_technical_CSS_21
*banki_technical_CSS_21*

Explain your understanding of the box model and how you would tell the browser, through CSS, to render your layout in different box models.
  - **Explanation:** The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area and optional surrounding padding, border, and margin areas.
  - **Use:** The standard box model calculates box size by taking a specified `height` and `width`, then adding the padding and border. However to change to the alternative box model you would set `box-sizing: border-box` which allows you to set the box size with `height` and `width`.
  - **Source:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model

# banki_technical_CSS_22
*banki_technical_CSS_22*

What does `* { box-sizing: border-box; }` do? What are its advantages?
  - **Explanation & Use:** It allows you to specify the actual width and height of a box using the `width` and `height` properties. This allows you to input true sizes and not have to do any math to take padding and borders into account.
  - **Source:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model

# banki_technical_CSS_23
*banki_technical_CSS_23*

What is the CSS `display` property and can you give a few examples of its use?
  - **Explanation & Use:** The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
  - **Example:** `display: block` would make the element consume the whole line width. `display: grid` would allow you to layout children in a grid system. If you wanted three columns you could pair it with something like `grid-template-columns: 1fr 1fr 1fr`
  - **Source:** https://developer.mozilla.org/en-US/docs/Web/CSS/display

# banki_technical_CSS_24
*banki_technical_CSS_24*

What's the difference between `inline` and `inline-block`?
  - **Explanation:**
    - `inline`
      - CANNOT specify width and height
      - Can only set margin and padding for the sides, not top and bottom.
    - `inline-block`
      - CAN specify width and height
      - Can set margin and padding on all sides
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_25
*banki_technical_CSS_25*

What's the difference between a `relative`, `fixed`, `absolute` and `static` positioned element?
  - **Explanation:**
    - Relative - Position is relative to it's original static position. Original space on the page is preserved.
    - Fixed - Element removed from page flow and placed in spot relative to viewport. It won't move when scrolled.
    - Absolute - Element removed from page flow and positioned relative to it closest "positioned" ancestor. Original space on the page is not preserved
    - Static - The default position. `top`, `right`, `bottom`, `left` and `z-index` properties do not apply.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_26
*banki_technical_CSS_26*

What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
  - Bootstrap - It takes a while to get the latest CSS features added. Your sites end up looking very similar to others.
  - Tailwind - The HTML can feel very cluttered. Reusing styles is a bit clunky.

# banki_technical_CSS_27
*banki_technical_CSS_27*

Have you played around with the new CSS Flexbox or Grid specs?
  - **Explanation:** I have used both flexbox and grid and like to employ both of them.
  - **Use:** I find grid to be useful for the top level page layout and any elements which have a typical grid layout. I prefer using flexbox for sections and other elements which don't need a rigid grid alignment.
  - **Example:** If I had something like a tic-tac-toe board I would use grid as it is easy to get the boxes to align and be the same size. If I had some sort of information card with multiple pieces of information I would likely use flexbox.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_28
*banki_technical_CSS_28*

Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
  - **Explanation:** Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size. A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later.
  - **Use:** You would use media queries to make the above changes at certain screen size breakpoints.
  - **Example:** An example of mobile first and responsive would be:

```css
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

- **Source:** https://www.frontendinterviewhandbook.com/css-questions/

# banki_technical_CSS_29
*banki_technical_CSS_29*

How is responsive design different from adaptive design?
  - **Explanation:** Both responsive and adaptive design attempt to optimize the user experience across different devices.
  - **Use:** Responsive design works on the principle of flexibility - a single fluid website that can look good on any device. Instead of one flexible design, adaptive design detects the device then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. I believe responsive is the best approach to provide a great experience for all users.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/
  
# banki_technical_CSS_30
*banki_technical_CSS_30*

Have you ever worked with retina graphics? If so, when and what techniques did you use?
  - **Explanation:** Retina is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1. In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using highest resolution images will have an impact on page load times.
  - **Use:** To overcome this problem, we can use responsive images, as specified in HTML5 with the `srcset` attribute.
  - **Example:**
  ```html
  <img
    src="/images/test-1600.jpg"
    srcset="/images/test-400.jpg 400w, /images/test-800.jpg 800w, /images/test-1200.jpg 1200w"
  />
  ```
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/
  
# banki_technical_CSS_31
*banki_technical_CSS_31*

Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?
  - **Explanation:** `translate()` is a value of CSS `transform`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. `translate()` would be the more efficient solution with shorter paint times. If you do not want the original space of the element preserved you would want to use `absolute` positioning.
  - **Source:** https://www.frontendinterviewhandbook.com/css-questions/
