//Removes an item from local storage
function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}
console.log(removeLocalStorageItem('user')); // undefined