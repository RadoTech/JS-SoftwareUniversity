function solve(input)
{
    let inputNum = input.shift();
    for (let rows = inputNum.length - 1; rows >= 0; rows--)
    {
        let currentDigitToNum = Number(inputNum[rows])
        if (currentDigitToNum == 0)
        {
            console.log(`ZERO`);
            continue;
        }
        let printLine = "";
        for (let symbol = 1; symbol <= currentDigitToNum; symbol++) 
        {
            printLine += String.fromCharCode(currentDigitToNum + 33)
        }
        console.log(printLine)
    }
}
solve(["2049"])