function solve(input)
{
    let filmName = input.shift();
    let seatsFree = Number(input.shift());

    let standardCount = 0;
    let studnetCount = 0;
    let kidCount = 0;
    let seatCount = 0;
    let currentTicketPercent = 0;
    let currentFilmName;
    let allTickets = 0;
    let allSeats = 0;
    let finish = false;
    let ticketType = input.shift();

    while (filmName != "Finish")
    {

        for (let i = 1; i <= seatsFree; i++)
        {
            if (ticketType == "standard")
            {
                standardCount++;
                seatCount++;
            }
            else if (ticketType == "student")
            {
                studnetCount++;
                seatCount++;
            }
            else if (ticketType == "kid")
            {
                kidCount++;
                seatCount++;
            }
            if (ticketType == "End" || i == seatsFree)
            {
                    break;
            }
            ticketType = input.shift();
        }
        allSeats = seatCount;
        allTickets = standardCount + studnetCount + kidCount;
        currentTicketPercent = (allSeats / seatsFree) * 100;
        currentFilmName = filmName;
        console.log(`${filmName} - ${currentTicketPercent.toFixed(2)}% full.`);
        seatsFree = 0;
        seatCount = 0;
        if (ticketType == "Finish")
        {
                break;
        }
        else
        {
            filmName = input.shift();
        }
        seatsFree = Number(input.shift());
        ticketType = input.shift();
    }
    standardCount = (standardCount / allTickets) * 100;
    studnetCount = (studnetCount / allTickets) * 100;
    kidCount = (kidCount / allTickets) * 100;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${studnetCount.toFixed(2)}% student tickets.`);
    console.log(`${standardCount.toFixed(2)}% standard tickets.`);
    console.log(`${kidCount.toFixed(2)}% kids tickets.`);
}
// solve(["Frozen1", "3", "kid", "standard", "standard", "Frozen2", "4", "kid", "kid", "standard", "standard", "Frozen3", "4", "kid", "student", "standard", "standard", "Finish"])
solve(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
  