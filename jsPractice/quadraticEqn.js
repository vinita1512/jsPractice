const quadraticEqn = (a, b, c) => {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
    console.log(`roots of quadratic equation are ${root1} and ${root2}`);
  } else if ((discriminant = 0)) {
    root1 = root2 = -b / (2 * a);
    console.log(`roots of quadratic equation are ${root1} and ${root2}`);
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
      `roots of quadratic equation are ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`
    );
  }
};
quadraticEqn(1, 4, 4);
