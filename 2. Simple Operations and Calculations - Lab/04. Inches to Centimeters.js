function inchesToCentimeters (input)
{
    let inches = input.shift();
    let centimeters = inches * 2.54;

    console.log(centimeters);
}
inchesToCentimeters([5])