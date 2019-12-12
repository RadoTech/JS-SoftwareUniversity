function solve(input)
{
    let inputNumber = input.shift();

    for (let first = 1; first <= inputNumber[2]; first++) 
    {
        for (let second = 1; second <= inputNumber[1]; second++) 
        {
            for (let third = 1; third <= inputNumber[0]; third++) 
            {
                console.log(`${first} * ${second} * ${third} = ${first * second * third};`);
            }
        }
    }
}
solve(["324"])