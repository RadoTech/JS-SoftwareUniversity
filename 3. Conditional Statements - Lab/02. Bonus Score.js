function solve (input)
{
    let inputPoints = Number(input.shift());

    bonusPoints = 0;

    if (inputPoints <= 100)
    {
        bonusPoints += 5;
    }
    else if (inputPoints > 100 && inputPoints <= 1000)
    {
        bonusPoints += inputPoints * 0.2;
    }
    else if (inputPoints > 1000)
    {
        bonusPoints += inputPoints * 0.1;
    }

    if (inputPoints % 2 == 0)
    {
        bonusPoints += 1;
    }
    else if (inputPoints % 5 == 0)
    {
        bonusPoints += 2;
    }
    
    console.log(`${bonusPoints}`)
    console.log(`${inputPoints + bonusPoints}`)
}
solve (["15875"])