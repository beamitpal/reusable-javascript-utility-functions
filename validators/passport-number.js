// Regular expression for validating an Indian passport number
function validatePassportNumber(passportNumber) {
    const passportRegex = /^[A-Z][0-9]{7}$/;
    return passportRegex.test(passportNumber);
}
console.log(validatePassportNumber('A1234567')); // true