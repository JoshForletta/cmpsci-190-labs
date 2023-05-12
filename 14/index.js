function outputDateTime() {
    let dateTime = new Date();

    let formattedDate = dateTime.toLocaleDateString("en-us");
    let formattedTime = dateTime.toLocaleTimeString("en-us");

    document.getElementById("dateTime").innerText = formattedDate + " " + formattedTime;
}

window.onload = function() {
    let dateTime = document.createElement("div");
    let refreshDateTime = document.createElement("input");

    dateTime.id = "dateTime";

    refreshDateTime.id = "refreshDateTime";
    refreshDateTime.type = "button";
    refreshDateTime.value = "refresh";
    refreshDateTime.onclick = outputDateTime;

    document.body.append(dateTime, refreshDateTime);

    outputDateTime();
}
