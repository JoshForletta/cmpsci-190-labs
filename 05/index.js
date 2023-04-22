function reverseUserInput() {
    let userInput = prompt("Enter a sentance: ");

    userInput = userInput.split(" ");

    userInput.reverse();

    alert(userInput.join(" "));
}
