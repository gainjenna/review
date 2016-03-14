// General Notes											rev. 5

// READ EVERYTHING CAREFULLY!
// Understanding these problems and solutions is critical to your goal of becoming a software engineer 
// Take your time and really understand what's going on!
// Check your syntax
// Indent properly
// Add comments to show your understanding
// Write some simple tests, if possible 
// Run your code, if possible – maybe in a REPL


// Refresher Problems

// Explain what this code outputs and why:

var i;
for (i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i);

//0
//1
//2
//3
//4
//5

// The loop works like this: var i is set to 0; we never touch that statement again. 
//Then the loop checks if i is less than 5. If it is, the block of code in the brackets gets executed. Then, i is incremented. When the loop gets to 4, it finds that 4 is less than 5, logs it, then increments i to 5. The loop checks one last time to see if 5 is less than 5. It’s not, so we break out of the loop. I is still officially 5 though, so when it gets console.logged after the loop, 5 is produced.

// Explain what this code outputs and why:

var count = 0;
console.log('before');
for (var i = 0; i < count; i++) {
  console.log('during');
}
console.log('after');

//’before’
//’after’

// Count is set to 0. ‘Before’ is logged. The for loop sets i to 0 and then checks if it, 0, is less than count, 0. 
// It’s not, so we break out of the for loop, and then log ‘after.’

// Write a function that uses a for loop and:
// Takes as its only argument an array of numbers (values)
// Returns the sum of all the values in the array, excluding the first two and last two values in the array
// Returns 0 if the array contains 4 or fewer values

  	
    var func = function(array){
      
      var newArray = array.slice(2, array.length - 2);
      if (newArray.length <= 4){
        return 0;
      } else {
          var sum = 0; 
          for (var i = 0; i < newArray.length; i++){
            sum += newArray[i];
          }
        return sum;
      }
    };


// Write a new function for the previous problem using _.reduce (which can also use _.each, if desired)


var func = function(array){
  var newArray = array.slice(2, array.length - 2);
  if (newArray.length <= 4) {
    return 0;
  } else{
    return _.reduce(newArray, function(accumulator, value){
      return accumulator += value;
    });
  }

};


*****************

// Using _.reduce, write a function that:
// Takes as its input an array of integers (whole numbers)
// Returns an array containing two values where:
// The first value is the count of all the even numbers in the original input array
// The second value is the count of all the odd numbers in the original input array
// Your function should only call _.reduce once

var func = function(array){
  var evens = 0;
  var odds = 0;
  _.reduce(array, function(accumulator, value){
    if (value % 2 === 0){
      return evens++;
    } else {
      return odds++;
    }
  }, true);

  return "evens: " + evens + " odds: " + odds;  
};


//Explain whether this is a good or bad way to check if an argument was passed to a function and why:

var fn = function(foobar) {
  if (!foobar) {   // <- is this good or bad?
    console.log('wasn\'t passed foobar');
  }
};

// This is a bad way to check if an argument was passed to a function because foobar could be a falsy value to 
// begin with, such as false, 0, "", null, undefined, or NaN. If the value is falsy, the above function will return 
//false even though you provided an argument.


// Look at the following code and explain what's assigned to the variable “foo” and what's assigned to the variable “bar”:

var fn = function() {
  console.log('hello world');
};
var foo = fn;
var bar = fn();

// function(){
//   console.log('hello world');
// }
// Is assigned to foo. 
// Assigned to the variable bar is an immediately invoked function that will produce 'hello world'; but will not store that side effect 
// anywhere because it is immediately invoked and the definition of the function isn't being stored anywhere

// Explain clearly what this does, why it works, and when you would use it:

var args = Array.prototype.slice.call(arguments);


// The above takes the arguments that are passed into a function and copies them into an array. In order to invoke slice on the 
// arguments "array", you need to use call to bind this to arguments so the function knows what object it is slicing.  
// You would use this when you needed to work with all or some of the arguments passed into a function.


// Write a function called "plusOne" that:
// Takes another function as its only argument – we can call that argument "origFn"
// Assume that any function that would be passed to plusOne as origFn takes some arguments and returns a number
// Returns a new function such that:
// When the new function is called with some arguments, it will return whatever number origFn would return for those same arguments, plus 1
// Here''s an example to show how plusOne could be used:
// var addThem = function(a, b) {
//   return a + b;
// };
// var addThemPlus1 = plusOne(addThem);
// console.log(addThemPlus1(7, 4));	// should log 12



