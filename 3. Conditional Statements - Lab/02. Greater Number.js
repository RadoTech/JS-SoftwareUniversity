function solve (input)
{
    let inputNumberOne = Number(input.shift());
    let inputNumberTwo = Number(input.shift());

    if (inputNumberOne > inputNumberTwo)
    {
        console.log(`${inputNumberOne}`)
    }
    else
    {
        console.log(`${inputNumberTwo}`)
    }
}
solve (["10","99"])