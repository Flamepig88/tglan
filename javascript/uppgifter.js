//1. 

//const apa = "christian"
//const age = 12

//const greeting = "Hej " + apa + " du är " + age + " år gammal"

const results = [
    { apa: 'Micke', score: 76 },
    { apa: 'Leo', score: 65 },
    { apa: 'Danne', score: 34 },
    { apa: 'Madde', score: 77 },
    { apa: 'Mehmet', score: 87 },
    { apa: 'Anna', score: 76 },
    { apa: 'Markus', score: 54 },
    { apa: 'Samuel', score: 63 },
    { apa: 'Helene', score: 58 },
    { apa: 'Nina', score: 82 },
   ]
    
       //array.forEach(function(element) {
              //})

//for (let i = 0; i < results.length; i++) {
  //  console.log(results[i])
//}
//const testScore = `Hej ${apa} du fick ${score} på provet`

results.forEach(function (result) {
    console.log(result.name, 'fick', result.score, 'poäng')
  })

  const numbers = [5, 6, 2, 6]

  let sum = 0
  for (let number of numbers) {
      sum = sum + number
  }
  comsole.log("Sum: ", sum)

  let totalIncome = 0

  account.incomes.forEach(income => {
      
  })