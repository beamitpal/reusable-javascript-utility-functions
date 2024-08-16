function formatTime(date, locale = 'en-US', options = {}) {
    const timeOptions = {
        ...options,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, timeOptions);
    return formatter.format(date);
}
console.log(formatTime(new Date())); // 12:00:00 AM