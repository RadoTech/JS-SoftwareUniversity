function solve (input) {

    let city = input.shift();
    let sellsVolume = Number(input.shift());

    let commission = 0.00;
    let error = false;
    if (city == "Sofia") {
        if (sellsVolume >= 0 && sellsVolume <= 500)
        {
            commission += sellsVolume * 0.05;
        }
        else if (sellsVolume > 500 && sellsVolume <= 1000)
        {
            commission += sellsVolume * 0.07;
        }
        else if (sellsVolume > 1000 && sellsVolume <= 10000)
        {
            commission += sellsVolume * 0.08;
        }
        else if (sellsVolume > 10000)
        {
            commission += sellsVolume * 0.12;
        }
        else if (sellsVolume < 0)
        {
            error = true;
        }
    }
    else if (city == "Varna") {
        if (sellsVolume >= 0 && sellsVolume <= 500)
        {
            commission += sellsVolume * 0.045;
        }
        else if (sellsVolume > 500 && sellsVolume <= 1000)
        {
            commission += sellsVolume * 0.075;
        }
        else if (sellsVolume > 1000 && sellsVolume <= 10000)
        {
            commission += sellsVolume * 0.10;
        }
        else if (sellsVolume > 10000)
        {
            commission += sellsVolume * 0.13;
        }
        else if (sellsVolume < 0)
        {
            error = true;
        }
    }
    else if (city == "Plovdiv") {
        if (sellsVolume >= 0 && sellsVolume <= 500)
        {
            commission += sellsVolume * 0.055;
        }
        else if (sellsVolume > 500 && sellsVolume <= 1000)
        {
            commission += sellsVolume * 0.08;
        }
        else if (sellsVolume > 1000 && sellsVolume <= 10000)
        {
            commission += sellsVolume * 0.12;
        }
        else if (sellsVolume > 10000)
        {
            commission += sellsVolume * 0.145;
        }
        else if (sellsVolume < 0)
        {
            error = true;
        }
    }
    else 
    {
        error = true;
    }
    if (!error) {
        console.log(`${commission.toFixed(2)}`)
    }
    else if (error) {
        console.log(`error`)
    }
}
solve(["Varna", "2500"])