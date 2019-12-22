// Input arrives as a single string. Every line in the string has the format "functon name", "start or end", "timestamp"
// Multiple starts in a row implies a nested function. You can assume that all functions are nested.
// Use this to determine the runtimes of the functions. 
const input = `f1, start, 0
               f2, start, 100
               f3, start, 200
               f3, end, 250
               f2, end, 400
               f1, end, 500`;

// Clean the given input string into a more managable form.
function parseInput(input) {
  let parsedInput = input.split('\n');
  parsedInput = parsedInput.map((line) => {
    line = line.trim();
    let lineArray = line.split(',');
    lineArray = lineArray.map((element) => element.trim());
    lineArray[2] = parseInt(lineArray[2]);
    return lineArray;
  });
  return parsedInput;
}

// Find the runtime of a function, including their nested function's runtimes.
function findRuntimes(input) {
  // Use an array to preserve order functions were discovered.
  let runtimes = [];
  input.forEach((line) => {
    let functionName = line[0];
    let startOrStop = line[1];
    let runtime = line[2];
    // If we have not encountered this function and it's a start command...
    if(!(functionName in runtimes) && startOrStop === 'start') {
      // Search for its matching end command.
      input.forEach((line2) => {
        let functionName2 = line2[0];
        let startOrStop2 = line2[1];
        let runtime2 = line2[2];
        // Once we have found the end command...
        if(functionName === functionName2 && startOrStop2 === 'end') {
          // Record the difference of the timestamps and the order we found this functon.
          runtimes.push({
            name: functionName, 
            runtime: runtime2 - runtime
          });
        }
      });
    }
  });
  return runtimes;
}

// Calculate the real runtime of a function, ignoring the runtime of all nested funcitons.
function findRealRuntimes(input) {
  let realRuntimes = {};
  input = input.reverse();
  // This works by modifying the array as we iterate through it.
  input.forEach((curr, index, arr) => {
    if(arr[index - 1]) {
      // Only modify a runtime if there is a previous entry, implying a nested function whose time needs to be removed.
      realRuntimes[curr.name] = arr[index].runtime - arr[index - 1].runtime;
    }
    else {
      realRuntimes[curr.name] = curr.runtime;
    }
  });
  return realRuntimes;
}

let parsedInput = parseInput(input);
console.log("Parsed Input:", parsedInput);
let runtimes = findRuntimes(parsedInput);
console.log("Runtimes:", runtimes);
runtimes = findRealRuntimes(runtimes);
console.log("Real Runtimes:", runtimes);
