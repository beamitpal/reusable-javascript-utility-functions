//Delegates an event to a parent element, useful for dynamic content
function delegateEvent(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, event => {
        if (event.target.matches(selector)) {
            handler(event);
        }
    });
}
console.log(delegateEvent(document.body, 'click', 'a', event => console.log(event))); // logs the clicked <a> element in the console