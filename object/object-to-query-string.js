//Converts an object to a query string.
function objectToQueryString(obj) {
    return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}
console.log(objectToQueryString({ a: 1, b: 2 })); // "a=1&b=2"