/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    // throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {
  var expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011012345678912')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011012345678912345')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6511012345678912')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6511012345678912345')).to.equal('Discover');
  });


  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '0123456789123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '0123456789123456')).to.equal('Discover');
      });
    })(prefix);
  }
});

describe('Maestro', function() {

  var expect = chai.expect;
  // Write full test coverage for the Maestro card
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  for (var length = 12; length <= 19; length++) {
    (function(length) {

      it('has a prefix of 5018 and a length of ' + length, function(){
        
        let cardNumber = '5018' + getPaddingString(length, 4);
        
        expect(detectNetwork(cardNumber)).to.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + length, function(){
        expect(detectNetwork('5020' + getPaddingString(length, 4))).to.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + length, function(){
        expect(detectNetwork('5038' + getPaddingString(length, 4))).to.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + length, function(){
        expect(detectNetwork('6304' + getPaddingString(length, 4))).to.equal('Maestro');
      });
      
    })(length);
  }
});




describe('should support China UnionPay',function(){
  let expect = chai.expect;

  let prefixesArray = [...getSequencedArray(622126, 622925),...getSequencedArray(624, 626),...getSequencedArray(6282, 6288)];
  let lengthsArray = [...getSequencedArray(16, 19)];

  prefixesArray.forEach((prefix) => {

    lengthsArray.forEach((length) => {
      
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        expect(detectNetwork( prefix + getPaddingString(length, prefix.length))).to.equal('China UnionPay');
      });      

    });

  });

});


describe('should support Switch',function(){
  var expect = chai.expect;

  let prefixesArray = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  let lengthsArray = ['16','18','19'];

  prefixesArray.forEach((prefix) => {

    lengthsArray.forEach((length) => {
      
      it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
        expect(detectNetwork( prefix + getPaddingString(length, prefix.length))).to.equal('Switch');
      });      

    });

  });


});




function getSequencedArray(beginning, end){
  let sequencedArray = [];
  for(let i = beginning; i <= end; i++){
    sequencedArray.push(i.toString());
  }
  return sequencedArray;
}

function getPaddingString(length, prefixLength){
  let paddingString = '';
  let lengthWithoutPrefix = length - prefixLength;

  for(var i = 0; i < lengthWithoutPrefix; i++){
    paddingString += Math.floor(Math.random() * 10);
  }
  return paddingString;
}


//*******algorithm********
//create a function getSequencedArray(beginning, end) that receives beginning of the sequence
//and end of sequence arguments and returns an array of the sequenced numbers 

//create and array prefixesArray of prefixes that has the network prefixes and uses 
//the getSequencedArray function to fill sequencial elements with the spread operator
//create and array lengthsArray of lengths that has the network lengths and uses 
//the getSequencedArray function to fill sequencial elements with the spread operator

//prefixesArray forEach(callback(prefix)) each prefix has to run test on all the network lengths
//so we would call lengthsArray forEach(callback(length)) and inside the callback function 
//we'd run our 'it' test using each prefix from the 
//prefixesArray => forEach => prefix and each length from lengthsArray => length

// it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
//   expect(detectNetwork( prefix + getPaddingString(length, prefix.length))).to.equal(NETWORK_NAME);
// });