var plusOne = function(origFn){

return function() {
      return origFn.apply(this, arguments) + 1;
      }
};


// Write a function to solve the following problem:
// A robot can move (step) in 4 directions: north, west, south, and east (N,W,S,E)
// Use recursion to output all permutations of directions the robot can make in 3 moves
// As an example of the expected output for 2 moves, the robot can go:
// NN, NW, NS, NE, WN, WW, WS, WE, SN, SW, SS, SE, EN, EW, ES, EE
// The expected output for 3 moves would start something like this:
// NNN, NNW, NNS, ….


var func = function(){

  var possibilities = ['N', 'S', 'E', 'W'];
  var stepCombinations= [];

  var recurse = function(string){
 
    if (string.length === 3){
     
      stepCombinations.push(string);
      return;
    }

    for (var i = 0; i < possibilities.length; i++){
      recurse(string + possibilities[i]);
    }
  };

  recurse("");
  return stepCombinations; 

 };





// Look at the following code and explain why it logs “this === window”:

var obj = {
  logIt: function() {
    if (this === obj) {
      console.log('this === obj');
    } else if (this === window) {
      console.log('this === window');    
    } else {
      console.log('this === ???');      
    }
  }
};

var fn = obj.logIt;

fn();

// The function is called in the global space, so this refers to the window.


// Look at the following code (similar to above) and without changing obj, refactor what's'
//  passed to setTImeout so that, when executed, the code logs “this === obj”:

var obj = {
  logIt: function() {
    if (this === obj) {
      console.log('this === obj');
    } else if (this === window) {
      console.log('this === window');    
    } else {
      console.log('this === ???');      
    }
  }
};

var fn = obj.logIt;

setTimeout(obj.fn, 100);

// Figure out what this code logs and explain why:

var i = 123;
var fn = function() {
  console.log(i);
};
i = 7
setTimeout(fn, 1000);
i = 42;
setTimeout(fn, 1000);


//It logs 
//42
//42
//because while the first setTimeout is waiting 1000 seconds, the rest of the code runs, including i being assigned to 42.


Figure out what this code logs and explain why:

var n = 6;
var fn = function(value) {
  value++;
};
fn(n);
console.log(n);


//It logs 6 because 6 is passed by copy into fn. Only the copy is altered inside the function.



Figure out what this code logs and explain why:

var a = [6];
var fn = function(array) {
  array[0]++;
};
fn(a);
console.log(a);

//7, because arrays are passed by reference, and in fn, the first value is incremented by 1, which affects the object.

// Figure out what this code does and explain why:

var fn = function() {
  console.log('hi');
};
var wow = fn;
fn = undefined;
wow();
fn();

//wow would console.log 'hi', because it was assigned fn's original value and it still holds the reference to the function,
// whereas fn is now undefined and would throw an error vecause you're trying to invoke it.

Do the following: 

//Write a function that, given a string, outputs (logs) a separate count for each (English language) 
//vowel in the string ('a', 'e', 'i', 'o', 'u' – ignore 'y') – consider upper and lower case letters to be the same
// – you can suppress outputting any vowel counts that are zero

Example:
Input: "Hello There!!!"
Output:
		e: 3
		o: 1


var func = function(string){
  //turn the letters to all lower case
  var lowerCased = string.toLowerCase();
  var vowels = {};
    vowels['a'] = 0;
    vowels['e'] = 0;
    vowels['i'] = 0;
    vowels['o'] = 0;
    vowels['u'] = 0;

//iterate through all the letters
  for (var i = 0; i < lowerCased.length; i++){
    if (lowerCased[i] === "a"){
      vowels['a'] += 1;
    }
    if (lowerCased[i] === "e"){
      vowels['e'] += 1;
    }
    if (lowerCased[i] === "i"){
      vowels['i'] += 1;
    } 
    if (lowerCased[i] === "o"){
      vowels['o'] += 1;
    } 
    if (lowerCased[i] === "u") {
      vowels['u'] += 1;
    }   
  }
  return vowels;
}

Write another function that, given a string, outputs a separate count for each (English language) consonant in the string (all the letters except 'a', 'e', 'i', 'o', 'u' – also, no spaces, numbers, or punctuation) – consider upper and lower case letters to be the same – you can suppress outputting any consonant counts that are zero
Example:
Input: "Hello There!!!"
Output:
	h: 2
	l: 2
	r: 1
	t: 1


