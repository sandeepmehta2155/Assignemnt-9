// Javascript Assignment 9

// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

function OuterFunction() {
  var outerVariable = 100;
  function InnerFunction() {
    alert(outerVariable);
  }
  return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

// Answer
// => a) Yes

// => b) alert outerVariable 100 if it runs in browser


// ------------------------------------------------------------------------------------------------

// 2. What is the difference between a closure and a scope ?

// Answer
// =>

/*
    # Closure :
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/


/*
    # Scope :
   The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

    JavaScript has the following kinds of scopes:

    1) Global scope: The default scope for all code running in script mode.
    2) Module scope: The scope for code running in module mode.
    3) Function scope: The scope created with a function.
    In addition, variables declared with let or const can belong to an additional scope:

    Block scope: The scope created with a pair of curly braces (a block).

*/

// ------------------------------------------------------------------------------------------------

// 3. What is a lexical scope and how is it related to closure?
// Answer
// =>

/*
    # LexicalScope :
    Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function. The diagram below outlines the supposed hierarchy that the lexical scope maintains in JavaScript.
/*

// ------------------------------------------------------------------------------------------------

// 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// Answer
// =>

/*
After 1 sec

3
3
3
*/
