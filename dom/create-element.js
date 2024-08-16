//Creates a new DOM element with optional attributes
function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
}
console.log(createElement('a', { href: 'https://w3docs.com' })); // <a href="https://w3docs.com"></a>