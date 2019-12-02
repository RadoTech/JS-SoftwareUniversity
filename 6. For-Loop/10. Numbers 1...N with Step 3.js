function solve(input)
{
    let n = Number(input.shift());

    for (let index = 1; index <= n; index += 3)
    {
        console.log(`${index}`)        
    }

}
solve(["15"])