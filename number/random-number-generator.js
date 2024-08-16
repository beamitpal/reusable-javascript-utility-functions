//Generates a random number between two values
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10)); // 4