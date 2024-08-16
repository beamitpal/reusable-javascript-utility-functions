//Sets an item in local storage with JSON stringification
function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

console.log(setLocalStorageItem('user', { name: 'John', age: 30 })); // undefined