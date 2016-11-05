/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE 1 - works
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

function sum (array) {
  var accumulator =0;
  for (var i = 0; i< array.length; i++) {
    accumulator += array[i];
  }
  return accumulator;
};

var testarray = [1,2,3];
console.log(sum(testarray));

// WORKS but:
//if I don't put an intial value in for accumulator var (which I wanted to set to nothing
// because I wanted the empty case to be undefined in case the user doesn't enter an
// array of numbers). But the function doesn't work when I just use var accumulator
// without it being set initiallly to zero.



/*
----------------------------------------
CHALLENGE 2 - works
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(initialarray){
  var newarray = [];
  for (var i = 0; i < initialarray.length; i++){
    newarray.push(initialarray[i]*2);
  }
  return newarray;
}

var testarray = [1,2,3];
console.log(doubleNumbers(testarray));

// WORKS




/*
----------------------------------------
CHALLENGE 3 - works
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(initialarray, value){
    newarray = [];
    for (var i = 0; i < initialarray.length; i++){
      newarray.push(initialarray[i]*value);
    }
    return newarray;
  }

  var testarray = [1,2,3];
  console.log(multiplyNumbers(testarray, 5));


// WORKS




/*
----------------------------------------
CHALLENGE 4 - works
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters (string){
  var newstring = [];
  for (var i = 0; i<string.length; i++){
    newstring.push(string[i]);
    newstring.push(string[i]);
  }
  return newstring;
}

var teststring = "abc";
console.log(doubleLetters(teststring).join(""));


// WORKS
// FIXED IT FROM BEING AN ARRAY BY USING .JOIN("") TO SAY JOIN THEM WITH NOTHING
// IN BETWEEN (IT DEFAULTS TO A COMMA)



/*
----------------------------------------
CHALLENGE 5 - works
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave (string1, string2){
  var newstring = [];
  for (i = 0; i < string1.length; i++){
    newstring.push(string1[i]);
    newstring.push(string2[i]);
  };
  return newstring;
};

var teststringa = ["a", "b", "c"];
var teststringb = ["d", "e", "f"];
console.log(interleave(teststringa, teststringb));


// WORKS




/*
----------------------------------------
CHALLENGE 6 - works
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange (number, string){
  var newarray = [];
  for (i = 0; i < number; i++){
    newarray.push(string);
  };
  return newarray;
};

var teststring = "Hello";
console.log(createRange(4,teststring));

// WORKS




/*
----------------------------------------
CHALLENGE 7 - works
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

// function flipArray (array){
//   var object = new Object();
//   for (var i = 0; i < array.length; i++){
//     object.word = array[i];
//     object.number = i;
//   };
//   return object;
// };
//
// var testarray = ["quick", "brown", "fox"];
// console.log(flipArray(testarray));

// THIS IS JUST RETURNING THE LAST ITEM IN THE OBJECT. MUST REVIEW OBJECTS

function flipArray (array){
  var object = new Object ();
  for (i = 0; i < array.length; i++){
  object[array[i]] = i;
  }
  return object;
}
var testarray = ["quick", "brown", "fox"];
console.log(flipArray(testarray));

// WORKS

/*
----------------------------------------
CHALLENGE 8 - works
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(array1){
  var object = new Object();
  let a = array1[0][0];
  let b = array1[0][1];
  let c = array1[1][0];
  let d = array1[1][1];
  object[a] = b;
  object[c] = d;
  return object;
}
var testarray1 = [[2014, "Horse"],[2015, "Sheep"]];
console.log(arraysToObject(testarray1));


// WORKS



/*
----------------------------------------
CHALLENGE 9 - works
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/


function reverseString(string){
  var accumstring = [];
  for (i = 0; i < string.length; i++){
    accumstring.unshift(string[i]);
  };
  var reverse = accumstring.join("")
  return reverse;
};

var testword = "hello";
console.log(reverseString(testword));


//WORKS




/*
----------------------------------------
CHALLENGE 10
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string){
  if(string.length%2 !==0){  //!== means does not equal
    return false;
  }
  else {
    var half = string.length/2;
    var firstarray =[];
    var secondarray = [];
    for (i = 0; i<half; i++){
      firstarray.push(string[i]);
    };
    for (i = half; i<string.length; i++){
      secondarray.push(string[i]);
    };
    for(i = 0; i < half; i++){
      if((firstarray[i])!==(secondarray[i])){
        return false;
      }
      else{
        return true;
      };
      };
    };
  };

console.log(repeats("haha"));
console.log(repeats("yay"));
console.log(repeats("heehaw"));


//THE RESULTS ARE NOT CORRECT, AS I GET TRUE FOR "HEEHAW"



/*
----------------------------------------
CHALLENGE 11 - works
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string){
  var newarray = [];
  for (var i = 0; i < string.length; i+=2){
    newarray.push(string[i]);
  };
  var newstring = newarray.join("");
return newstring;
};

console.log((everyOther("abcdef")));


//WORKS



/*
----------------------------------------
CHALLENGE 12 - works
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(string){
  for (var i = 1; i < string.length; i++){
    var firstterm = string[0];
    if((string[i])!=firstterm){
      return false;
    } else {
      return true;
    };
  };
};

console.log(allEqual("aaa"));
console.log(allEqual("aba"));

//WORKS


/*
----------------------------------------
CHALLENGE 13 - works
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters(string){
  var accumulator = 0;
  for(i = 0; i < string.length; i++){
    accumulator += parseInt(string[i]); //HAD TO USE PARSEINT FOR IT TO RECOGNIZE IT AS A NUMBER NOT A STRING
  };
  return accumulator;
};

console.log(sumLetters("45"));
console.log(sumLetters("246"));


//WORKS



/*
----------------------------------------
CHALLENGE 14 - works
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
//
// function countVowels(string){
//   var vowels = ["a", "e", "i", "o", "u"];
//   var accumulator = 0;
//   for (i = 0; i < string.length; i++){
//     let current = string[i];
//     for(i = 0; i < 5; i++){
//       if(current == vowels[i].value){
//         accumulator +=1;
//       }else{
//         continue;
//       };
//     };
//   };
//   return accumulator;
// };
//
//
// console.log(countVowels("you"));

// function countVowels(string){
//   var accumulator = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (i = 0; i < string.length; i++){
//     if($.inArray(i, vowels) = true){
//       accumulator +=1;
//     }else{
//       continue;
//     };
//   };
//   return accumulator;
// };
//
// console.log(countVowels("you"));

function countVowels(string){
  var accumulator = 0;
  for(i = 0; i < string.length; i++){
    if(string[i] == "a"){
      accumulator++;
    }else if(string[i] == "e"){
      accumulator++;
    }else if(string[i] == "i"){
      accumulator++;
    }else if(string[i] == "o"){
      accumulator++;
    }else if(string[i] == "u"){
      accumulator++;
    }else{
      continue;
    };
  };
  return accumulator;
};

console.log(countVowels("you"));

// WORKS

/*
----------------------------------------
CHALLENGE 15 - works
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string){
  var newarray = [];
  for (i = 0; i < string.length; i++){
    newarray.push(string[i]);
  };
  return newarray;
}

console.log(split("you"));

//WORKS


/*
----------------------------------------
CHALLENGE 16
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string){
  var returnarray = [];
  for(i = 0; i < string.length; i++){
    returnarray.push(string.codePointAt(i));
  };
};

console.log(getCodePoints("Hello"));

// DOES NOT WORK





/*
----------------------------------------
CHALLENGE 17 - works
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/


function letterMap(string){
  var object = new Object();
  for (i = 0; i < string.length; i++){
    object[string[i]] = i;
  }
  return object;
}

console.log(letterMap("Yo"));
console.log(letterMap("Hello"));


//WORKS



/*
----------------------------------------
CHALLENGE 18
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

// function letterCount(string){
//   var object = new Object();
//   for(i = 0; i < string.length; i++){
//     let accumulator = 0;
//     let current = string[i];
//     for(i = 0; i < string.length; i++){
//       if(current == string[i]){
//         accumulator ++;
//       };
//     };
//     object[string[i]]=accumulator;
//   };
//   return object;
// };
//
// console.log(letterCount("Yo"));
// //





// function letterCount(string){
//   var object = new Object();
//   for (i = 0; i < string.length; i++){
//     let current = string[i];
//     let accumulator = 0;
//     for (i = 0; i<string.length; i++){
//       accumulator = string.match(/current/g||[]).length;
//     };
//     object[string[i]]=accumulator;
//   };
// };
//
// console.log(letterCount("Yo"));


//DOES NOT WORK



/*
----------------------------------------
CHALLENGE 19 - works
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2){
  var accumulator = 0;
  for(i = num1+1; i <num2; i++){
    if(i%2 != 0){
      accumulator ++;
    };
  };
  if (accumulator == 3){
    return true;
  }else{
    return false;
  };
};

console.log(threeOdds(0,2));
console.log(threeOdds(0,6));


//WORKS




/*
----------------------------------------
CHALLENGE 20 - works
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fill){
  var newarray = [];
  var numofchar = string.length;
  // if (string.length == length){
  //   return string;
  // }else
  for (i = 0; i<string.length; i++){
    newarray.unshift(string[i]);
  } for (i = string.length; i < length; i++){
    newarray.unshift(fill);
  };
  return newarray;
}

console.log((leftPad("a", 3, "*")).join(""));

//WORKS


/*
----------------------------------------
CHALLENGE 21 - works
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString (letter, number){
  var newarray = [];
  for (i = 0; i < number; i++){
    newarray.push(letter);
  };
  return newarray;
}

console.log((createString("a",3)).join(""));

//WORKS


/*
----------------------------------------
CHALLENGE 22 - works
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial (number){
  var accumulator = 1;
  for (i = number; i > 0; i--){
    accumulator *=i;
  };
  return accumulator;
};

console.log(factorial(4));
console.log(factorial(5));


// works


/*
----------------------------------------
CHALLENGE 23 - works
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number){
  var newarray = [];
  for (i = 1; i <= number; i++){
    newarray.push(i);
  };
  return newarray;
}

console.log(arrayOfNumbers(1));
console.log(arrayOfNumbers(3));

// works

/*
----------------------------------------
CHALLENGE 24
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(number){
  
}







/*
----------------------------------------
CHALLENGE 25
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/










/*
----------------------------------------
CHALLENGE 26
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/








/*
----------------------------------------
CHALLENGE 27
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/








/*
----------------------------------------
CHALLENGE 28
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/













/*
----------------------------------------
CHALLENGE 29
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/








/*
----------------------------------------
CHALLENGE 30
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/











/*
----------------------------------------
CHALLENGE 31
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/








/*
----------------------------------------
CHALLENGE 32
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/








/*
----------------------------------------
CHALLENGE 33
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/








/*
----------------------------------------
CHALLENGE 34
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/








/*
----------------------------------------
CHALLENGE 35
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/








/*
----------------------------------------
CHALLENGE 36
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/














/*
----------------------------------------
CHALLENGE 37
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/










/*
----------------------------------------
CHALLENGE 38
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/









//
