// using temperory variable
const swapTwoVariables = (a, b) => {
  console.log("Before swapping : a = " + a + " b = " + b);
  let temp = a;
  a = b;
  b = temp;
  console.log("After swapping : a = " + a + " b = " + b);
};

swapTwoVariables(1, 2);

// using destructuring
const swapTwoVariablesDest = (a, b) => {
  console.log(`Before Swapping: a=${a} b=${b}`);
  [a, b] = [b, a];
  console.log(`After Swapping: a=${a} b=${b}`);
};

swapTwoVariablesDest(6, 8);

// Using Arithmetic Operators
const swapTwoVarsArithmetic = (a, b) => {
  console.log(`Before Swapping: a=${a} b=${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After Swapping: a=${a} b=${b}`);
};
swapTwoVarsArithmetic(1, 5);
