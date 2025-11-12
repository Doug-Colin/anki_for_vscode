### CS Theory 

# banki_technical_CS_Theory_1
*banki_technical_CS_Theory_1*

What is recursion and give an example using javascript?
%
- **Explanation:** Recursion is when a function calls itself within its own body. Besides the recursive call, it should always have a base case which stops it from calling itself to prevent infinite loops.
<br>
- **Use:** Recursion is made for solving problems that can be broken down into smaller, repetitive problems. It is especially good for working on things that have many possible branches and are too complex for an iterative approach.
<br>
- **Example:** A classic example is computing a factorial given a number `num`:

```js
function factorial(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}
```

**Source:** https://developer.mozilla.org/en-US/docs/Glossary/Recursion

# banki_technical_CS_Theory_2
*banki_technical_CS_Theory_2*

What are types?
%
  - **Explanation:** Types, also called data types, each have a unique set of rules/instructions of what can and can't be done with it.
  <br>
  - **Use:** Types are necessary so that the computer knows how to handle data when trying to do an operation with it.
  <br>
  - **Example:** A few data types that are shared by most programming language are:
    - Boolean (ex. true or false)
    - String ("hello world")
    - Float (3.1415)
  <br>
  - **Source:** https://www.youtube.com/watch?v=A37-3lflh8I

# banki_technical_CS_Theory_3
*banki_technical_CS_Theory_3*

What are data structures?
%
  - **Explanation:** Data structures is storage that is used to store and organize data. It is also a way of arranging data on a computer in such a way that it can be updated and accessed efficiently.
  <br>
  - **Use:** Data structures are not only used for processing, retrieving, and storing data, but also organizing the data into more readable ways.
  <br>
  - **Example:** There are many types of data structures, all classified as either linear or non-linear. The following are some examples:
    - Linear Static Data Structures (Arrays)
    - Linear Dynamic Data Structures (Queue, Stack, Linked List)
    - Non-linear Data Structures (Tree and Graphs)
  <br>
  - **Source:** https://www.geeksforgeeks.org/data-structures/

# banki_technical_CS_Theory_4
*banki_technical_CS_Theory_4*

What is an algorithm?
%
  - **Explanation:** In literal terms, an algorithm is a set of rules to be followed in calculations or other problem-solving opterations or a procedure for solving a mathematical problem in a finite number of steps that frequently by recursive operations.
    In other words, an Algorithm refers to a sequence of finite steps to solve a particular problem.
  <br>
  - **Use:** Algorithms can be used for many things such as building a solution by searching all available solutions, searching, and sorting.
  <br>
  - **Example:**
    - Breadth First Search Algorithm
    - Recursive Algorithms
    - Brute Force Algorithms
  <br>
  - **Source:** https://www.geeksforgeeks.org/introduction-to-algorithms/

# banki_technical_CS_Theory_5
*banki_technical_CS_Theory_5*

What is scope / lexical scope in javascript?
%
  - **Explanation:** Scope refers that the accessibility of variables, depending on where they are declared in the code they are “visible” and thus can be called. Lexically scoped variables can only be called from within the block of code they are defined, generally speaking inside of a function.
  <br>
  - **Use:** It is used to avoid scope pollution, or unwanted invoking of variables
  <br>
  - **Source:**

# banki_technical_CS_Theory_6
*banki_technical_CS_Theory_6*

What is polymorphism?
%
  - **Explanation:** Polymorphism is a concept of Object-oriented programming(OOP) Paradigm that provides a way to perform a single action in different ways.
  <br>
  - **Use:** It provides an ability to call the same method on different JavaScript objects
  <br>
  - **Example:**

  ```javascript
  class A {
    display() {
      console.log('A is invoked');
    }
  }

  class B extends A {}

  class C extends A {
    constructor() {
      super();
    }

    //overrides the display function of A and hence behaves differently
    display() {
      console.log('C is invoked');
    }
  }
  var b = new B();
  var c = new C();
  b.display(); //output: :"A is invoked"
  c.display(); //Output: "C is invoked"
  ```

  <br>
  - **Source:**https://www.javatpoint.com/javascript-oops-polymorphism, www.stackOverflow.com

