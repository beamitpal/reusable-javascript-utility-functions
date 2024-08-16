//Retries a promise-based function a specified number of times
function retryPromise(fn, retries) {
    return fn().catch(err => {
        if (retries > 0) {
            return retryPromise(fn, retries - 1);
        } else {
            throw err;
        }
    });
}
console.log(retryPromise(() => Promise.reject("Error"), 3)); // Error