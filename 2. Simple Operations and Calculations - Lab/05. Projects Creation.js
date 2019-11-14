function projectsCreation (input)
{
    let architectName = input.shift();
    let projectsCount = input.shift();
    let oneProjectTime = 3;
    let allProjectsTime = oneProjectTime * projectsCount;

    console.log(`The architect ${architectName} will need ${allProjectsTime} hours to complete ${projectsCount} project/s.`)

}
projectsCreation(["Rado Tech",10])