# banki_technical_CS_Theory_7
*banki_technical_CS_Theory_7*

What is encapsulation?
%
  - **Explanation:** A tenet of OOP, it is the wrapping up of data under a single unit, those being variables, and functions acting on those variables. In JS this is accomplished with objects and constructor functions
  <br>
  - **Use:** Its main benefit is it allows your code to be more readable, and robust against errors.
  <br>
  - **Example:**

  ```javascript
  class Person {
    #name = 'Nathan';

    getName() {
      return this.#name;
    }

    setName(name) {
      this.#name = name;
    }
  }
  ```

  <br>
  - **Source:**https://www.javatpoint.com/javascript-oops-encapsulation

# banki_technical_CS_Theory_8
*banki_technical_CS_Theory_8*

What is a Linked List?
%
  - **Explanation:**
    It is a linear data structure similar to an array, except that elements are not stored on a particular memory location or index but instead represent separate objects containing a reference to the next item on the list
    Elements (commonly called nodes) contain two items: the data and the link to the next node. The data can be of any type.
    In a linked list, the head refers to the first node of the list. Null refers to the last node of the list. If the list is empty, the head is null.
    There are 3 Types: Singly, Doubly and Circular Linked List.
  <br>
  - **Use:** The DOM, Blockchains, Prototypal Inheritance, Image Viewer, Music Payer and Previous And Next Page...
  <br>
  - **Example:**

  ```javascript
  const linkedList = {
      head: {
          value: 1
          next: {
              value: 2
              next: {
                  value: 12
                  next: {
                      value: 4
                      next: null
                      }
                  }
              }
          }
      };
  ```

  <br>
  - **Source:** Implementing A Linked List https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

# banki_technical_CS_Theory_9
*banki_technical_CS_Theory_9*

What is a Doubly Linked List?
%
  - **Explanation:** It is pretty much the same as a linked list, only each node also has a pointer to the previous node and also has a null head pointer. It makes it easier to traverse the nodes and delete items, though they require more space, and take longer due to the extra pointers.
  <br>
  - **Use:** They are used in stacks, hash tables, and binary trees.
  <br>
  - **Example:**

  ```javascript
  const morningRoutine = {
    value: 'Make Bed',
    previous: null,
    next: {
      value: 'Drink Tea',
      previous: `<REFERENCE TO NODE MAKE BED>`,
      next: {
        value: 'Brush Teeth',
        previous: `<REFERENCE TO NODE DRINK TEA>`,
        next: null,
      },
    },
  };
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/doubly-linked-list/

# banki_technical_CS_Theory_10
*banki_technical_CS_Theory_10*

What is a Queue?
%
  - **Explanation:** A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).
  <br>
  - **Use:** Queue is used when things don't have to be processed immediately, but have to be processed in First In First Out order like Breadth First Search.
  <br>
  - **Example:** The Event Loop Model prioritizes all the Jobs in a Job Queue.
  <br>
  - **Source:** https://www.geeksforgeeks.org/queue-data-structure/

# banki_technical_CS_Theory_11
*banki_technical_CS_Theory_11*

What is a Stack?
%
  - **Explanation:** A Stack is a linear data structure which follows a particular order in which the operations are performed. The order is LIFO(Last In First Out).
  <br>
  - **Use:** Stacks are used to implement functions, parsers, expression evaluation, and backtracking algorithms.
  <br>
  - **Example:** The Event loop uses call stack. Every time a script or function calls a function, it's added to the top of the call stack. Every time the function exits, the interpreter removes it from the call stack.
  <br>
  - **Source:** https://www.geeksforgeeks.org/stack-data-structure/

# banki_technical_CS_Theory_12
*banki_technical_CS_Theory_12*

What is a Hash Table?
%
  - **Explanation:** Also known as a hash map or dictionary, is a data structure that implements a set data type, in a structure that can map keys to values. In JS you can create them with objects as they offer an easy way to make key/value pairs. When a key is passed into the table the corresponding value is returned.
  <br>
  - **Use:** Hash tables are used in all manner of tasks, the most common however would be password verification
  <br>
  - **Example:**

  ```javascript
  function test() {
    var map = {
      m1: 12,
      m2: 13,
      m3: 14,
      m4: 15,
    };
    alert(map['m3']);
  }
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/hashing-data-structure/

