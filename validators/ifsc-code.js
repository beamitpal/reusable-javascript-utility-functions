// Regular expression for validating IFSC code
function validateIFSC(ifsc) {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(ifsc);
}
console.log(validateIFSC('SBIN0001234')); // true
