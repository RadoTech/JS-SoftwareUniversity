function solve (input)
{
    let tablesCount = Number(input.shift());
    let tablesLen = Number(input.shift());
    let tablesWidth = Number(input.shift());

    let oneTablecloth = (tablesLen + 0.6) * (tablesWidth + 0.6);
    let oneTablecover = (tablesLen * 0.5) * (tablesLen * 0.5);

    let totalTableclothPriceUSD = (oneTablecloth * 7) * tablesCount;
    let totalTablecoverPriceUSD = (oneTablecover * 9) * tablesCount;
    let totalPriceUSD = totalTableclothPriceUSD + totalTablecoverPriceUSD;
    let RateBGN = 1.85;
    let totalPriceBGN = totalPriceUSD * RateBGN;
    
    console.log(`${totalPriceUSD.toFixed(2)} USD`)
    console.log(`${totalPriceBGN.toFixed(2)} BGN`)
}
solve ([5,1.00,0.50])