// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// You can never have the same roman numeral more than three times in a row.
// A smaller number in front of a larger number means subtraction. ex.  IV = 4
  // You can only put one smaller number in front of another in this way. ex. IIV is not 3.
// A larger number in front of a smaller number means addition.  ex. VI = 6
// Ones, Tens, Hundreds, Thousands and so on must be separate roman numerals. ex, to get 99 you would make "90 and 9" (XCIX) instead of "1 before 100" (IC)

// Compare the weight of two letters.
// Accepts two letters, returns "greater", "lesser", or "same".
function compare(key, a, b) {
  if (key[a] > key[b]) 
    return "greater";
  if (key[a] < key[b]) 
    return "lesser";
  return "same"
}

// Check if the next letter is acending, descending, or the same. Return false if there's no next letter for the given index.
function checkNextLetter(key, input, index) {
  
  let currentLetter = input[index]; 
  let nextLetter = input[index+1];

  if(!currentLetter || !nextLetter) {
    return false;
  }

  if(nextLetter !== 'undefined') {
    if(compare(key, currentLetter, nextLetter) === "lesser") {
      return "ascending";
    }
    if(compare(key, currentLetter, nextLetter) === "greater") {
      return "descending";
    }
    return "same";
  }
  
}

// Parse a roman numeral into a decimal number.
function parse(key, input) {
  let decimal = 0;
  for (i = 0; i < input.length; i++) {
    if(checkNextLetter(key, input, i) === "ascending") {
      decimal += (key[input[i+1]] - key[input[i]])
      i += 1;
    }
    else {
      decimal += key[input[i]];
    }
  }
  return decimal;
}

let key = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}; 
let input = 'XCIX';

// Unit tests
compare(key, 'V', 'M') === 'lesser' ? console.log("Pass!") : console.error("Fail!");
compare(key, 'X', 'I') === 'greater' ? console.log("Pass!") : console.error("Fail!");
compare(key, 'I', 'I') === 'same' ? console.log("Pass!") : console.error("Fail!");

checkNextLetter(key, 'XCIX', 0) === "ascending" ? console.log("Pass!") : console.error("Fail!");
checkNextLetter(key, 'XCIX', 1) === "descending" ? console.log("Pass!") : console.error("Fail!");
checkNextLetter(key, 'XCIX', 1000) === false ? console.log("Pass!") : console.error("Fail!");
checkNextLetter(key, 'XX', 0) === "same" ? console.log("Pass!") : console.error("Fail!");

// Integration tests
parse(key, 'XCIX') === 99 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
parse(key, 'XXX') === 30 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
parse(key, 'DXXIV') === 524 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
parse(key, 'MMMCMXCIX') === 3999 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
parse(key, 'II') === 2 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
parse(key, 'LXIV') === 64 ? console.log("Pass!") : console.error("Fail!", parse(key, 'XCIX'));
