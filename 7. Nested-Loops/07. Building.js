function solve (input)
{
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    let roomType = "N/A"
    let result = ""

    for (let fl = floors; fl >= 1; fl--)
    {
        for (let room = 0; room < rooms; room++)
        {
            if (fl % 2 != 0)
            {
                roomType = "A"
            }
            else if (fl % 2 == 0)
            {
                roomType = "O"
            }
            if (fl == floors || floors == 1)
            {
                roomType = "L"
            } 
            var a = (`${roomType}${fl}${room} `);
            result += a;     
            //console.log(`${roomType}${fl}${room} `)
        }
        console.log(`${result}`);
        result = "";
    }
}
solve(["6", "4"])