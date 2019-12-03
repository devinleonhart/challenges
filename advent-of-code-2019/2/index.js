let input = require('./input.json');
let initialState = input.instructions.split(',');
initialState.forEach((value, index) => {
  initialState[index] = parseInt(value);
});
const sliceLength = {
  1: 4,
  2: 4
};
let memory = initialState.slice();

function resetMemory() {
  memory = initialState.slice();
}

function performInstruction(address) {
  if(address[0] === 1) {
    memory[address[3]] = memory[address[1]] + memory[address[2]]
  }
  else if(address[0] === 2) {
    memory[address[3]] = memory[address[1]] * memory[address[2]]
  }
}

function runProgram(noun, verb) {

  memory[1] = noun;
  memory[2] = verb;
  
  for(let i = 0; i <= memory.length; i++) {
    // If the opcode is 99, end execution of instructions.
    if (memory[i] === 99) { break; }
    // Assuming the input is correct, we can perform an operation.
    // Currently the number of parameters is always 3 if the opcode is not 99. Because this can change, we will look up
    // the number of parameters to slice with sliceLength.
    performInstruction(memory.slice(i, i + sliceLength[memory[i]]))
    i = i + sliceLength[memory[i]] - 1;
  }

  // The answer is the noun and the verb together as one number. 12 + 2 = 1202 | 30 + 29 = 3029
  if(memory[0] === 19690720) {
    console.log("Answer found!");
    console.log(noun, verb);
  }
}

for(let noun = 0; noun <= 99; noun++) {
  for(let verb = 0; verb <= 99; verb++) {
    runProgram(noun, verb);
    resetMemory();
  } 
}
