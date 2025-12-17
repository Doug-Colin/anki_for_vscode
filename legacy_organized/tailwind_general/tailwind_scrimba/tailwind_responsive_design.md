Notes from Scrimba Tailwind Responsive Design Lesson

-You can take utility classes like .bg-blue-500 and make it responsive by adding a breakpoint prefix like md:bg-blue-500. This will only apply the background color on medium screens and up.

The Tailwind breakpoints (atleast for purposes of this lesson) are:

| Breakpoints | Starts At |
| ----------- | :-------- |
| [ALL]       | 0px       |
| sm:         | 640px     |
| md:         | 768px     |
| lg:         | 1024px    |
| xl:         | 1280px    |

This means that classes set to .{breakpoint}:{...classes}, for ex. .{sm}:{...classes}, will be the classes rendered for screen widths from 640px to 767px, and .{md}:{...classes} will be rendered for screen widths from 768px to 1023px, etc.

So how do we use these and what are the classes available to us?

## Note- not all classes are responsive, but most of the ones you'd want are. For ex.:

## Box Model

| Responsive Classes | Description      |
| ------------------ | ---------------- |
| `{sm}:bg-*`        | background color |
| `{sm}:w-*`         | width            |
| `{sm}:h-*`         | height           |
| `{sm}:p-*`         | padding          |
| `{sm}:m-*`         | margin           |

## Fonts

| Responsive Classes         | Description                               |
| -------------------------- | ----------------------------------------- |
| `.sm:font-sans`            | font family - sans, serif, mono           |
| `.sm:text-lg`              | font size - xs, sm, base, lg, xl, {2-6}xl |
| `.sm:text-left`            | left, center, right, justify              |
| `.sm:text-{color}-{shade}` | text color                                |
| `.sm:font-bold`            | font weight                               |
| `.sm:tracking-tighter`     | letter spacing                            |
| `.sm:leading-tight`        | line spacing/height                       |
| `.sm:uppercase`            | text transform                            |

NOTE: TAlwind responsive classes are a cascading effect from mobile down to desktop. If you have a .sm breakpoint class of font-bold \_.sm:font-bold and a .md breakpoint class of .md:font-italic, what will happen is that the font will be bold on mobile, and then bold AND italicized on desktop.

## Borders

| Responsive Classes           | Description   |
| ---------------------------- | ------------- |
| `.sm:border-{color}-{shade}` | border color  |
| `.sm:border-{style}`         | border style  |
| `.sm:border-{width}`         | border width  |
| `.sm:rounded-{size}`         | border radius |

## Flex Important!

ALL OF THE DISPLAY flexbox classes are also responsive in tailwind

|                       | Responsive Classes                                    | Description |
| --------------------- | ----------------------------------------------------- | ----------- |
| `.sm:{display}`       | block, inline, flex, hidden, flex-col, flex-row, etc. |
| `.sm:flex`            | display flex                                          |
| `.sm:flex-{col\|row}` | flex direction                                        |

Mobile- flex col (vertically stacked children) - Desktop - flex -row (side by side children)

# banki_technical_CSS_1

_banki_technical_CSS_1_

What is CSS selector specificity and how does it work?
%

#### Explanation:

<br>

#### Use:

<br>

#### Example:

<br>

# banki_technical_CSS_2

_banki_technical_CSS_2_

What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
%

#### Explanation:

<br>

#### Use:

<br>

#### Example:

<br>

Keys to remember:

Set all text elements to margin-top of 0 so that the margins don't cllapse into each other and we can be consistent if using flexbox/grid, in which margins don't collapse

You want to keep margin-bottoms for text elements, to maintain separation- text elements will have default margin-bottom of font size.

#### You always want to find the last element and set its margin-bottom

#### Inline and Block behavior

#### Block level elements
Block level elements will create a new line of content, stacking on top fo each other by default. This is good- new p, you want a new line.  
Inline elements stay within the flow of whats around them (list notable inline els, images are inline sort of, note behavbor)
On inline elements, margin left and right can be set, but top and bottom cannot. Padding-top can be set but should not. Width and height cannot be set on inline elements.

#### Inline elements
There are some important things to know about inline elements:

You can only nest other inline elements in them (such as putting a link inside a strong element).
They will only respect margin, padding, and borders which are placed on the left or the right side, and not the top and bottom.

#### span

Whats a good ex. of a use of span>?
Making certain words in a p a different color

ALWAYS use meaningful classnames; always ask yourself if the classname yuour using is useful. for example, if diff. color words within a paragraph of text, class "diffrerent-color" is a terrible classname, while class="accent-color".

When styling Anchor tags containing links, it's importatn to remmber that changing the color of a link will change the color of the link in all states (visited, hover, active, etc.), so if you awnt to change those particularly, you need to use the psuedo classes a:visited, a:hover, a:active, a:focus etc.). Also, if you click on a window, pressing tab will shift focus to the next link, so make sure focus color is styled so people can see it if navigating pavge via tab or adaptive devices

Why is focus state pseudo-selector important? pOWER USERS and adaptive devices. If you click on a window, pressing tab will shift focus to the next link, so make sure focus color is styled so people can see it if navigating page via tab or adaptive devices

Usually hover and focus will be same but you can style differently, active means being clicked on

CSS Always chooses the last option when there are conflicting styles. SO the order of all pseudo selectors matters. How to handle this situation?

have one everall element style, and below it 




What is a  CSS Psuedo-class? A css pseudo class is a keyword added to a selector that specifies a special state of the element to be selected. For example, :hover will apply a style when the user hovers over the element.

#### When setting font size, it's important to remember that the font-size of a parent element will be inherited by its children.

#### Don't set font sizes on paragrpah elements, style the body of the page instead, so that all text in the body will receive a font size
#### always use # in href of anchor tags for mockup
#### always set focus and hover states in anchor tags, and set em together
####
####
####
####
####
