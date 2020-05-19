function fetch(url, options) {
    const headers = options.headers || {};
    const method = options.method || 'GET';
    let xhr = new XMLHttpRequest();
    let link = url;
    if (method === "GET") {
        link += "?"
    }
    for (const header in headers) {
        if (object.hasOwnProperty(header)) {
            if (method === "POST") {
                xhr.setRequestHeader(header, headers[header]);
            } else {
                link += header + '=' + headers[header]
            }
        }
    }
    return new Promise((resolve, reject) => {
        xhr.onload = function onload() {
            resolve(xhr.response);
        };
        xhr.onerror = function onerror() {
            reject(xhr.response)
        };
        xhr.open(method, url);
        xhr.send();
    });
}

module.exports = fetch;