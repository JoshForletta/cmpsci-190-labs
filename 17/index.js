const POSTMAN_ECHO_URL = "https://postman-echo.com";

function createProgressNode(method, url) {
    let progressNode = document.createElement("div");
    let urlNode = document.createTextNode(`${method} ${url}: `);
    let progressPercentageNode = document.createTextNode("0%");

    progressNode.append(urlNode, progressPercentageNode);

    document.body.append(progressNode);

    return progressPercentageNode;
}

function get(request, url, query) {
    request.open("GET", `${url}?${query}`, true);
    request.send();
}

function post(request, url, query) {
    request.open("POST", url, true);

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    request.send(query);
}

function request(method, url, query, callback) {
    let request = new XMLHttpRequest();

    let progressPercentageNode = createProgressNode(method, url);

    request.onprogress = function(progress) {
        progressPercentageNode.textContent = (100 * (progress.loaded / progress.total)).toFixed(2) + "%";
    }

    request.onload = function() {
        if (this.status != 200) {
            return alert(`An error occured: ${this.statusText}`);
        }

        callback(this.responseText)
    };

    method.toUpperCase() == "POST" ? post(request, url, query) : get(request, url, query);
}

window.onload = function() {
    let sendButton = document.getElementById("sendButton");

    sendButton.onclick = function() {
        let method = document.getElementById("method").value;
        let key = document.getElementById("key").value;
        let value = document.getElementById("value").value;
        let query = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

        request(method, `${POSTMAN_ECHO_URL}/${method.toLowerCase()}`, query, function(response) {
            response = JSON.parse(response);

            let responseKey = decodeURIComponent(key);
            let responseValue = decodeURIComponent(response[method == "POST" ? "form" : "args"][key]);

            document.getElementById("response").innerText = `Echoed: Key: ${responseKey}, Value: ${responseValue}`;
        })
    }
}
