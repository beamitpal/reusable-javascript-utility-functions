//Clamps a number between a minimum and maximum value
function clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
console.log(clampNumber(3, 0, 4)); // 3