// Regular expression for validating a global address
function validateGlobalAddress(address) {
    const globalAddressRegex = /^[a-zA-Z0-9\s,.-/()#'&]+$/;
    return globalAddressRegex.test(address);
}
console.log(validateGlobalAddress('123, Main Street')); // true