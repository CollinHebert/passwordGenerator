document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateButton = document.querySelector(".generate-button");
    const copyButton = document.querySelector(".copy").closest("button"); // Ensure correct button selection

    function generatePassword(length = 12) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }

    generateButton.addEventListener("click", () => {
        passwordField.value = generatePassword();
    });

    copyButton.addEventListener("click", () => {
        if (passwordField.value) {
            navigator.clipboard.writeText(passwordField.value)
                .then(() => {
                    alert("Password copied to clipboard!");
                })
                .catch(err => console.error("Failed to copy:", err));
        }
    });
});
