// Regular expression for validating an Indian driving license
function validateDrivingLicense(licenseNumber) {
    const licenseRegex = /^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{7}$/;
    return licenseRegex.test(licenseNumber);
}
console.log(validateDrivingLicense('KA1234567890123')); // true