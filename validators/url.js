// Regular expression for validating a URL
function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlRegex.test(url);
}
console.log(validateURL('https://www.google.com')); // true