var func = function(string){

  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var lowerCased = string.toLowerCase();
  var results = {};

  for (var i = 0; i < lowerCased.length; i++){
    if (consonants.indexOf(lowerCased[i]) !== -1) {
      if (results[lowerCased[i]] === undefined){
        results[lowerCased[i]] = 1;
      } else {
        results[lowerCased[i]] += 1;
      }
    } 
  }
  return results;
};




__________________________________________________________

// Recursion Div

// Accepts a DOM element and returns true if the element contains a total of
// five or more `div` descendant elements (children, grandchildren, etc.) and
// false if it contains fewer than five `div` descendant elements.

var containsFiveOrMoreDivs = function(domElement) {
  var count = 0;

  var recurse = function(domElement){
    if(domElement.tagName === 'DIV'){
      count++;
    }
    for(var i = 0; i < domElement.children.length; i++){
      recurse(domElement.children[i]);
    }
  }
recurse(document.body);
return count >= 5;
};

// For underbar-contains:
// Write this using _.each
// Don't use .indexOf
// Note that the _.each callback should not return any value (it would be completely ignored by _.each)

var _ = {};

(function() {
  /**
   * Returns true if `value` exists in `list`.
   */

  _.contains = function(list, target){
      var flag = false;
    _.each(list, function(value){
    if (value === target){
      flag = true;
    }
    });
    return flag;
  };

  /**
   * You might find the `_.each` function useful for writing `contains`.
   * Complete the `underscore-each` task first, and copy that function into this file.
   */
  _.each = function(collection, iterator) {

    if (Array.isArray(collection)) {
      for (var index = 0; index < collection.length; index ++) {
      iterator(collection[index], index, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }

   };

}).call(this);


// For underbar-defaults:
// Recall the the first argument is the “destination” object and the all the remaining arguments are the “source” objects
// Write this using _.each

var _ = {};

(function() {
  _.defaults = function(obj) {
    _.each(arguments, function(allObjects){
      _.each(allObjects, function(value, key){
        if (obj[key] === undefined) {
          (obj[key] = value)
        }
    })
  });
    return obj;
  };
  /**
   * You might find the `_.each` function useful for writing `defaults`.
   * Complete the `underscore-each` task first, and copy that function into this file.
   */
 _.each = function(collection, iterator) {

    if (Array.isArray(collection)) {
      for (var index = 0; index < collection.length; index ++) {
      iterator(collection[index], index, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }

   };


}).call(this);

// For underbar-once:
// Read the instructions carefully!
// When invoked, it should return a “new” function
// Make sure you understand what happens when the “new” function is invoked
// Add lots of comments to your code that clearly show that you understand how _.once works 

var _ = {};

(function() {
  _.once = function(func) {
    var wasCalled = false;
    var result;
    return function() {
      if (!wasCalled) {
        result = func.apply(this, arguments);
        wasCalled = true;
      }
      return result;
    };
  };
}).call(this);

// For ds-hash-table:
// For each slot in the hash table array that needs to contain a value, 
// make sure to create a sub-array in that slot for collision values, if it doesn't already exist

var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      
      return this._storage[hashFn(key, max)];
    },

    insert: function(key, value) {

      this._storage[hashFn(key, max)] = value;
    }

  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

// For js-array-extensions:
// Test your code!
//  Extend the native Array class to have these useful functions:
// .first - Returns the first element of the array
// .last - Returns the last element of the array

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.last = function(){
  return this[this.length - 1];
};


// For underbar-reduceright:
// For this exercise, only an array will be passed as the collection and don't worry about the 
// case where no memo argument is passed (assume a memo argument will always be passed)
//  Implement a reduceRight function
// Do not use any external function calls (even to helpers) within your implementation.
// reduceRight behaves much the same as _.reduce, but traverses the target in the opposite direction.
// Remember that _.reduce behaves differently if you do not provide it a memo argument:
// If no memo is passed, the last element is used and is never passed to the iterator.
// Note: your function only needs to work correctly on arrays.


var reduceRight = function(array, iterator, accumulator){
  var flag = accumulator.length == 2;

for (var i = array.length - 1; i >= 0; i--){
    if (flag){
      accumulator = array[array.length - 1]
      flag = false;
    } else{
      accumulator = iterator(accumulator, array[i]);
    }
  }
  return accumulator;
};