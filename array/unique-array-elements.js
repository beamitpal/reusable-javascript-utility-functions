//Returns only the unique elements from an array
function uniqueArray(arr) {
    return [...new Set(arr)];
}


console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5] 