# banki_technical_CS_Theory_13
*banki_technical_CS_Theory_13*

What is a Heap?
%
  - **Explanation:** They are binary tree-based data structures, Heaps come in one of two forms min-heaps, and max-heaps, the only difference between the two, min and max, is that the root node in max-heap is the biggest key working down, and min is the reverse, this must be recursively true for all sub-trees in that binary tree.
  <br>
  - **Use:** Heaps are generally used in priority queues. or to order statistics
  <br>
  - **Example:**

  ```
            10
          /     \
       15         30
     /    \      /    \
   40      50  100     40
          min heap

            100
          /     \
       40         50
     /    \     /     \
   10      15  50      40
          max heap
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/heap-data-structure/?ref=lbp

# banki_technical_CS_Theory_14
*banki_technical_CS_Theory_14*

What is a Trie?
%
  - **Explanation:** It is a type of tree data structure, they are used to store associate arrays where the keys are usually strings. They are often compared to hash tables, though some key differences are that.
    Nodes in the tree do not store keys, instead, they each store parts of keys, traversing down from the root node to a leaf allowing you to build the key as you progress, they also don't need to be a value at every node. Values are typically only associated with leaf nodes.
  <br>
  - **Use:** They are typically used for auto-complete.
  <br>
  - **Example:**

  ```
                       root
                    /    \    \
                    t    a     b
                    |    |     |
                    h    n     y
                    |    |  \  |
                    e    s  y  e
                 /  |    |
                 i  r    w
                 |  |    |
                 r  e    e
                         |
                         r
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/trie-insert-and-search/

# banki_technical_CS_Theory_15
*banki_technical_CS_Theory_15*

What is a Tree?
%
  - **Explanation:** Trees are non-linear data structures, they organize data hierarchically. They are a collection of nodes, that are linked via branches, each node branches to its child nodes. They are possibly the most commonly used data structure. You can think of it as a family tree, or company structure, branching down from the root node (CEO) to child nodes (managers) and terminating at leaf nodes(entry level employees)
  <br>
  - **Use:** The DOM, file management, and even machine learning decision-based algorithms.
  <br>
  - **Source:** https://www.programiz.com/dsa/trees

# banki_technical_CS_Theory_16
*banki_technical_CS_Theory_16*

