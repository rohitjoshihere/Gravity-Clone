function makeActive(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.add("active");
    var otherButtonIds = ['button1', 'button2', 'button3', 'button4', 'button5'];
    for (var i = 0; i < otherButtonIds.length; i++) {
        if (otherButtonIds[i] !== buttonId) {
            var otherButton = document.getElementById(otherButtonIds[i]);
            otherButton.classList.remove("active");
        }
    }
}

