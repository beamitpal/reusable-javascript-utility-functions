//Rounds a number to a specified number of decimal places
function roundToDecimal(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
}
console.log(roundToDecimal(1.23456, 2)); // 1.23