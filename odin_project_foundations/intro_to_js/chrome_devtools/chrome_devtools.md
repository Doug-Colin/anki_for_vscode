## Shortcut to open Chrome devtools?

Cmnd + Option + I

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Shortcut to open Chrome devtools _Console_ panel?

Cmd + Option + J

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

## Shortcut to open Chrome devtools _Elements_ panel?

<!------------------------------------------------------------------------------------------- -->

Cmd + Option + C

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## From left to right, name the three parts, or panes, of the Chrome Devtools Sources panel, and explain what each is used for:

The three panes in order, left to right, are the File Navigator, Code Editor, and JavaScript Debugging panes.

First, the File Navigator pane lists the HTML, JS, CSS, and other files attached to the inspected page.

Second, the Code Editor pane shows the source code.

Third, the JS Debugging pane is for debugging JS.

[#sources panel]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## When in the Sources pane of Chrome devtools, what key toggles appearance of the Console window below?

Escape.

[#chrome]() [#devtools]() [#sources panel]() [#console]()

<!------------------------------------------------------------------------------------------- -->

## What is a breakpoint?

A debugging tool that enables pausing, or 'breaking' of execution when specific, selected lines of code are reached, so that state, variables, and the stack can be more easily debugged.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set a breakpoint on a specific line of code in Chrome devtools?

By opening the devtools sources panel and clicking on the line number in the central code editor pane.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set a _conditional_ breakpoint in Chrome devtools?

Sources panel -> _right_-click line number in code editor pane -> select 'Add conditional breakpoint ... '.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## Aside from clicking or right-clicking on line numbers in the code editor pane of the devtools sources panel, how else can breakpoints be set?

By adding the command `debugger;` anywhere in your code; this will cause execution to pause _only_ when Devtools is open.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## In Chrome DevTools debugger pane, what does the Step (F9) button do?

'Step' runs the next _statement_.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugger]()

<!------------------------------------------------------------------------------------------- -->

## In Chrome DevTools debugger pane, what does the Step Over (F10) button do?

'Step Over' runs the entire next _function call_ and pauses on the line _after_ it.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugger]()

<!------------------------------------------------------------------------------------------- -->

## In Chrome DevTools debugger pane, what does the Step Into (F11) button do?

'Step Into' jumps _into_ the next function call, so you can step through it statements by statement.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugger]()

<!------------------------------------------------------------------------------------------- -->

## In Chrome DevTools debugger pane, what does the Step Out (Shift+F11) button do?

'Step Out' continues the execution to the very last line of the function you're currently inside, jumping 'out' to the conclusion of the function.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugger]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between the Step, Step Over, Step into, and Step Out options in the debugger pane of the DevTools source panel?

'Step' runs the next statement; 'Step Over' runs the next function, 'Step Into' jumps into the statements of the next function call, 'Step Out' executes to the end of the function you're currently inside.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugger]()

<!------------------------------------------------------------------------------------------- -->

## What is the 'continue to here' option in devtools, and how to do you use it?

'Continue to Here' executes code until the point at which you selected; you can select a line of code by right-clicking in sources panel code editor and selecting 'continue to here'.

