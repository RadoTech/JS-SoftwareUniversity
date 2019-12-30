function solve(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let dogFoodADay = Number(input.shift());
    let catFoodADay = Number(input.shift());
    let dogFoodTotal = 0;
    let catFoodTotal = 0;
    let biscuitsTotal = 0;
    for (let index = 1; index <= days; index++) {
        if (index % 3 == 0) {
            biscuitsTotal += ((dogFoodADay + catFoodADay) * 0.1);
        }
        dogFoodTotal += dogFoodADay;
        catFoodTotal += catFoodADay;
        dogFoodADay = Number(input.shift());
        catFoodADay = Number(input.shift());
    }
    let foodEatenTotal = dogFoodTotal + catFoodTotal;
    let foodEatenPercent = ((foodEatenTotal / totalFood) * 100);
    let dogEatenPercent = ((dogFoodTotal / foodEatenTotal) * 100);
    let catEatenPercent = ((catFoodTotal / foodEatenTotal) * 100);
    console.log(`Total eaten biscuits: ${biscuitsTotal.toFixed(0)}gr.`);
    console.log(`${foodEatenPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenPercent.toFixed(2)}% eaten from the cat.`);
}
//solve(["3", "1000", "300", "20", "100", "30", "110", "40"])
solve(["3", "500", "100", "30", "110", "25", "120", "35"])