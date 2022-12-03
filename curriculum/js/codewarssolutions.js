"use strict";
/*Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
   var temp  ;
  
     for (var i=0; i<args.length; i++){
         if(args[i] <= args[0]){
             args[0]  = args[i];    
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

function basicOp(operation, value1, value2)
{
  let answer = 0;
  switch(operation){
      case '+':
        answer = value1 + value2;
        break;
      case '-':
        answer = value1 - value2;
        break;
      case '*':
        answer = value1 * value2;
        break;
      case '/':
        answer = value1 / value2;
        break;
  }
  return answer;
}
