let triangle = new Array();

// Seed the triangle's first values that are not given by a sum.
triangle[0] = [1];
triangle[1] = [1, 1];

// How many levels should the triangle have?
let levels = 7;

for (i = 2; i < levels; i++) {
  triangle[i] = new Array();
  triangle[i].push(1)
  for(j = 1; j < i; j++) {
    triangle[i].push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
  }
  triangle[i].push(1)
}

console.log(triangle);
