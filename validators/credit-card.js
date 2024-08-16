function luhnAlgorithm(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits starting from the right
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // If the total modulo 10 is 0, the card number is valid
    return sum % 10 === 0;
}
function validateCreditCardNumber(creditCardNumber) {
    creditCardNumber = creditCardNumber.replace(/\D/g, '');
    if (creditCardNumber.length < 13 || creditCardNumber.length > 19) {
        return false;
    }
    return luhnAlgorithm(creditCardNumber);
}

console.log(validateCreditCardNumber('123456789011')); // false