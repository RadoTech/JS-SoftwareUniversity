function solve(input)
{
    let ageLily = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let singleToyPrice = Number(input.shift());

    let toysCounter = 0;
    let cashReceived = 0;
    let newSum = 0;
    let cashStolenCounter = 0;

    for (let currentBDay = 1; currentBDay <= ageLily; currentBDay++)
    {
        if (currentBDay % 2 == 0)
        {
            newSum += 10.00;
            cashReceived += newSum;
            cashStolenCounter++;
        }
        else
        {
           toysCounter++; 
        }
    }
    let cashStolen = cashStolenCounter.toFixed(2);
    let cashLeft = cashReceived - cashStolen;
    let toysSoldCashe = toysCounter * singleToyPrice;
    let totalCash = cashLeft + toysSoldCashe;
    let restMoney = Math.abs(totalCash - washingMachinePrice);

    if (totalCash >= washingMachinePrice)
    {
        console.log(`Yes! ${restMoney.toFixed(2)}`);
    }
    else
    {
        console.log(`No! ${restMoney.toFixed(2)}`);
    }
}
solve(["21", "1570.98", "3"])