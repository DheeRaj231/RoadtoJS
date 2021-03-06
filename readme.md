# Day 1

- Data Types
  - number
  - string
  - nan
  - undefined
  - null
  - symbol
  - bigInt

### Dynamic Typing :

    JS is Dynamic Typing lang where the interpreter assigns variables a type at runtime based on the variable's value at the time.__

### Variable Declarations

- let
- var
- const

## Operators:

- Assignment operators
- typeof operator
- comparison operator
- Math operators

## Operator precedence:

- [Click on this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

# Day 2

## Template literals:

    (*) Template literals can contain placeholders.    These  are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

     NOTE: This is used for multi line strings.

## Conditional Statements(if/else)

    declaration of the variable shouldbe done outside the statements
    Else it shows reference error

## Type conversion

    Explicit conversion which is done by programmer
    Eg: string"" to Number

## Type Coerction:

    Implicit conversion which is automatic
    Eg:(-) converts string to number
       (+) converts input data  to string.

## falsy values:

     0,'',undefined,null,NaN
     used in conditional sattements

## Eqality Operators

    Strict Equality ===
    Loose Equality ==

## Difference Operator

     Strict !==
     Loose !=

- prompt

## Boolean Logic

    ________________________________________
    AND(&&) | ALL THE VALUES SHOULD BE TRUE
    _________________________________________
    OR(||)  | ANY ONE VALUE SHOULD BE TRUE
    ________________________________________________
    NOT(!)  | REVERSE THE VALUE
    ___________________________________________________

---

# Day 3

## Switch Statements

        switch (variable) {
            case 'varname':
                  //body;
                  break;
            default:
                 //statement;
        }

## ->Statement and Expression

    (*)expression produces value.
    (*)statement which does not produce value.

## Ternary operator

    condition ? if condition is true : if condition is false

    Note: Template String can be used inside ternary operators

## Strict Mode

    Js enables strict mode to avoid bugs.
    Eg: reference error, reserved words such as interface,private...

---

# Day 4

## FUNCTIONS

### FUNCTION DECLARATION:

    Normal functions which are widely used
    .In this hoisting is supported and use of this operator is allowed

### FUNCTION EXPRESSION

    The variable is declared to store the returned value of function
    Hoisting is not supported

### ARROW FUNCTION

    This returns the value implicitly
    It does not support this keyword

- Functions can call another inside it with specific function name and parameters.

---

# Day 5

## ARRAYS

     An array is a special variable, which can hold more than one value.Here the order of element matters i.e every element has index value based on their position in array.
     The base of index is 0.

     (*) We can replace an element of array but cannot replace complete array.
     (*) Nesting of array is possible.

- Adding element

  - PUSH
  - unshift

- Removing element

  - POP
  - shift

- includes : checks if particular element is present in the array and returns boolean value as result.

---

---

# Day 6

## OBJECTS

- Retriving data using dot and Bracket Notation
- Object Methods
  - function inside objects.
- This keyword
- Control Structure
  - for loop,while loop
- Break and continue
- Filling empty array
- Looping Backwards
- Nesting of loops
  <<<<<<< HEAD

---

# Day 7

- Developer Skills
- Prettier
- Configure Prettier
- Configure Snippet(vs code)
- use of Live-server, Node.js
- Learn how to code(Don't be John)
- Use Stack Overflow, google, MDN
- console (warn, error, table)
- Think Like a developer
- Debugger

---

# Day 8

- Basic HTML Structure and Elements
- Attributes, Classes and IDs
- Basic Styling with CSS
- CSS Box Models

---

# Day 9

- DOM (Document Object Model)
- document.querySelector('')
- .textContent, .value
- Dom Manipulation
- EventListner (addEventListner)
- State variable
- .style. propertyName = 'value';

---

# Day 10

- Code Refactoring (DRY)
- querySelectorAll('value')
- classList
  - add
  - remove
  - contains
  - toggle
- key Events
  - keydown
  - keypressed
  - keyup

---

# Day 11

## JS behind the scenes

- High Level Lang
  - no need to manage resource
- Garbage Collection
  - automatically clean the memory
- Just in time Compiled
  - It involves both Compilation and Interpretation
- Multi Paradigm
  - multiple style of coding
- Procedural prog
- Object oriented prog
- Function Prog
- First class function
  - function are treated as variables
- Dynamic
  - assigns types internally
- Single Threaded
  - Js runs on single thread,but task is processed in background
- Non Blocking event loop
  - It manages background process

#### NOTE:

     Js is not intrepreted language it is JUST IN TIME COMPILED LANGUAGE

### JS engine

    prog that executes js code
     V8 engine used for chrome and node js.

- JS engine

  - Call Stack
    - Code execution place(event loop calls the event)
  - Heap
    - Obj are stored

- Js run time in browser

  - js engine
  - web APIs
  - Call back Queue

- Execution context

  - Environment to execute js code
    - Varible Env
    - Scope Chain
    - this keyword

- Call Stack
  - Global()
  - First()
  - Second()
    - Executable context is place inside stack
    - EC that is on top is executed first

---

# Day 12

- Scope and Scope Chain
- Lexical Scoping
- Global Scope
- Function Scope
- Block Scope
- Scope of a variable
- Hoisting
- TDZ (Temproal Dead Zone)
- This Keyword
- Method Borrowing

- ## Hoisting
  |                                        | Hoisted                       | Initial Value   | Scope    |
  | -------------------------------------- | ----------------------------- | --------------- | -------- |
  | function Declaration                   | yes                           | actual function | block    |
  | var variables                          | yes                           | undefined       | function |
  | let and const Variables                | NO                            | uninitilized    | block    |
  | function expression and arrow function | Depends on let, var and const | -               | -        |

---

# Day 13

- Regular functions vs Arrow functions
- Argument Keyword
- const self = this; (used inside normal function to access the properties of the parent function)
- primitive vs reference types

### storage:

    * Premitive values are stored in call stack.
    * Ref value(objs) are stored in HEAP.

- object.assign({}, objname)

# Day 14

- Destructuring array
- Nested Destructuring
- Destructuring with default values
- Destructuring Objects
- Mutating variables (use () )

---

# Day 15

- Spread operator (...)
- Used for shallow copy and merge array
- Iterables: arrays, strings, maps, sets . NOT Objects
- Does not work in template literal
- Works on objects even through they are not iterable
- Rest pattern and parameters
- Only one rest variable and it must be last

- Short Circuting
  - Uses any Data type
  - Return any data type
- || (or)
- && (and)
- ?? (nullish coalesing)
- Logical assignment
  - ||=
  - ??=
  - &&=

---

# Day 16

- for of loop
  - can use break and continue
- Enhanced obj literal
- Optional Chaining (?.)
  - if value is not found it returns undefined
- looping objs,methods,arrays.

---

# Day 17

- SETS

  - no duplication.
  - cannot retrive particular value.
    - .size
    - .has
    - .add
    - .delete

- MAPS

  - map the values in key value,key has multiple type
  - iteration possible

    - .get
    - .set
    - .size

    - .has
    - .add
    - .delete

# Day 18

## Strings

- .length
- .indexOf()
- .lastIndexOf()
- .slice()
- .toLowerCase()
- .toUpperCase()
- .trim()
- .replace()
- .replaceAll() // ES20
- regular expression
- replace(/word/, 'newWord')
- .startsWith()
- .endsWith()
- .includes()
- .split()
- .join()
- .padStart()
- .padEnd()
- .repeat()

# Day 19

- Default Parameters
- ES5 usign ||
- ES6 (fname = "newname" )
- Key Points for default parameters
  - Order Matters while passing data
  - While passing arguments if you want to leave space then use undefined.
- JavaScript does not have pass by reference
- First class function and higher order function
- Function calling other functions like eventListeners

- Function accepting call back function
- function returning function
- call and apply method
- Bind Method
- Partial application
- ### Call, Apply and Bind Method
  | Call                                                                   | Apply                       | Bind                                    |
  | ---------------------------------------------------------------------- | --------------------------- | --------------------------------------- |
  | With call() we can make methods which can be used on different objects | Same as call                | It can borrow methods from other object |
  | - It takes differnt parameters as value                                | - It takes Array as a value | - It creates new object                 |

# Day 20

- IIFE
- Closures (Theory Lecture)
- console.dir()
- Simple Array methods
  - slice()
  - splice()
  - reverse()
  - concat()
  - join()
  - at()
  - forEach()
  - \_
  - insertAdjecentHTML

# DAY -21

- maps
- filter (condi)
- reduse
- find method
- findindex

# DAY -22

- parseInt
- isNaN
- isFinite
- sqrt()
- max()
- rounding numb

  - trunk
  - round
  - ceil
  - floor
  - tofixed

- remainder operator
- numeric seprators
- BigInt

# DAY -23

- Dates & Time
  - getFullYear();
  - getMonth
  - getDate
  - getDay
  - toISOString
  - setFullYear
- Internationalizing Date
- Internationalizing Number
- setTimeout
- setInterval.

# Day 24

- moment.js
- Internationalization Dates
- Internationalization Time
- SetTimeOut
- SetInterval
- ClearInterval and ClearTimeOut

---

# Day 25

- How the DOM works behind the scene
- Dom is the interface between JavaScript and Browser(HTML)
- Selecting, Creating and Deleting Element
- Attributes, Data Attributes
- Styling CSS

---

# Day 26

- Events in javaScript
- addEventListner
- ele.onmouseEnter
- \<h1 onlick = "hello">
- Event Propogation : Bubbling and Capturing
- whenever a event is activated it travels through all the parent element before reaching the eventNode
- It does not pass thorough any sibling elements
- current target
- target
- e.stopPropagation();

===================================================

# Day 27

- Event delegation
- DOM Traversing
  - Going Downwards: Selecting Childrens
    - querySelector
    - childNodes
    - children
    - firstElementChild
    - LastElementChild
    - firstChild
  - Going Upwards: Selecting Parents
    - parentNode
    - parentElement
    - closest()
  - Going Sideways: Selecting Siblings
    - previousElementSiblings
    - nextElementSiblings
    - previousSibling
    - nextSibling
- Tabbed Component

---

# Day 28

- Passing arguments to event handler
- Sticky Navigation
- Observer API
- new IntersectionObserver()..

# Day 29

- Revealing elements on scroll
- Lazy loading images
- building a slider component
- Life cycle DOM Events
- DomContentLoaded
- Load
- BeforeUnload
- e.returnValue = ''
- Effecient Script Loading: Defer ad async

---

# Day 30

- What is object oriented programming?
- The 4 fundamental principles of OOP

  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism

- Oop in Javascript?

  - Prototypes-Object are lined to a prototype object.
  - It's called prototypal inheritacne
  - Delegation

- 3 ways to implement Prototypal inheritance

  - 1. constructure function
  - 2. ES6 classes
  - 3. Object.create()

- Constructor function and new operator

- What happens when you create a constructor function.

  - 1. New {} is created
  - 2. Function is called, this = {}
  - 3. {} linked to prototype
  - 4. function automatically returns {}

- Note : constructor function is only possible for function expression and declaration and not for arrow funtion as arrow function does not have its own return type.

---

# Day 31

- Prototypes
  - Person.prototype.calcAge = function() {}
  - bishal.**proto**
  - isPrototypeOf()
  - hasOwnProperty()
- Prototypal Inheritance and the Prototype chain
- Prototype chain
- Prototypal Inheritance and the Prototype chain on Built in Objects.

---

# Day 32

- ES6 Classes
  - Class expression
  - Class declaration
- NOTE
  - 1. Classes are NOT Hoisted
  - 2. Classes are first class citizens
  - 3. Classes are executed in strict mode
- Setters and getters
  - set and get
- static methods and Instance method
- object.create() - used for inheritance.

---

# Day 33

- Inheritance between classes: Constructor function
- Inheritance between classes: ES6 classes
- Inheritance between classes: Object.create.
