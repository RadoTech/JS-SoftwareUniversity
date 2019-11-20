function solve (input)
{
    //let inputNumber = 0;
    let inputNumber = Number(input.shift());
    //console.log(typeof(InputNumber));
    //console.log(inputNumber)

    if (inputNumber < 100)
    {
        console.log(`Less than 100`);
    }
    //else if (100 <= inputNumber <= 200)
    else if (inputNumber >= 100 && inputNumber <= 200)
    {
        console.log(`Between 100 and 200`);
    }
    else if (inputNumber > 200)
    {
        console.log(`Greater than 200`);
    }   
}
solve (["210"])