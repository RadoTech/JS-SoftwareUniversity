function solve (input) {
    let inputNumber = Number(input.shift());
    var validNumber = ((inputNumber >= 100 && inputNumber <= 200) || (inputNumber == 0));
    if (!validNumber)
    {
        console.log(`invalid`);
    }
}
solve(["100"])