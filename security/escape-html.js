// /Escapes HTML to prevent XSS attacks
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}
console.log(escapeHTML("<a href='#'>Hello World</a>")); // "&lt;a href='#'&gt;Hello World&lt;/a&gt;"