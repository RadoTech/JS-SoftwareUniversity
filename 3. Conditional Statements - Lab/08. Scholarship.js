function solve (input)
{
    let income = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minSalary = Number(input.shift());

    let socialScholarshipRange = 4.50; //> 4.50
    let excellentScholarshipRange = 5.50; //>= 5.50

    let socialScholarshipSum = 0;
    let socialScholarshipAllowed = false;
    let excellentScholarshipSum = 0;
    let excellentScholarshipAllowed = false;
    

    if (averageGrade > socialScholarshipRange && income < minSalary)
    {
        socialScholarshipSum = minSalary * 0.35;
        socialScholarshipAllowed = true;
    }
    if (averageGrade >= excellentScholarshipRange)
    {
        excellentScholarshipSum = averageGrade * 25;
        excellentScholarshipAllowed = true;
    }
    if (!socialScholarshipAllowed && !excellentScholarshipAllowed)
    {
        console.log(`You cannot get a scholarship!`);
    }
    else if (socialScholarshipAllowed && excellentScholarshipAllowed)
    {
        if (excellentScholarshipSum >= socialScholarshipSum)
        {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarshipSum)} BGN`);
        }
        else
        {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarshipSum)} BGN`);
        }
    }
    else if (socialScholarshipAllowed && !excellentScholarshipAllowed)
    {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarshipSum)} BGN`);
    }
    else if (!socialScholarshipAllowed && excellentScholarshipAllowed)
    {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarshipSum)} BGN`);
    }
}
solve(["300.00", "5.65", "420.00"])