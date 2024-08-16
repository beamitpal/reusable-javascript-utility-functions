 // Regular expression for validating an Indian mobile number
function validateMobileNumber(mobileNumber) {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobileNumber);
}
console.log(validateMobileNumber('1234567890')); // false