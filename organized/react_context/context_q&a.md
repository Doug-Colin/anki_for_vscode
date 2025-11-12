### React_Context

<!-- File name & number -->

# banki_technical_CSS_2

<!-- Front of Card -->
<!-- Card name & number -->

_banki_technical_CSS_2_

<!-- Question: -->

Replace this sentence with your question.

<!-- '%' character separates the front of the card from the back of the card.  -->

%

<!-- Back of Card -->

#### Explanation:

<br> 
Replace this sentence with your answer.

#### Use:

<br> 
Replace this sentence with your answer.

#### Example:

<br>
Replace this sentence with your answer.

```ts
// Place code here- change language abbreviation above for Syntax highlighting (html, css, js, ts etc)
```

<!-- Template for cards in this file -->

# react*context*

_react*context*_
What is the react context API?

%

#### Explanation:

<br>

#### Use:

<br>

#### Example:

<br>

```ts
// Place code here- change language abbreviation above for Syntax highlighting (html, css, js, ts etc)
```

# react_context_1

_react_context_1_
What is the react context API?

%

#### Explanation:

<br> 
The context API is a state mamagement solution that allows us to create a  context, which provides values such as states and functions, so that they can be consumed by any component that is a child of the context provider.

#### Use:

<br> 
The context API is primarily used to avoid repetitive passes of props through deeply nested components, also known as prop-drilling. Passing any props though deeply nested components is problematic because any change in the prop state causes all of the components in that chain to re-render. The context API allows deeply nested components to access the same state without having to pass props through each component, avoiding unnecessary re-renders of components.


#### Example:

<br>

```ts
// Place code here- change language abbreviation above for Syntax highlighting (html, css, js, ts etc)
```

# react_context_2

_react_context_2_

What are the steps taken to use the react context API?

%

#### Explanation:

<br> 
First, you must import the createContext and useContext functions:

```js
import React, ( useState, createContext, useContext ) from "react"
```

Second, *Create the context object via createContext()*:
create a context object using the createContext function, passing in null:

```js
const UsernameContext = createContext(null);
```

Third, provide the context by wrapping the uppermost parent component in which you need it, with the <Context.Provider>, passing that value you need to share into the value prop:
```js
export const ParentComponent = () => {
    const [username, setUsername] = useState("Gary Lobster")

    return (
        <AppContext.Provider value={{userName, setUsername}}>
        <div>
            {userName}
        </div>
        <AppContext.Provider >
        )
}
```

*Fourth, use the context:*
Use destructuring to extract the desired property value from the context object by assigning it to a local variable and passing the context object into the useContext hook:
```js
export const ChildComponent = () => {
    const {setUsername} = useContext(AppContext);
    return (
        <div>
            <button
                onClick={() => {
                    setUsername("Cindy Starfish")
                }}
            >
            </button>
        </div>
        )
}
```

create a context provider component that wraps the components that need access to the context. The context provider component should have a value prop that is set to the context object: (??)
Third wrap the

```ts

```

```js
const TasksContext = createContext(null);
```

#### Use:

<br>

#### Example:

<br>

```ts
// Place code here- change language abbreviation above for Syntax highlighting (html, css, js, ts etc)
```

# react_context_3

_react_context_3_

What are the best practices for using the react context API? (perhaps split into multiple q's/cards)

%

#### Best Practice 1: Create individual context provider components for each context as follows:
```js

export const UserContext = createContext(null)

esport const UserContextProvider = (({children}) => {
const [userInfo, setUserinfo] = useState(null)
const [isAuth, setIsAuth] = useState(false)

const login = () = > {
    // login request API call
    fetch("/login").then((res) => {
        setisAuth(true)
        etUserInfo(res.user)
    })
}
const logout = () = > {
    // logout request
    fetch("/logout").then((res) => {
        setisAuth(false)
        etUserInfo(null)
    })
}

// Value object with all the relvant information you might want to access in your project
const value = {
    userInfo,
    setUserInfo,
    isAuth,
    setIsAuth,
    login,
    logout
}

// don't wrap components in the context in a single file, instead you return this and then import it into the component that needs it

return (
    <UserContext.Provider value={value}> 
        {children}
    </UserContext.Provider>
)
}
```

#### Best Practice 2: Avoid Unnecessary RE-renders:
 If any one of the values from the <Context.Provider> change, all children that consume the context via useContext() will re-render, even if they consume a different value than the on that changed.
 
 Soemtimes prop-drilling is better than causing unnecessary re renders. 

*You should be using context only for states that are necessary throought the app or children and do not change frequently* - for example, the user, their authentication status, their permissions status etc... 

BUt using feature specific contexts can still cause re-rendering issues, you want to cause that as little as possible. 

Alternatives to Context API? This guy says Redux and RTK, recoil, zustand (some of which have smaller bundle size than Redux)

This guys- if creating an app that doesnt use GraphQL, use contexts for user, auth etc, and a fetching library (SWR, React Query, Axios(?))

Caching .... ?????

if you have grandchild components that need acces to a grandparent state, prop drill. It's an 'anti pattern' that you may have to do sometiems, but you can create and organize your components so that this isnt necessary. 

REACT DOCS: COMPONENT COMPOSITION IS OFTEN A SIMPLER SOLUTION THAN CONTEXT.

Michael Jackson: COntext is like an implicit prop. You can avoid the issues with this by simply writing more explicit code. 
Highly underappreciated and underused React prop: children!
The children prop is the key to much of component composition, and avoiding prop drilling.
CARD FOR CHILDREN PROP HERE:
 Simply pass the value needed into the uppermost Prop where its needed ("Lifting State Up")
 instead of prop drilling through intermediate children until you get to the one(s) that need that property value, you can pass the { children } prop into the intermediate components render it within the intermediate's return statement. 

```js
const DeeplyNestedComponent = ({children}) => {
<div>
    <h1> This is an H1 </h1>
    {children}
<div>
}
```
Context really not NEEDED unles building libraries (REact Router etc) or truly GLOBAL data (theme, language, userSettings, etc (+auth?))




 To avoid this, you can use the useMemo hook to memoize the context value:

 






#### Explanation:

<br>

#### Use:

<br>

#### Example:

<br>

```ts
// Place code here- change language abbreviation above for Syntax highlighting (html, css, js, ts etc)
```

# react_context_3

_react_context_3_

%

# react_context_4

_react_context_4_

%

# react_context_5

_react_context_5_

%

# react_context_6

_react_context_6_

%

# react_context_7

_react_context_7_

%

# react_context_8

_react_context_8_

%

# react_context_9

_react_context_9_

%

# react_context_10

_react_context_10_

%

# react_context_11

_react_context_11_

%

# react_context_12

_react_context_12_

%

# react_context_13

_react_context_13_

%

# react_context_14

_react_context_14_

%

# react_context_15

_react_context_15_

%

# react_context_16

_react_context_16_

%

# react_context_17

_react_context_17_

%

# react_context_18

_react_context_18_

%

# react_context_19

_react_context_19_

%

# react_context_20

_react_context_20_

%

# react_context_21

_react_context_21_

%

# react_context_22

_react_context_22_

%

# react_context_23

_react_context_23_

%

# react_context_24

_react_context_24_

%

# react_context_25

_react_context_25_

%

# react_context_26

_react_context_26_

%

# react_context_27

_react_context_27_

%

# react_context_28

_react_context_28_

%

# react_context_29

_react_context_29_

%

# react_context_30

_react_context_30_
