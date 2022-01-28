//1.

//const apa = "christian"
//const age = 12

//const greeting = "Hej " + apa + " du är " + age + " år gammal"

const results = [
  { name: "Micke", score: 76 },
  { name: "Leo", score: 65 },
  { name: "Danne", score: 34 },
  { name: "Madde", score: 77 },
  { name: "Mehmet", score: 87 },
  { name: "Anna", score: 76 },
  { name: "Markus", score: 54 },
  { name: "Samuel", score: 63 },
  { name: "Helene", score: 58 },
  { name: "Nina", score: 82 },
];

let currentHightest = { name: undefined, score: 0 };

function getHighestScore() {}

results.forEach(function (contestant) {
  if (contestant.score > currentHightest.score) {
    currentHightest.name = contestant.name;
    currentHightest.score = contestant.score;
  }
});

console.log(
  `Den deltagaren som vann är ${currentHightest.name} med ${currentHightest.score} poäng`
);

//array.forEach(function(element) {
//})

//for (let i = 0; i < results.length; i++) {
//  console.log(results[i])
//}
//const testScore = `Hej ${apa} du fick ${score} på provet`

//for (let i = 0; i < results.length; i++) {
//console.log(`${results[i].name} fick ${results[i].score} poäng på provet`);  // -----------funkar
//}

//const numbers = [5, 6, 2, 6];

//let sum = 0;
//for (let number of numbers) {
//  sum = sum + number;
//}
//comsole.log("Sum: ", sum);

//let totalIncome = 0;

//account.incomes.forEach((income) => {});

/* 

  benis sak

*/

const account = {
  income: [25000, 25000, 25000, 25000, 25000, 25000],
  expenses: [18900, 23878, 28032, 21238, 24003, 23209],
};

let totalIncome = 0;

let totalExpenses = 0;

const balance = 0;

for (let i = 0; i < account.income.length; i++) {
  totalIncome += account.income[i];
}

for (let i = 0; i < account.expenses.length; i++) {
  totalExpenses += account.expenses[i];
}

console.log(`Income: ${totalIncome}`);
console.log(`Expenses: ${totalExpenses}`);
console.log(`Balance: ${totalIncome - totalExpenses}`);
