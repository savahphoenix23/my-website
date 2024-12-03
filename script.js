// Simple JavaScript for form submission alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name && message) {
            alert(Thank you, ${name}! Your message has been sent.);
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});