function solve(input)
{
    let musiciantBudget = Number(input.shift());
    let peopleCount = input.shift();
    let budget = 0;
    let totalGuestsCounter = 0;
    while (peopleCount != "The restaurant is full")
    {
        let peopleCountToNum = Number(peopleCount);
        totalGuestsCounter += peopleCountToNum;
        if (peopleCountToNum >= 1 && peopleCountToNum < 5)
        {
            budget += peopleCountToNum * 100;
        }
        else if (peopleCountToNum >= 5)
        {
            budget += peopleCountToNum * 70;
        }
        peopleCount = input.shift();
    }
    if (budget >= musiciantBudget)
    {
        let budgetLeft = budget - musiciantBudget;
        console.log(`You have ${totalGuestsCounter} guests and ${budgetLeft} leva left.`)
    }
    else if (budget < musiciantBudget)
    {
        let budgetCollected = budget;
        console.log(`You have ${totalGuestsCounter} guests and ${budgetCollected} leva income, but no singer.`)
    }
}
solve(["2800", "5", "5", "4", "6", "6", "12", "12", "The restaurant is full"])