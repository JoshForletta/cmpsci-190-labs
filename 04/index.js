function displayDateTime() {
    let dateTime = new Date();

    document.getElementById("dateTime").innerText = ""
        + dateTime.getDate()
        + " "
        + dateTime.toLocaleString("en-US", { month: "short" })
        + " "
        + dateTime.getFullYear()
        + " "
        + dateTime.getHours()
        + ":"
        + dateTime.getMinutes();
}
