function solve(input)
{
    let numbersCount = Number(input.shift());
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let inputNumber = Number(input.shift());
    for (let currentNum = 1; currentNum <= numbersCount; currentNum++)
    {
        if (inputNumber >= 1 && inputNumber < 200)
        {
            group1++;
        }        
        else if (inputNumber >= 200 && inputNumber < 400)
        {
            group2++;
        }        
        else if (inputNumber >= 400 && inputNumber < 600)
        {
            group3++;
        }        
        else if (inputNumber >= 600 && inputNumber < 800)
        {
            group4++;
        }   
        else if (inputNumber >= 800 && inputNumber <= 1000)
        {
            group5++;
        }
        inputNumber = Number(input.shift());      
    }
    let group1Percent = ((group1 / numbersCount) * 100);
    let group2Percent = ((group2 / numbersCount) * 100);
    let group3Percent = ((group3 / numbersCount) * 100);
    let group4Percent = ((group4 / numbersCount) * 100);
    let group5Percent = ((group5 / numbersCount) * 100);
    console.log(`${group1Percent.toFixed(2)}%`);
    console.log(`${group2Percent.toFixed(2)}%`);
    console.log(`${group3Percent.toFixed(2)}%`);
    console.log(`${group4Percent.toFixed(2)}%`);
    console.log(`${group5Percent.toFixed(2)}%`);
}
//solve(["3", "1", "2", "999"])
//solve(["4", "53", "7", "56", "999"])
solve(["7", "800", "801", "250", "199", "399", "599", "799"])