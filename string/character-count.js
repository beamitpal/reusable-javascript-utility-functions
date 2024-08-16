//Counts the number of occurrences of a specific character in a string
function countCharacter(str, char) {
    return str.split(char).length - 1;
}

console.log(countCharacter("Hello World", "l")); // 3