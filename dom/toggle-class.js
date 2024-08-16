//Toggles a class on a DOM element
function toggleClass(element, className) {
    element.classList.toggle(className);
}
console.log(toggleClass(document.getElementById('my-element'), 'active'));