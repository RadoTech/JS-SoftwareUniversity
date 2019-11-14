function solve (input)
{
    let x1 = input.shift();
    let y1 = input.shift();
    let x2 = input.shift();
    let y2 = input.shift();

    let x = Math.abs(x2 - x1);
    let y = Math.abs(y2 - y1);

    let area = x*y;
    let perimeter = 2*(x+y);

    console.log(`${area.toFixed(2)}`)
    console.log(`${perimeter.toFixed(2)}`)
}
solve ([60,20,10,50])