
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

----------------------------------------------------

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
  


----------------------------------------------------

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


----------------------------------------------------

# Day 4

## FUNCTIONS


### FUNCTION DECLARATION:
    Normal functions which are widely used 
    In this hoisting is supported and use of this operator is allowed


### FUNCTION EXPRESSION
    The variable is declared to store the returned value of function
    Hoisting is not supported

### ARROW FUNCTION
    This returns the value implicitly 
    It does not support this keyword

- Functions can call another inside it with specific function name and parameters.

----------------------------------------------------

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

----------------------------------------------------

# Day 5

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