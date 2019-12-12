function solve(input)
{
    let sushiType = input.shift();
    let sushiRestaurant = input.shift();
    let sushiCount = Number(input.shift());
    let homeDelivery = input.shift();
    let bill = 0;

    if (sushiType == "sashimi")
    {
        if (sushiRestaurant == "Sushi Zone")
        {
            bill += (4.99 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Time")
        {
            bill += (5.49 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Bar")
        {
            bill += (5.25 * sushiCount);
        }
        else if (sushiRestaurant == "Asian Pub")
        {
            bill += (4.50 * sushiCount);
        }
        else
        {
            console.log(`${sushiRestaurant} is invalid restaurant!`);
            return; 
        }
    }
    else if (sushiType == "maki")
    {
        if (sushiRestaurant == "Sushi Zone")
        {
            bill += (5.29 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Time")
        {
            bill += (4.69 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Bar")
        {
            bill += (5.55 * sushiCount);
        }
        else if (sushiRestaurant == "Asian Pub")
        {
            bill += (4.80 * sushiCount);
        }
        else
        {
            console.log(`${sushiRestaurant} is invalid restaurant!`);
            return; 
        }
    }
    else if (sushiType == "uramaki")
    {
        if (sushiRestaurant == "Sushi Zone")
        {
            bill += (5.99 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Time")
        {
            bill += (4.49 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Bar")
        {
            bill += (6.25 * sushiCount);
        }
        else if (sushiRestaurant == "Asian Pub")
        {
            bill += (5.50 * sushiCount);
        }
        else
        {
            console.log(`${sushiRestaurant} is invalid restaurant!`);
            return; 
        }
    }
    else if (sushiType == "temaki")
    {
        if (sushiRestaurant == "Sushi Zone")
        {
            bill += (4.29 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Time")
        {
            bill += (5.19 * sushiCount);
        }
        else if (sushiRestaurant == "Sushi Bar")
        {
            bill += (4.75 * sushiCount);
        }
        else if (sushiRestaurant == "Asian Pub")
        {
            bill += (5.50 * sushiCount);
        }
        else
        {
            console.log(`${sushiRestaurant} is invalid restaurant!`);
            return; 
        }
    }
    if (homeDelivery == "Y")
    {
        bill *= 1.2;
    }
    else if (homeDelivery == "N")
    {
        bill *= 1;
    }
    console.log(`Total price: ${Math.ceil(bill)} lv.`)
}
solve(["maki", "Sushi Zone", "4", "Y"])