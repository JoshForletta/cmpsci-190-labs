Node.prototype.insertAfter = function(newNode, referenceNode) {
    this.insertBefore(newNode, referenceNode.nextSibling)
}

function affix(text) {
    let div = document.createElement("div");

    div.innerText = text;

    div.appendChild(document.createElement("br"));

    return div;
}

window.onload = function() {
    let body = document.getElementsByTagName("body")[0];

    Array.from(body.childNodes.values())
        .filter(node => node.nodeType == 1)
        .forEach(node => {
            body.insertBefore(affix("Start element"), node);
            body.insertAfter(affix("End element"), node);
        })
}
