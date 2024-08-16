//Smoothly scrolls to a specific element in the DOM
function scrollToElement(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
console.log(scrollToElement('#section-2')); // Scrolls to an element with the ID of 'section-2'