function solve (input)
{
    let daysCount = Number(input.shift());
    let pastryCookCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let gofrettesCount = Number(input.shift());
    let pancakesCount = Number(input.shift());

    let oneCakePrice = 45;
    let oneGofrettePrice = 5.80;
    let onePancakePrice = 3.20;

    let onePastryCookOneDay = (oneCakePrice*cakesCount) + (oneGofrettePrice*gofrettesCount) + (onePancakePrice*pancakesCount);
    let onePastryCookAllDays = onePastryCookOneDay * daysCount;
    let allPastryCooksAllDays = onePastryCookAllDays * pastryCookCount;
    let costs = allPastryCooksAllDays * 0.125;
    let charitySum = allPastryCooksAllDays - costs;
    
    console.log(`${charitySum.toFixed(2)}`)
}
solve ([20,8,14,30,16])