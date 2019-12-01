function solve(input)
{
    let badScoresCount = Number(input.shift());
    let exerciseName = input.shift();
    let currentScore = Number(input.shift());

    let badScoreCounter = 0;
    let allScoreSum = 0;
    let allProblemsCounter = 0;
    let lastProblemName = "blank";

    while (exerciseName != "Enough")
    {
        allScoreSum += currentScore;
        allProblemsCounter++;
        lastProblemName = exerciseName;

        if (currentScore <= 4)
        {
            badScoreCounter++;
            if (badScoreCounter == badScoresCount)
            {
                console.log(`You need a break, ${badScoreCounter} poor grades.`)
                return;
            }
        }
        exerciseName = input.shift();
        if (exerciseName == "Enough")
        {
            break;
        }
        currentScore = Number(input.shift());
    }
    let averageScore = allScoreSum / allProblemsCounter;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${allProblemsCounter}`);
    console.log(`Last problem: ${lastProblemName}`);
}
solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])