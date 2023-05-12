CSSStyleDeclaration.prototype.setColors = function(backgroundColor, color, borderColor) {
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.borderColor = borderColor;
}


function toggleWelcome() {
    let welcome = document.getElementById("welcome");

    if (welcome.style.backgroundColor == "red") {
        welcome.style.setColors("yellow", "black", "red");
    } else {
        welcome.style.setColors("red", "white", "yellow");

    }


}

window.onload = function() {
    let welcome = document.getElementById("welcome");

    welcome.style.borderStyle = "solid";
    welcome.style.borderWidth = "thick";
    welcome.style.setColors("red", "white", "yellow");

    document.getElementById("toggle").onclick = toggleWelcome;
}
