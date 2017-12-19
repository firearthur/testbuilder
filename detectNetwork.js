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
  let slicedDinersPrefixes = [findCardNumPrefix(cardNumber, 2)];
  let slicedAmericanPrefixes = [findCardNumPrefix(cardNumber, 2)];
  let slicedVisaPrefixes = [findCardNumPrefix(cardNumber, 1)];
  let slicedMasterCardPrefixes = [findCardNumPrefix(cardNumber, 2)];
  let slicedDiscoverPrefixes = [findCardNumPrefix(cardNumber, 4), findCardNumPrefix(cardNumber, 3), findCardNumPrefix(cardNumber, 2)];
  let slicedMaestroPrefixes = [findCardNumPrefix(cardNumber, 4)];
  let slicedChinaUnionPayPrefixes = [findCardNumPrefix(cardNumber, 4), findCardNumPrefix(cardNumber, 3), findCardNumPrefix(cardNumber, 6)];

  let dinersQualifiedLengths = ['14'];
  let americanQualifiedLengths = ['15'];
  let visaQualifiedLengths = ['13', '16','19'];
  let masterCardQualifiedLengths = ['16'];
  let discoverQualifiedLengths = ['16','19'];
  let maestroQualifiedLengths = [...getSequencedArray(12, 19)];
  let chinaUnionPayQualifiedLengths = [...getSequencedArray(16, 19)];


  let cardNumberLength = findCardNumLength(cardNumber);
  let network = '';

  
  
  if((findPrefixNetwork(slicedDinersPrefixes) === "Diner's Club") && isQualifiedLength(cardNumberLength, dinersQualifiedLengths)){
  	
  	network = "Diner's Club";
  } else if((findPrefixNetwork(slicedAmericanPrefixes) === 'American Express') && isQualifiedLength(cardNumberLength, americanQualifiedLengths)){
  	
  	network = 'American Express';
  } else if((findPrefixNetwork(slicedVisaPrefixes) === 'Visa') && isQualifiedLength(cardNumberLength, visaQualifiedLengths)){
  	
  	network = 'Visa';
  } else if((findPrefixNetwork(slicedMasterCardPrefixes) === 'MasterCard') && isQualifiedLength(cardNumberLength, masterCardQualifiedLengths)){

  	network = 'MasterCard';
  } else if((findPrefixNetwork(slicedDiscoverPrefixes) === 'Discover') && isQualifiedLength(cardNumberLength, discoverQualifiedLengths)){

	network = 'Discover';
  } else if((findPrefixNetwork(slicedMaestroPrefixes) === 'Maestro') && isQualifiedLength(cardNumberLength, maestroQualifiedLengths)){
  	network = 'Maestro';
  } else if((findPrefixNetwork(slicedChinaUnionPayPrefixes) === 'China UnionPay') && isQualifiedLength(cardNumberLength, chinaUnionPayQualifiedLengths)){
  	network = 'China UnionPay';
  }

  return network;
};

//find the prefix using findCardNumPrefix() function
function findCardNumPrefix(cardNumber, numOfPrefixDigits){
	let cardNumberPrefix = cardNumber.slice(0, numOfPrefixDigits);

	return cardNumberPrefix;
}


function hasAnyNetworkPrefixes(networkPrefixes, prefixes){
	let hasAnyPrefixes = networkPrefixes.some((prefix) => {

		for (var i = 0; i < prefixes.length; i++) {
			if(prefix === prefixes[i]){

				return true;
			}
		}

	});

	return hasAnyPrefixes;	
}


function findPrefixNetwork(prefixes){
	let network = '';
	let dinersClubPrefixes = ['38','39'];
	let americanExpressPrefixes = ['34','37'];
	let visaPrefixes = ['4']
	let masterCardPrefixes = [...getSequencedArray(51, 55)];
	let discoverPrefixes = ['6011',...getSequencedArray(644, 649),'65'];
	let maestroPrefixes = ['5018', '5020', '5038','6304'];
	let chinaUnionPayPrefixes = [...getSequencedArray(622126, 622925),...getSequencedArray(624, 626),...getSequencedArray(6282, 6288)]; 
	

	if(hasAnyNetworkPrefixes(dinersClubPrefixes, prefixes)){
		network = "Diner's Club";

	} else if(hasAnyNetworkPrefixes(americanExpressPrefixes, prefixes)){
		network = 'American Express';

	} else if (hasAnyNetworkPrefixes(visaPrefixes, prefixes)){
		network = 'Visa';

	} else if(hasAnyNetworkPrefixes(masterCardPrefixes, prefixes)){
		network = 'MasterCard';

	} else if(hasAnyNetworkPrefixes(discoverPrefixes, prefixes)){
		network = 'Discover';

	} else if(hasAnyNetworkPrefixes(maestroPrefixes, prefixes)){
		network = 'Maestro';
	} else if(hasAnyNetworkPrefixes(chinaUnionPayPrefixes, prefixes)){
		network = 'China UnionPay';
	}

	return network;
}


function isQualifiedLength(length, qualifiedLengths){
	let isQualifiedNetworkLength = false;
	length = length.toString();

	if(qualifiedLengths.some((qualifiedLength) => {return qualifiedLength === length;})){
		isQualifiedNetworkLength = true;
	}

	return isQualifiedNetworkLength;
}

//find the length using findCardNumLength() function
function findCardNumLength(cardNumber){
	return cardNumber.length;
}

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

// detectNetwork('50180123456789123');

//write the tests for the two new cards
//create a function getPrefixRangeArray(beiginning,end) that takes a beginning and end ranges of a Prefix
//use the spread operator to dump the range arrays in the appropriate prefix arrays
//add support in every step of the way for the new cards China UnionPay and Switch
//create a function called isSwitch() which would find if the network of the card is switch and solve the 
//conflict by adding a condition in the visa if statement varification and setting up the value of network accordingly
//if the card number passes all condition for visa it might still be switch thats when you run the isSwitch function
//if it checks then you set teh network to switch instead
//you can add a micro performance booster at the last validation for switch to check if the network was already set to switch by the
//previous validation in the visa section and directly move from there to the network return value 



//current program state
//every card number starts with a 4 and has a length of 16 or 19 would should as Visa and Switch
//goal is to distinguish between both
//according to documentation in any conflict choose the network with the longer prefix (Switch) 

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.


function getSequencedArray(beginning, end){
  let sequencedArray = [];
  for(let i = beginning; i <= end; i++){
    sequencedArray.push(i.toString());
  }
  return sequencedArray;
}


