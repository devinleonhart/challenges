function compress(i) {
  let input = i;
  let output = '';
  let previousChar = input[0];
  let counter = 0;

  input.split('').forEach((currentChar, index) => {
    
    if (previousChar !== currentChar) {
      output += counter;
      output += previousChar;
      counter = 0;
      previousChar = currentChar;
    }

    counter += 1;

    // Case for last character.
    if (index == input.length - 1) {
      output += counter;
      output += previousChar;
    }
  });

  return output;
}

// Tests
compress('AAAABBBCCA') === '4A3B2C1A' ? console.log("Pass!") : console.error("Fail!");
compress('AABBCC') === '2A2B2C' ? console.log("Pass!") : console.error("Fail!");
compress('ABC') === '1A1B1C' ? console.log("Pass!") : console.error("Fail!");
compress('A') === '1A' ? console.log("Pass!") : console.error("Fail!");
compress('') === '' ? console.log("Pass!") : console.error("Fail!");
