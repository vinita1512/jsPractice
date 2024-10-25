// sqaureRoot not using built in methods
function squareRoot(num) {
  for (let i = 1; i <= num / 2; i++) {
    let sqr = i * i;
    if (sqr === num) {
      return i;
    }
  }
  return -1;
}
console.log(squareRoot(7));

// using math.sqrt()
function sqrt(num) {
  const res = Math.sqrt(num).toFixed(2);
  return res;
}
console.log(sqrt(4));

// using math.pow()
function powSqrt(num) {
  const res = Math.pow(num, 1 / 2).toFixed(2);
  return res;
}
console.log(powSqrt(2));
