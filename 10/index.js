function getCookieValues(name) {
    let values = document.cookie.split(";")
        .map(nameValuePair => nameValuePair.split("="))
        .find(nameValuePair => decodeURIComponent(nameValuePair[0]) == name)[1];

    return decodeURIComponent(values).split("#")
}

function setCookieValues(name, values) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(values.join("#"))
}

function promptForFriends() {
    setCookieValues("friends", prompt("Enter list of friends (sepatated by space).").split(" "));
}

function displayFriends() {
    let friends = getCookieValues("friends");
    let friendsElement = document.getElementById("friends");

    friends.forEach(friend => friendsElement.innerHTML += "<li>" + friend + "</li>");
}
