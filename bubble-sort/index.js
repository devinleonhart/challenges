let arrayLength = 1000000;
let input = Array.from(Array(arrayLength)).map((x) => getRandomInt(100000));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function swapValues(i, j) {
  if (input[i] && input[j]) {
    const temp = input[j];
    input[j] = input[i];
    input[i] = temp;
  }
}

function bubbleSort() {
  let flag;
  do {
    flag = false;
    for (let i = 0; i < input.length; i++) {
      if (input[i + 1] && input[i] > input[i + 1]) {
        swapValues(i, i + 1);
        flag = true;
      }
    }
  } while (flag)

  return input;
}

console.time('Bubble Sort');
console.log(bubbleSort());
console.timeEnd('Bubble Sort');
