// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let cardNumberPrefix = findCardNumPrefix(cardNumber);
  let cardNumberLength = findCardNumLength(cardNumber);
  let network = '';

  if((cardNumberPrefix === 38 || cardNumberPrefix === 39) && cardNumberLength === 14){
  	
  	network = "Diner's Club";
  	
  } else if((cardNumberPrefix === 34 || cardNumberPrefix === 37) && cardNumberLength === 15){
  	
  	network = 'American Express';
  	
  }

  return network;
};

//find the prefix using findCardNumPrefix() function
function findCardNumPrefix(cardNumber){
	let cardNumberPrefix = cardNumber.slice(0, 2);
	let cardNumberPrefixInt = parseInt(cardNumberPrefix);

	return cardNumberPrefixInt;
}

//find the length using findCardNumLength() function
function findCardNumLength(cardNumber){
	return cardNumber.length;
}

console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('373456789012345'));
console.log(detectNetwork('38354567890123'));
console.log(detectNetwork('39314567890123'));

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

// add a third validation for visa checking the first number of the dual prefix checked and the length
// add a fourth validation for MasterCard checking two numbers (regural) and the length