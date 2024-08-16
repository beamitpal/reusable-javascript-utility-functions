// Converts a string into a URL-friendly "slug"
function slugify(str) {
    return str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

console.log(slugify("  Hello World  ")); // "hello-world"