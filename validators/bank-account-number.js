// Regular expression for validating an Indian bank account number
function validateBankAccountNumber(accountNumber) {
    const accountNumberRegex = /^\d{9,18}$/;
    return accountNumberRegex.test(accountNumber);
}

console.log(validateBankAccountNumber('1234567890123456')); // true