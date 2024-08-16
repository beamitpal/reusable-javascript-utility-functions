 // Regular expression for validating an Aadhaar number
function validateAadhaarCard(aadhaarNumber) {
    const aadhaarRegex = /^\d{12}$/;

    return aadhaarRegex.test(aadhaarNumber);
}
console.log(validateAadhaarCard('123456789012')); // true