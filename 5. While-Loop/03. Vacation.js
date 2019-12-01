function solve (input)
{
    let sumNeeded = Number(input.shift());
    let sumAvailable = Number(input.shift());
    let command = input.shift();
    let commandSum = Number(input.shift());

    let spendCounter = 0;
    let daysCounter = 0;

    while (sumAvailable < sumNeeded)
    {
        if (command == "save")
        {
            sumAvailable += commandSum;
            daysCounter++;
            spendCounter = 0;
             if (sumAvailable >= sumNeeded)
             {
                break;
             }
        }
        else if (command == "spend")
        {
            if (commandSum >= sumAvailable)
            {
                sumAvailable = 0;
            }
            else
            {
                sumAvailable -= commandSum;
            }
            daysCounter++;
            spendCounter++;
            if (spendCounter == 5)
            {
                console.log(`You can't save the money.`);
                console.log(`${daysCounter}`);
                return;
            }
        }
        command = input.shift();
        commandSum = Number(input.shift());
    }
    console.log (`You saved the money for ${daysCounter} days.`)
}
solve(["2000", "1000", "spend", "1200", "save", "2000"])