function solve(input)
{
    let command = input.shift();
    let goal = 10000;
    let stepsCounter = 0;

    while (command != "Going home")
    {
        stepsCounter += Number(command);
        if (stepsCounter >= goal)
        {
            console.log(`Goal reached! Good job!`);
            return;
        }
        command = input.shift();
        if (command == "Going home")
        {
            break;
        }
    }
    command = input.shift();
    stepsCounter += Number(command);

        if (stepsCounter >= goal)
        {
        console.log(`Goal reached! Good job!`);
            return;
        }
        else
        {
        console.log(`${goal - stepsCounter} more steps to reach goal.`);
            return;
        }
}
solve(["1500", "300", "2500", "3000", "Going home", "200"])