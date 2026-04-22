let buttons = document.getElementsByClassName("detailsButton");

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function () {
        let details = this.nextElementSibling;

        if (this.textContent === "Show Details") {
            this.textContent = "Hide Details";
        } else {
            this.textContent = "Show Details";
        }

        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Message submitted! 📫");
    form.reset();
});

const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkActive = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", darkActive);

});

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

const toggleButtons = document.querySelectorAll("toggleFilter");
const filter = document.getElementById("filter-buttons");

toggleButtons.addEventListener("click", function () {
    filter.classList.toggle("hidden");
});

