//Formats a time in milliseconds to `hh:mm:ss`.
function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours}:${minutes}:${seconds}`;
}

console.log(formatTime(1000)); // 0:0:1