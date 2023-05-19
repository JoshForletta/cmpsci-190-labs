const WORLD_CLOCK_URL = "https://worldtimeapi.org/api/timezone/PST8PDT";

function updateClock() {
    let request = new XMLHttpRequest();

    request.open("GET", WORLD_CLOCK_URL, true);

    request.onload = function() {
        if (this.status != 200) {
            return alert(`An error occured: ${this.statusText}`);
        }

        let response = JSON.parse(this.response);
        let dateTime = new Date(response.datetime);

        document.getElementById("dateTime").innerText = dateTime.toLocaleString("en-us");
    }

    request.send();
}

window.onload = function() {
    updateClock();

    setInterval(updateClock, 1000);
}
