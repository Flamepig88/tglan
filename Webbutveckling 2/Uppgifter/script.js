const numbers = [10, 20, -7, -7, 1];
let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

for (const value of numbers) {
  sum += value;
}

console.log(sum);
