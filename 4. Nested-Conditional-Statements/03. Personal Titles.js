function solve (input)
{
    let age = Number(input.shift());
    let gender = input.shift();

    if (age >= 16)
    {
        if (gender == "m")
        {
            console.log(`Mr.`)
        }
        else if (gender == "f")
        {
            console.log(`Ms.`)
        }
    }
    else if (age >= 0 && age < 16)
    {
        if (gender == "m")
        {
            console.log(`Master`)
        }
        else if (gender == "f")
        {
            console.log(`Miss`)
        }
    }
}
solve (["12", "f"])