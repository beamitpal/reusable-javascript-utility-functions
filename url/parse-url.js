//Parses a URL into its components
function parseURL(url) {
    const a = document.createElement('a');
    a.href = url;
    return {
        protocol: a.protocol,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash,
        host: a.host
    };
}

console.log(parseURL('https://w3docs.com/path/name?search=test#hash')); // {protocol: "https:", hostname: "w3docs.com", port: "", pathname: "/path/name", search: "?search=test", hash: "#hash", host: "w3docs.com"}