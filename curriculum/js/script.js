"use strict";

//Golf Code

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
}

console.log(golfScore(5, 4));

// switch exircise
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(4));

//switch exircise2

/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}

console.log(switchOfStuff(1));

//switch exircise3

/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High
Note: You will need to have a case statement for each number in the range.
*/

function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));

//switch statement
//Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  let answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}
chainToSwitch(7);

//solution

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch(7));

//Counting Cards

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
  return count;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//Build JavaScript Objects
/*Make an object that represents a dog called myDog which contains the properties name (a string), 
legs, tails and friends.You can set these object properties to whatever values you want, as long 
as name is a string, legs and tails are numbers, and friends is an array*/

const myDog = {
  name: "Karl",
  legs: 4,
  tails: 1,
  friends: [10],
};

//Accessing Object Properties with Dot Notation
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];

//Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj2[playerNumber];
console.log(player);

//Add New Properties to a JavaScript Object
const myDog1 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog1.bark = "woof";

//Testing Objects for Properties
function checkObj(obj, checkProp) {
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    city: "Seattle",
  };

  return obj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

//Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
   
  return result;
}
console.log(phoneticLookup("charlie"));

//Manipulating Complex Objects
  
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Bill Evans",
    "title": "Alone",
    "release_year": 1968,
    "formats": [
      "8T",
      "LP"
    ],
  }
];
 
 //Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);



//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record Collection

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
    
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', "ABBA");

//Iterate with JavaScript While Loops
//version1
const myArray1 = [];
var i = 5;
while (i > -1) {
    myArray1.push(i);
    i--;
 }
 console.log(myArray1);

//version2
 const myArray = [];
 var i = 0;
  while (i < 6) {
    myArray.push(i);
    i++;
  }
  myArray.reverse();
  console.log(myArray);