function solve (input)
{
    let shape = input.shift();

    let a = 0;
    let b = 0;
    let r = 0;
    let area = 0;

    if (shape == "square")
    {
        a = Number(input.shift());
        area = a * a;
    }
    else if (shape == "rectangle")
    {
        a = Number(input.shift());
        b = Number(input.shift());
        area = a * b;
        
    }
    else if (shape == "circle")
    {
        r = Number(input.shift());
        area = Math.PI * Math.pow(r,2)
    }
    else if (shape == "triangle")
    {
        a = Number(input.shift());
        b = Number(input.shift());
        area = (a * b) / 2;
    }

    console.log(`${area.toFixed(3)}`)
        
}
solve (["triangle","4.5","20"])