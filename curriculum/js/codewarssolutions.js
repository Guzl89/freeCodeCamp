"use strict";
/*Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var temp;

    for (var i = 0; i < args.length; i++) {
      if (args[i] <= args[0]) {
        args[0] = args[i];
        temp = args[i];
      }
    }
    return temp;
  }
}

/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7*/

function basicOp(operation, value1, value2) {
  let answer = 0;
  switch (operation) {
    case "+":
      answer = value1 + value2;
      break;
    case "-":
      answer = value1 - value2;
      break;
    case "*":
      answer = value1 * value2;
      break;
    case "/":
      answer = value1 / value2;
      break;
  }
  return answer;
}

/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	             return
name equals owner	'Hello boss'
otherwise	        'Hello guest'*/

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}
const result = makeUpperCase("Hello everybody");
console.log(result);

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