What is a Binary Search Tree?
%
  - **Explanation:** A binary search tree, or "ordered binary tree" is a type of binary tree where the nodes are arranged in order: for each node, all elements in its left subtree are less than the parent node, and all the elements in its right subtree are greater than the parent node.
  <br>
  - **Use:** They are used to implement dictionaries, implement multilevel indexing in DBs. as well as Implementing search algorithms.
  <br>
  - **Example:**

  ```
            5
          /   \
        3      6
       /  \      \
     1     4      9

  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/binary-search-tree-data-structure/?ref=gcse

# banki_technical_CS_Theory_17
*banki_technical_CS_Theory_17*

What is a Disjoint Set?
%
  - **Explanation:** Disjoint-set is a data structure that keeps track of a elements broken down into sets, of which each set is unique. It is useful for keep track or elements as you can compare sets to see what set they belong to. They are two main functions used on these sets, being union and find.
  <br>
  - **Use:** The uses for this data structure are compilers and symbolic computation
  <br>
  - **Source:** https://www.oodlestechnologies.com/blogs/understanding-disjoint-set-and-their-use-cases-in-computer-science/#:~:text=1It%20is%20used%20to,used%20in%20Maze%20generation%20problems

# banki_technical_CS_Theory_18
*banki_technical_CS_Theory_18*

What is a Bloom Filter?
%
  - **Explanation:** It is a probabilistic data structure that is execptionally space-efficient , it is used to check to see if an element is a member of a set. A common use case is checking the availability of a username, this approach is far more efficient than alternative solutions, however, since it is probabilistic it can return false positives so it is not suitable for mission-critical tasks. It is important to note that although it can give a false positives it is not possible to return a false negative.
  <br>
  - **Use:** This used to be used in search engines, and currently has found use in blockchain technology
  <br>
  - **Source:** https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/?ref=gcse

# banki_technical_CS_Theory_19
*banki_technical_CS_Theory_19*

Demonstrate Bubble Sort and explain when you might use it?
%
  - **Explanation:** A bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swaps them if they are not in the intended order. Order can be anything like increasing order or decreasing order.
  <br>
  - **Use:** It is generally considered a bad practice to implement this in most situations, though it is easy to implement so for a first-pass solution, on a small data set it can find use.
  <br>
  - **Example:**

  ```javascript
  function bblSort(arr){
    for(let i = 0; i < arr.length; i++){
      // Last i elements are already in place
      for(let j = 0; j < ( arr.length - i -1 ); j++){
        // Checking if the item at the present iteration
        // is greater than the next iteration
        if(arr[ j ] > arr[ j +1 ]){
          // If the condition is true then swap them
          let temp = arr[ j ]
          arr[ j ] = arr[ j + 1]
          arr[ j+1] = temp
        }
      }
    }
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/bubble-sort/?ref=gcse

# banki_technical_CS_Theory_20
*banki_technical_CS_Theory_20*

Demonstrate Insertion Sort and explain when you might use it?
%
  - **Explanation:** Insertion sort is a simple sorting algorithm that builds the final sorted array/list one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
  <br>
  - **Use:** It is very efficient in smaller data sets, especially if they are already mostly sorted.
  <br>
  - **Example:**

  ```javascript
  function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current < inputArr[j]) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = current;
    }
    return inputArr;
  }
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/insertion-sort/?ref=g

# banki_technical_CS_Theory_21
*banki_technical_CS_Theory_21*

Demonstrate Merge Sort and explain when you might use it?
%
  - **Explanation:** Merge sort is a sorting algorithm that uses the “divide and conquer” concept. Given an array, we first divide it in the middle and we get 2 arrays. We recursively perform this operation, until we get to arrays of 1 element. After divinding into its smallest units it starts merging the elements again based on their size.
  <br>
  - **Use:** It is one of the most respected sorting algorithms. Merge sort is more efficient and works faster than quick sort in case of larger array size or datasets.
  <br>
  - **Example:**

  ```javascript
  const _mergeArrays = (a, b) => {
    const c = [];
    while (a.length && b.length) {
      c.push(a[0] > b[0] ? b.shift() : a.shift());
    }
    // if we still have values, let's add them at the end of `c`
    while (a.length) {
      c.push(a.shift());
    }
    while (b.length) {
      c.push(b.shift());
    }
    return c;
  };

  const mergeSort = (a) => {
    if (a.length < 2) return a;
    const middle = Math.floor(a.length / 2);
    const a_l = a.slice(0, middle);
    const a_r = a.slice(middle, a.length);
    const sorted_l = mergeSort(a_l);
    const sorted_r = mergeSort(a_r);
    return _mergeArrays(sorted_l, sorted_r);
  };
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/merge-sort/?ref=gcse

# banki_technical_CS_Theory_22
*banki_technical_CS_Theory_22*

Demonstrate Quicksort and explain when you might use it?
%
  - **Explanation:** Quicksort is an in-place sorting algorithm. it is still a widely used algorithm for sorting. It picks an element as a pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.
  <br>
  - **Use:** It is used pretty much everywhere that doesnt require a stable sort.
  <br>
  - **Example:**

  ```javascript
  function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
  }

  let unsorted = [23, 45, 16, 37, 3, 99, 22];
  let sorted = quicksort(unsorted);

  console.log('Sorted array', sorted);
  ```

  <br>
  - **Source:** https://www.geeksforgeeks.org/quick-sort/?ref=gcse
