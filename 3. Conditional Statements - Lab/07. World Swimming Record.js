function solve (input)
{
    let worldRecordInSeconds = Number(input.shift());
    let distanceInMeters = Number(input.shift());
    let ivansTimeInSeconds = Number(input.shift()); //for 1m swimming

    let ivansTimeAllMeters = ivansTimeInSeconds * distanceInMeters;
    let resistanceRate = 12.5; //resistance is 12.5 seconds for each 15 meters
    let resistanceSeconds = ((Math.floor(distanceInMeters / 15)) * resistanceRate);
    //console.log(`${resistanceSeconds}`)
    
    let ivanRealTime = (ivansTimeAllMeters + resistanceSeconds);
    

    if (ivanRealTime < worldRecordInSeconds)
        {
        console.log(`Yes, he succeeded! The new world record is ${ivanRealTime.toFixed(2)} seconds.`);
        }
    else
        {
        console.log(`No, he failed! He was ${(ivanRealTime - worldRecordInSeconds).toFixed(2)} seconds slower.`)
        }
}
solve (["55555.67", "3017", "5.03"])