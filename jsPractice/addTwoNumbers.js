// add two numbers using + operator
const num1 = 1;
const num2 = 1;
const sum = num1 + num2;
console.log(sum);

// Add Two Numbers Entered by the User using prompt
const n1 = parseInt(prompt("enter first number :"))
const n2 = parseInt(prompt("enter second number :"))
const add = n1+n2
console.log(add);

// using function
function addTwoNumbers(n1, n2) {
  const sum = n1 + n2;
  return sum;
}
console.log(addTwoNumbers(2, 2));

// using arrow function
const addNumbers = (a, b) => a + b;
const result = addNumbers(2, 0);
console.log(result);

// using reduce method
const num = [5, 5];
const res = num.reduce((ac, curr) => {
  return ac + curr;
}, 0);
console.log(res);
