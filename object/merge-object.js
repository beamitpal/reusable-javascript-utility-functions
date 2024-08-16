//Merges two or more objects together
function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
