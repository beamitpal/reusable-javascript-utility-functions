//Safely retrieves a nested value from an object
function getNestedValue(obj, keyPath) {
    return keyPath.reduce((acc, key) => acc && acc[key], obj);
}
console.log(getNestedValue({ a: { b: { c: 1 } } }, ['a', 'b', 'c'])); // 1