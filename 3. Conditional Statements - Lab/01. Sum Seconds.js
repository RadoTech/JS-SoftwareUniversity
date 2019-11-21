function solve (input)
{
    let platyer1 = Number(input.shift());
    let platyer2 = Number(input.shift());
    let platyer3 = Number(input.shift());

    let allPlayersTime = platyer1 + platyer2 + platyer3;
    let allPlayerSeconds = allPlayersTime % 60 ;
    let allPlayerMinutes = Math.floor(allPlayersTime / 60)

    if (allPlayerSeconds < 10)
    {
        console.log(`${allPlayerMinutes}:0${allPlayerSeconds}`);
    }
    else
    {
        console.log(`${allPlayerMinutes}:${allPlayerSeconds}`)
    }
  }
solve (["14", "12", "10"])