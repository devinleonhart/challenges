const arrayLength = 1000000;
let input = Array.from(Array(arrayLength)).map((x) => getRandomInt(100000));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function mergeSort(elements) {
  const half = elements.length / 2;

  if (elements.length < 2) {
    return elements;
  }

  const left = elements.splice(0, half);
  return merge(mergeSort(left), mergeSort(elements));
}

function merge(left, right) {
  let merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    }
    else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...left, ...right];
}


console.time('Merge Sort');
console.log(mergeSort(input));
console.timeEnd('Merge Sort');
