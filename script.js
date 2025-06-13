// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the button and message paragraph
    const button = document.getElementById("magicButton");
    const message = document.getElementById("message");

    // Define an array of fun messages
    const messages = [
        "You are awesome! 💀",
        "Keep shining! ✨",
        "Coding is fun! 💻",
        "Have a great day! 🌞",
        "You're a genius! 🧠"
    ];

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        // Pick a random message from the array
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Display the random message
        message.textContent = randomMessage;

        // Animate the message
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.opacity = 1;
        }, 200);
    });
});
