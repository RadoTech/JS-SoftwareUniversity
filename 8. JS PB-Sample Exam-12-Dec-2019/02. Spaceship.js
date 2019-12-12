function solve(input)
{
    let spaceshipWidth = Number(input.shift());
    let spaceshipLength = Number(input.shift());
    let spaceshipHight = Number(input.shift());
    let astronautsAverageHight = Number(input.shift());

    let spaceshipVolume = spaceshipWidth * spaceshipLength * spaceshipHight;
    let spaceRoomVolume = 2 * 2 * (astronautsAverageHight + 0.40);
    let maxAstronauts = Math.floor(spaceshipVolume / spaceRoomVolume);

    if (maxAstronauts >= 3 && maxAstronauts <= 10)
    {
        console.log(`The spacecraft holds ${maxAstronauts} astronauts.`);
    }
    else if (maxAstronauts < 3)
    {
        console.log(`The spacecraft is too small.`);
    }
    else if (maxAstronauts > 10)
    {
        console.log(`The spacecraft is too big.`);
    }
}
solve(["3.5", "4", "5", "1.70"])