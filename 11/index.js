window.onload = function() {
    document.write(
        Array.from(document.getElementsByTagName("body")[0].childNodes.values())
            .filter(node => node.nodeType == 8)
            .map(node => node.nodeValue)
            .join(" ")
    );
}
