function squareRoots(numbers) {
  const roots = numbers.map((num) => Math.sqrt(num));
  for (let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} :${roots[i]}`);
  }
}
const inputNumbers = [25, 9, 16];
squareRoots(inputNumbers);

function findSquareRoot(numbers) {
  return numbers.map((num) => num ** 2);
}
const putNumbers = [4, 9, 16];
const squaredValues = findSquareRoot(putNumbers);
console.log(squaredValues);