[#chrome]() [#devtools]() [#chrome devtools]() Right click on a line of code opens the context menu with a great option called “Continue to here”.

<!------------------------------------------------------------------------------------------- -->

## In DevTools debugger pane, what does the 'Pause on Exceptions' button (represented by pause icon) do?

'Pause on Exceptions' pauses code execution on all _uncaught_ errors, so long as DevTools is open.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you find the specificity of a CSS selector in Chrome DevTools?

By hovering over the selector in the 'Styles' panel.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between the CSS rules shown in the Styles tab and those shown in the Computed tab?

The Styles tab shows all rules that an element is targeted for via selectors, including styles that are invalid, inactive, and overridden.

The Computed tab only shows rules that are actually being applied to an element.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->
<!------------------------------------------------------------------------------------------- -->
<!------------------------------------------------------------------------------------------- -->
<!-------------------EDIT EDIT EDIT BELOW / WORK ON IT ------------------- -->

## How can you view the inherited properties of an element?

To also search inherited properties in the Computed tab, check the Show All checkbox.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ?

To navigate the Computed tab, group the filtered properties in collapsible categories by checking Group.
-->Card for checking Group is good as tat is super helpful..

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you toggle CSS pseudo-classes on and off in DevTools??

Inspect -> Styles -> :hov -> check desired pseudo-class.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you emulate a focused page in Chrome DevTools?

Styles -> :hov -> check 'Emulate Focused Page'

[#chrome]() [#devtools]() [#chrome devtools]() [#focus]()

<!------------------------------------------------------------------------------------------- -->

## If an element is styled using cascade layers, how can you view them in Chrome DevTools?

By inspecting the element and finding the layers in the DevTools Styles tab.

[#chrome]() [#devtools]() [#chrome devtools]() [#cascade layers]()

<!------------------------------------------------------------------------------------------- -->

## For elements styled using cascade layers, how can you view the specificity of individual layers?

By toggling the layers icon in the toolbar of the Styles tab- the layers icon appears there for any element styled with cascade layers, once the element is inspected or selected in the elements panel.

[#chrome]() [#devtools]() [#chrome devtools]() [#](cascade layers)

<!------------------------------------------------------------------------------------------- -->

## How do you open the command menu in Chrome DevTools?

Cmnd+Shift+P (_remember_, same key combo as opening Command Palette in VSCode)

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How do you view a page in print mode in DevTools?

Command Palette (Cmd+Shift+P) -> type 'Rendering' -> 'Show Rendering' -> Emulate CSS Media -> print.

[#chrome]() [#devtools]() [#chrome devtools]() [#print]()

<!------------------------------------------------------------------------------------------- -->

## If you wanted to view how much CSS and JavaScript is used from each file the browser loads, how can you do so using DevTools?

Command Palette (Cmd+Shift+P) -> Coverage -> Show Coverage

[#chrome]() [#devtools]() [#chrome devtools]() [#coverage]()

<!------------------------------------------------------------------------------------------- -->

## If you wanted to view a _line-by-line_ breakdown of how much CSS and JavaScript is used in browser-loaded files, how can you do so using DevTools?

Command Palette (Cmd+Shift+P) -> Coverage -> Show Coverage -> Select CSS or JS file.

[#chrome]() [#devtools]() [#chrome devtools]() [#coverage]()

<!------------------------------------------------------------------------------------------- -->

## What is the 'drawer' in Chrome DevTools?

The panel that appears across the lower section of the interface, showing Console, Ai Assistance, What's New, and other drawer-tool tabs like Coverage and Rendering.

[#chrome]() [#devtools]() [#chrome devtools]() [#drawer]()

<!------------------------------------------------------------------------------------------- -->

## Toggle the drawer/Console panel?

esc

[#chrome]() [#devtools]() [#chrome devtools]() [#drawer]() [#console]()

<!------------------------------------------------------------------------------------------- -->

## How do you copy a CSS declaration, property, value, or rule from an element inspected in DevTools?

Right click on it in Styles tab and a copy menu appears.

[#chrome]() [#devtools]() [#chrome devtools]() [#copy]()

<!------------------------------------------------------------------------------------------- -->

## How to add an inline CSS declaration to an element?

Inspect/Select -> Styles Tab -> `element.style` section at top -> click between brackets (`{}`) -> type property-value -> Enter.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ## How to add an CSS declaration to an existing style rule?

Inspect/Select -> Styles Tab -> find rule -> click between brackets (`{}`) -> type property-value -> Enter.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Keyboard shortcut to incrementally change numerical CSS property-values?

Option+Up, Up, Shift+Up, Cmnd+Shift+Up (respectively incrementing by .1, 1, 10, and 100 units; use Down key to decrement).

[#chrome]() [#devtools]() [#chrome devtools]() [#shortcut]()

<!------------------------------------------------------------------------------------------- -->

## Add a class to an element?

Select element in DOM Tree -> Styles Tab -> Click `.cls` -> enter classname in prompt.

[#chrome]() [#devtools]() [#chrome devtools]() [#class]()

<!------------------------------------------------------------------------------------------- -->

## How can you simulate a user's preference of light and dark themes, or their use of automatic dark mode?

Styles tab toolbar -> paintbrush icon -> select theme/auto dark mode.

[#chrome]() [#devtools]() [#chrome devtools]() [#themes]() [#dark mode]()

<!------------------------------------------------------------------------------------------- -->

## Toggle a CSS class selector for a specific element?

Styles tab toolbar -> .cls toolbar button -> chekc/uncheck listed classes.

[#chrome]() [#devtools]() [#chrome devtools]() [#class]()

<!------------------------------------------------------------------------------------------- -->

## Add a new style rule to an element?

Styles tab -> click `+` icon in toolbar -> new rule appears below -> enter property-value.

[#chrome]() [#devtools]() [#chrome devtools]() [#add rule]()

<!------------------------------------------------------------------------------------------- -->

## Add a new style rule to _a specific stylesheet_?

Styles tab -> _click and hold_ `+` icon in toolbar -> select from dropdown of stylesheets.

[#chrome]() [#devtools]() [#chrome devtools]() [#add rule to specific stylesheet]()

<!------------------------------------------------------------------------------------------- -->

## Multiple stylesheets are often affecting a page's appearance; how can you tell _which_ stylesheet a CSS rule is from?

Inspect/Select Element in Dom Tree -> Styles tab -> view each rule's stylesheet at top-right.

[#chrome]() [#devtools]() [#chrome devtools]() [#stylesheet]()

<!------------------------------------------------------------------------------------------- -->

## Toggle a single CSS declaration on/off?

Inspect element/select in Dom Tree -> Styles tab -> hover over styles -> check/uncheck boxes that appear.

[#chrome]() [#devtools]() [#chrome devtools]() [#debugging CSS]()

<!------------------------------------------------------------------------------------------- -->

## How can you use DevTools to inspect, create, modify, and debug CSS Flexbox/Grid layouts?

Inspect/Select Element in Dom Tree -> find `display:flex` or `display:grid` property in Styles tab -> click on grid icon next to property.

[#chrome]() [#devtools]() [#chrome devtools]() [#flex]() [#grid]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## Which has superior DevTools for laying out pages and doing layout debugging via CSS Grid and Flexbox; Firefox or Chrome?

Firefox; widely considered the gold standard.

[#chrome]() [#devtools]() [#chrome devtools]() [#flex]() [#grid]() [#layout]()

<!------------------------------------------------------------------------------------------- -->

## How can you use the color picker to change the color of CSS property-value declarations?

Inspect/Select element in DOM tree -> Styles tab -> click color square in relevant CSS rule -> use eyedropper or select color from gradient.

[#chrome]() [#devtools]() [#chrome devtools]() [#color picker]()

<!------------------------------------------------------------------------------------------- -->

## How can you change the _format_ of a color value in a CSS declaration (for example, hsl to rgb, etc.)?

Styles -> Shift+Click the color square -> select format from menu.

[#chrome]() [#devtools]() [#chrome devtools]() [#color format]()

<!------------------------------------------------------------------------------------------- -->

## How can you edit 'shadow' declarations like `text-shadow` and `box-shadow`?

Styles -> find `text-shadow` or `box-shadow` property -> click shadow layer icon.

[#chrome]() [#devtools]() [#chrome devtools]() [#text-shadow]() [#box-shadow]()

<!------------------------------------------------------------------------------------------- -->

## What are the two primary ways of inspecting and or selecting a specific element in the dom tree?

Right click -> Inspect, or open DevTools and click on the arrow-to-select icon in the top left corner, then select from element.

[#chrome]() [#devtools]() [#chrome devtools]() [#select]()

<!------------------------------------------------------------------------------------------- -->

## What do the arrow keys do when in the Dom Tree/Elements tab of Chrome DevTools?

Up and Down navigate line by line, left and right drill down into or collapse child/parent elements.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## If you have selected an element in the Dom Tree in DevTools window, but it is not currently visible in the page window, how can you get it to 'Scroll Into View'?

Right Click Element -> Scroll Into View

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How can you capture a screenshot of an individual node in the DOM Tree?

Inspect -> Right Click Element -> Capture Node Screenshot (saves to D/Ls)

[#chrome]() [#devtools]() [#chrome devtools]() [#screenshot]()

<!------------------------------------------------------------------------------------------- -->

## How can you force activate element states like `:active`, `:hover`, `:focus`, and `:focus-within`?

Inspect -> Right CLick in DOM Tree -> Force State -> `:hover` etc.

[#chrome]() [#devtools]() [#chrome devtools]() [#force state]()

<!------------------------------------------------------------------------------------------- -->

## How can you access a DOM Tree node in the console, for debugging or other purposes?

Select DOM Tree Node/Element -> entering `$0` into the console -> node appears in console (only works ifcurrent selected/inspected element has `$0` to right of it)

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## If you need to refer back to a node in the console many times, you can store it as a global variable. How do you do this?

Inspect/select node -> right click -> Store as global variable.

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## How can you copy the JS path of a DOM Node using DevTools?

Inspect/Select the element in the DOM tree -> right click -> Copy -> Copy JS Path

[#chrome]() [#devtools]() [#chrome devtools]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a Line of Code breakpoint?

A breakpoint that pauses code execution on code.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is a conditional, or Conditional Line of Code breakpoint?

A breakpoint that pauses code execution on specific code, _if_ the provided condition evaluates to true.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is Logpoint breakpoint?

A breakpoint that logs a message to the console without pausing execution, preventing console.log() code clutter.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set a Logpoint breakpoint?

Sources panel -> _right_-click line number in code editor pane -> select 'Add logpoint' -> Enter valuers/expressions to log -> Enter.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you 'mute' a breakpoint?

Sources panel -> Right click line number with breakpoint -> Select 'Never Pause Here'

_Note_: Does not work on line-of-code and Event Listener breakpoints.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is a DOM breakpoint?

A breakpoint that pauses execution on code that changes or removes a specific DOM node, or its children.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set a DOM breakpoint?

Elements tab -> Right click element in DOM tree -> Break On -> Select subtree or attribute modifications or node removal.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is an XHR/fetch breakpoint?

A network request breakpoint that pauses execution whenever a network request is made to a URL containing the specified substring.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set an XHR/fetch breakpoint?

Sources tab -> Breakpoints pane -> XHR Breakpoints dropdown -> Add breakpoint -> enter string -> Enter.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is an Event Listener breakpoint?

A breakpoint that pauses on the code that runs after an event (`click` etc) is fired.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set an Event Listener breakpoint?

Sources tab -> Breakpoints pane -> Event Listener Breakpoints dropdown -> Search/Find desired Event Listener -> check box.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is an Exception breakpoint?

A breakpoint that pauses on the line of code throwing a caught or uncaught exception.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## How do you set an Exception breakpoint?

Sources tab -> Breakpoints panel -> check box for caught and or uncaught exceptions.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is a Function breakpoint?

A breakpoint that pauses whenever the specified function is called.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What is a Trusted Type breakpoint?

A breakpoint that pauses on aTrusted Type violation.

[#chrome]() [#devtools]() [#chrome devtools]() [#breakpoints]()

<!------------------------------------------------------------------------------------------- -->

## What are the standard console log levels, low to high severity??

`debug` → `info`/`log` → `warn` → `error`

_Note:_ Full, non-browser logging systems often include `fatal`

[#chrome]() [#devtools]() [#chrome devtools]() [#console]()

<!------------------------------------------------------------------------------------------- -->

## How can you set the console to only show specific levels of logs (for ex., from console.log() / warn() / error())?

Console tab -> lower toolbar -> Custom levels -> select (verbose - info - warn - errors)

OR

Console tab -> lower toolbar -> show Console sidebar icon (play button) -> select (verbose - info - warn - errors)

[#chrome]() [#devtools]() [#chrome devtools]() [#console]()

<!------------------------------------------------------------------------------------------- -->

## Certain values or data structures can be difficult to read when logged ot the console. For example, arrays of objects, primitives, and plain objects. What method can you use to display them more legibly?

console.table()

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## Can you log HTML elements to the console?

Yes.

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## What does console.dir() do, and when is it useful??

Displays an object as a drillable JS property tree; It's useful when wanting to print a DOM element to the console, because console.log() shows the HTML tag instead.

_Note:_ Rarely used since DevTools console is already interactive.

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## What methods are used to _group_ together the messages logged to the console?

console.group(), console.groupCollapsed(), and console.groupEnd().

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## What method can you use to log how many times a function is called to the console?

console.count().

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## You can use console.count() to log a function's invocation count to the console. How do you reset the count?

console.countReset().

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## What method prints the stack trace to the console?

console.trace()

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->

## What console methods can be used for quick/dirty performance checks, and how?

console.time(timerName) and console.timeEnd(timerName); simple insert at beginning and end of a function's body, respectively.

[#chrome]() [#devtools]() [#chrome devtools]() [#console]() [#console methods]()

<!------------------------------------------------------------------------------------------- -->
