function solve(input){
    let sector = input.shift();
    let rows = Number(input.shift());
    let seatsOddRow = Number(input.shift());
    let sectorCharToNum = sector.charCodeAt(0);
    let seatsCounter = 0;

    for (let sec = 65; sec <= sectorCharToNum; sec++) {
        var sectorChar = String.fromCharCode(sec);
        if (sec > 65) {
            rows++;
        }
        for (let row = 1; row <= rows; row++) {
            if (row % 2 != 0)
            {
                for (let seatOdd = 97; seatOdd <= (96 + seatsOddRow); seatOdd++) {
                   var seatChar = String.fromCharCode(seatOdd); 
                   console.log(`${sectorChar}${row}${seatChar}`);
                   seatsCounter++;
                }
            }
            else if(row % 2 == 0)
            {
                for (let seatEven = 97; seatEven <= ((96 + seatsOddRow) + 2); seatEven++) {
                    var seatChar = String.fromCharCode(seatEven);
                    console.log(`${sectorChar}${row}${seatChar}`);
                    seatsCounter++;
                }
            }
            
        }
    }
    console.log(`${seatsCounter}`)
}
solve(["B", "3", "2"])