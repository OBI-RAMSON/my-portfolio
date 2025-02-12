function validateForm() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    if (email === "" || username === "" || password === "" || confirmPassword === "") {
        errorMessage.innerText = "All fields must be filled!";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match!";
        return false;
    }

    return true;
}
