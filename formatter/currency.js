function formatCurrency(number, locale = 'en-US', currency = 'USD') {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    });
    return formatter.format(number);
}
console.log(formatCurrency(1000,'en-US','INR')); //₹1,000.00