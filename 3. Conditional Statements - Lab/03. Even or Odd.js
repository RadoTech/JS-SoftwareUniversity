function solve (input)
{
    let inputNumber = Number(input.shift());

    if (inputNumber % 2 == 0)
    {
        console.log(`even`)
    }
    else if (inputNumber % 2 != 0)
    {
        console.log(`odd`)
    }
}
solve (["200"])