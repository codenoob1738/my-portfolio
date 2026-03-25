let buttons = document.getElementsByClassName("detailsButton");

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function () {
        let details = this.nextElementSibling;

        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
}