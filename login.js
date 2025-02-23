
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const detailsForm = document.getElementById("details-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validate email format
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        } else {
            alert("Login successful!");

            // Hide login form and show details form
            document.querySelector(".container").style.display = "none";
            detailsForm.style.display = "block";
        }
    });

    const userDetailsForm = document.getElementById("user-details");
    userDetailsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const contact = document.getElementById("contact").value.trim();

        if (name === "" || contact === "") {
            alert("Please fill in all fields.");
        } else {
            alert(`Welcome, ${name}! Your details have been saved.`);
            detailsForm.style.display = "none"; // Hide details form after submission
        }
    });
});
