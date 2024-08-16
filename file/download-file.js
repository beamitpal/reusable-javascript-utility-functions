//Triggers a download of a file in the browser
function downloadFile(data, filename, type) {
    const file = new Blob([data], { type });
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
console.log(downloadFile('Hello, world!', 'hello.txt', 'text/plain')); // Downloads a file with the content 'Hello, world!' as 'hello.txt'