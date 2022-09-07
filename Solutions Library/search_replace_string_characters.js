/* If you want to replace characters in a string, the most efficient way to do it is usually regex, with replace() or replaceAll(), with Regular Expressions

Good explanation can be found here:
----  https://www.freecodecamp.org/news/javascript-replaceall-replace-all-instances-of-a-string-in-js/  ----


-Regex, indexOf(), lastIndexOf(), and the Set() object are all key methods for such problems.
-------------------------------------------

*/
// The most succinct way is usually regex. You can use a combination of .slice() on the string and regex to replace string characters as follows:

    str.slice(0, -4) //returns all of the string/Array but the last four characters/elements
    str.slice(-4)    //returns the last four characters/elements of the string/Array 
    .replace(/./g, '#') //replaces all characters ('.' in regex mwith global flag), with '#'
     

/*
-------------------------------------------  REGEX  ---------------------------------------------------------

-/d is used to match any digit
-/D matches any character that isn't a digit
-you can use * to match 0 or more occurrences of the preceding character; /*a/ means match 0 or more 'a's
-/b means do not start amtching in the middle of hte word, so only searches for words starting with the specified letter
USE -the case flag -i means you can replace case-insensitive patterns


----------------------------------------  .replaceAll() ----------------------------------------------------
.replaceAll() method syntax:

string.replaceAll(pattern, replacement)
    pattern is the first parameter, which can be a substring or a regular expression - this refers to the item you want to change and replace with something else.

    replacement is the second parameter, which can be another string or a function to replace pattern.

    you can use regex to define the pattern you want to match, but must use the g (global) flag

------------------------------------  .replaceAll() & REGEX  ----------------------------------------------------

To use .replaceAll() & regex to replace every single occurrence of a character or string, use the following syntax: string.replaceAll(/pattern/g, replacement)

To use .replaceAll() & regex to replace characters or strings independent of case,  use the global and i (insensitive case) flags

.replaceAll(/pattern/gi, replacement)

-------------------------------------  The Set() Object and Spread Operator -------------------------------------------

-we use the Set() constructor with Spread syntax (...)

        =Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. 
        Because each value in the Set has to be unique, the value equality will be checked.

        -This creates an array from the string paramater, but an array with unique values, because it's a set Object

        -Spread syntax (...):
                Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

*/

const set = [...new Set(word)]