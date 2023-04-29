window.onload = function() {
    document.getElementById("form").onsubmit = function() {
        let invalidFieldMessages = [];

        if (document.getElementById("user").value == "") {
            invalidFieldMessages.push("Name field may not be blank");
        }

        if (document.getElementById("phone").value == "") {
            invalidFieldMessages.push("Phone field may not be blank");
        }

        if (invalidFieldMessages.length) {
            alert(invalidFieldMessages.join("\n"));
        } else {
            alert("Submitting form");
        }
    }
}
