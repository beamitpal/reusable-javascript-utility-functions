function formatDate(date, locale = 'en-US', options = {}) {
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}
console.log(formatDate(new Date())); // 8/16/2024
