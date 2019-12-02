function solve(input)
{
let tabsOpened = Number(input.shift());
let salary = Number(input.shift());
let website = input.shift();
for (let tab = 1; tab <= tabsOpened; tab++)
{
    switch (website) 
    {
        case "Facebook": salary -= 150; break;
        case "Instagram": salary -= 100; break;
        case "Reddit": salary -= 50; break;
        default: website = input.shift();
             continue;
    }
    if (salary <= 0)
    {
        console.log(`You have lost your salary.`);
        return;
    }
    website = input.shift();
}
console.log(`${salary.toFixed(0)}`)
}
solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
//solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
//solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])