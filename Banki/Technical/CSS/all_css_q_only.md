### CSS

-- Command below generates individual files from each header that starts with 'banki_technical'
awk '
/^# banki_technical/ { 
    if (filename) {
        close(filename)
        print "Closed file: " filename
    }
    filename = substr($0, 3) ".md" 
    print "Opening new file: " filename
    next
}
{
    if (filename == "") {
        print "Error: filename not set for the line:", $0
    } else {
        print $0 > filename
    }
}
' all_css_q_only.md


# banki_technical_CSS_1
*banki_technical_CSS_1*

What is CSS selector specificity and how does it work?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>



# banki_technical_CSS_2
*banki_technical_CSS_2*

What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>



# banki_technical_CSS_3
*banki_technical_CSS_3*

Describe floats and how they work.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>


# banki_technical_CSS_4
*banki_technical_CSS_4*

Describe z-index and how stacking context is formed.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>


# banki_technical_CSS_5
*banki_technical_CSS_5*

Describe BFC (Block Formatting Context) and how it works.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_6
*banki_technical_CSS_6*

What are the various clearing techniques and which is appropriate for what context?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_7
*banki_technical_CSS_7*

Explain CSS sprites, and how you would implement them on a page or site.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_8
*banki_technical_CSS_8*

How would you approach fixing browser-specific styling issues?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_9
*banki_technical_CSS_9*

How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_10
*banki_technical_CSS_10*

What are the different ways to visually hide content (and make it available only for screen readers)?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_11
*banki_technical_CSS_11*

Have you ever used a grid system, and if so, what do you prefer?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_12
*banki_technical_CSS_12*

Have you used or implemented media queries or mobile specific layouts/CSS?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_13
*banki_technical_CSS_13*

Are you familiar with styling SVG?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_14
*banki_technical_CSS_14*

Can you give an example of an `@media` property other than screen?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_15
*banki_technical_CSS_15*

What are two "gotchas" for writing efficient CSS?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_16
*banki_technical_CSS_16*

What are the advantages/disadvantages of using CSS preprocessors?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_17
*banki_technical_CSS_17*

Describe what you like and dislike about the CSS preprocessors you have used.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_18
*banki_technical_CSS_18*

How would you implement a web design comp that uses non-standard fonts?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_19
*banki_technical_CSS_19*

Explain how a browser determines what elements match a CSS selector.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_20
*banki_technical_CSS_20*

Describe pseudo-elements and discuss what they are used for.
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_21
*banki_technical_CSS_21*

Explain your understanding of the box model and how you would tell the browser, through CSS, to render your layout %

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>


in
# banki_technical_CSS_22
*banki_technical_CSS_22*

What does `* { box-sizing: border-box; }` do? What are its advantages?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_23
*banki_technical_CSS_23*

What is the CSS `display` property and can you give a few examples of its use?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_24
*banki_technical_CSS_24*

What's the difference between `inline` and `inline-block`?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_25
*banki_technical_CSS_25*

What's the difference between a `relative`, `fixed`, `absolute` and `static` positioned element?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_26
*banki_technical_CSS_26*

What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_27
*banki_technical_CSS_27*

Have you played around with the new CSS Flexbox or Grid specs?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_28
*banki_technical_CSS_28*

Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_29
*banki_technical_CSS_29*

How is responsive design different from adaptive design?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_30
*banki_technical_CSS_30*

Have you ever worked with retina graphics? If so, when and what techniques did you use?
%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>

# banki_technical_CSS_31
*banki_technical_CSS_31*

Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?%

#### Explanation: 
<br> 
 
#### Use:
<br> 

#### Example:
<br>


