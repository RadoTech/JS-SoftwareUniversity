function solve(input)
{
    let foodBudget = Number(input.shift());
    let souvenirsBudget = Number(input.shift());
    let hotelBudget = Number(input.shift());
    let petrolMoney = (((2*210)/100)*7)*1.85;
    let hotelMoney = (hotelBudget *0.9) + (hotelBudget * 0.85) + (hotelBudget * 0.8);
    let foodMoney = 3 * foodBudget;
    let souvenirsMoney = 3 * souvenirsBudget;
    let totalMoney = petrolMoney + hotelMoney + foodMoney + souvenirsMoney;
    console.log(`Money needed: ${totalMoney.toFixed(2)}`)
}
solve(["100", "50", "500"])