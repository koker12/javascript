const passwordToggle = document.getElementById("password-toggle");
const confirmPasswordToggle = document.getElementById("confirm-password-toggle");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");

passwordToggle.addEventListener("click", function () {
    togglePasswordVisibility(passwordInput, passwordToggle);
});

confirmPasswordToggle.addEventListener("click", function () {
    togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle);
});

function togglePasswordVisibility(input, toggleIcon) {
    if (input.type === "password") {
        input.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

const form = document.querySelector(".password-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        alert("You are welcome!");
    } else {
        const errorText = document.createElement("p");
        errorText.style.color = "red";
        errorText.textContent = "Нужно ввести одинаковые значения";
        confirmPasswordInput.insertAdjacentElement("afterend", errorText);
    }
});
