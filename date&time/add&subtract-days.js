//Adds or subtracts a number of days from a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log(addDays(new Date(), 7)); // 7 days from now