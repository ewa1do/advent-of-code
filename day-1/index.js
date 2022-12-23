const fs = require('fs');
const readline = require('readline');

(async function () {

  let elfsFood = [];

  const elfsMeals = fs.createReadStream('./input.txt');  

  const rl = readline.createInterface({
    input: elfsMeals,
    crlfDelay: Infinity
  });

  let temp = [];

  for await (const line of rl) {

    if (line === '') {

      elfsFood.push(temp);
      temp = [];

    } else {

      temp.push(line);
    
    }

  }

  elfsFood = elfsFood
    .map(meals => meals.map(meal => meal * 1))
    .map(meals => meals
    .reduce((acc, cur) => Number(acc) + Number(cur)))
    .sort((a, b) => b - a);

    const maxCaloriesCarriedByElf = elfsFood[0];

    const topThreeElfsCalories = 
      new Array(1).fill(elfsFood.slice(0, 3)).flat()
      .map(cal => cal * 1).reduce((acc, cur) => acc + cur);


    console.log({ maxCaloriesCarriedByElf, topThreeElfsCalories })

})()