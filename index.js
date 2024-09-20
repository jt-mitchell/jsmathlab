// The initial numbers that must be verified.
//const n1 = 10;
//const n2 = 15;
//const n3 = 25;
//const n4 = 5;

// The new numbers that need to be verified;
const n1 = 7;
const n2 = 15;
const n3 = 25;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.

//Commenting out the below code as it is not in small parts

const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //Part 1



  //Part 2
  //Constants

const tripDist = 1500
const budget = 175
const gasPerGallon = 3

//Variables

// let cost55 = 90
// let cost60 = 84
// let costpergallon = 69

let trip1 = (tripDist / 55)
let trip2 = (tripDist / 60)
let trip3 = (tripDist / 75)

let mph55 = 30
let mph60 = 28
let mph75 = 23

let gallonsNeeded55 = (tripDist / mph55)
let gallonsNeeded60 = (tripDist / mph60)
let gallonsNeeded75 = (tripDist / mph75)

//console.log to test
console.log(gallonsNeeded55)



// print out trip1
console.log(trip1)


//How long will the trip take by mph
// console.log (`At 55 miles per hour, the trip will take ${gallonsNeeded55} hours`)
// console.log (`At 60 miles per hour, the trip will take ${gallonsNeeded60} hours`)
// console.log (`At 75 miles per hour, the trip will take ${gallonsNeeded75} hours`)

// //How many gallons of fuel will be needed
// console.log (`At 55 miles per hour, the trip will need ${trip1} gallons fuel`)
// console.log (`At 55 miles per hour, the trip will need ${trip1} gallons fuel`)
// console.log (`At 55 miles per hour, the trip will need ${trip1} gallons fuel`)

// Will the budget be enough to cover the entire expense?

console.log (`At 55 miles per hour, the trip will need ${trip1} gallons fuel`)
console.log (`At 65 miles per hour, the trip will need ${trip1} gallons fuel`)
console.log (`At 75 miles per hour, the trip will need ${trip1} gallons fuel`)



