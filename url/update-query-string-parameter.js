//Updates a query string parameter in the URL without reloading the page
function updateQueryStringParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}
console.log(updateQueryStringParameter('page', 2)); // Updates '?page=2' in the URL