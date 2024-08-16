//Gets an item from local storage and parses it as JSON
function getLocalStorageItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
console.log(getLocalStorageItem('user')); // { name: 'John', age: 30 }