//Recursively freezes an object to make it immutable
function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj);
}

console.log(deepFreeze({ a: 1, b: { c: 2 } })); // { a: 1, b: { c: 2 } }