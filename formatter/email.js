function formatEmail(email) {
    if (!email.includes('@')) {
        throw new Error('Invalid email format');
    }
    const normalizedEmail = email.toLowerCase();
    const formattedEmail = normalizedEmail.trim();
    return formattedEmail;
}
console.log(formatEmail('amit@example.com')); // amit@example.com