function solve(input)
{
let command = input.shift();
let savedMoney = 0;
while (command != "End")
{
    let budget = Number(input.shift());
    for (let saving = 0; savedMoney < budget; saving = Number(input.shift()))
    {
      savedMoney += saving;
      if (savedMoney >= budget)
      {
          console.log(`Going to ${command}!`);
          savedMoney = 0;
          break;
      }
    }
    command = input.shift();
}
}
solve(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])