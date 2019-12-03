let input = require('./input.json');
let instructions = input.instructions.split(',');
instructions.forEach((value, index) => {
  instructions[index] = parseInt(value);
});

// Per instructions, replace two values manually.
instructions[1] = 12;
instructions[2] = 2;

function performInstruction(instruction) {
  if(instruction[0] === 1) {
    instructions[instruction[3]] = instructions[instruction[1]] + instructions[instruction[2]]
  }
  else if(instruction[0] === 2) {
    instructions[instruction[3]] = instructions[instruction[1]] * instructions[instruction[2]]
  }
}


for(let i = 0; i <= instructions.length; i++) {
  // If the opcode is 99, end execution of instructions.
  if (instructions[i] === 99) { break; }
  // Assuming the input is correct, we can perform an operation.
  performInstruction(instructions.slice(i, i+4))
  i = i + 3;
}

// The answer is whatever is at position 0 in the instructions after the program halts.
console.log(instructions[0])
