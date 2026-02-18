window.onload = function() {
    let hour = new Date().getHours();
    /* Checks if the clock element exists on the shell page before alerting [cite: 167-168] */
    if (document.getElementById("clock")) { 
        if (hour < 12) alert("Good Morning!");
        else if (hour < 18) alert("Good Afternoon!");
        else if (hour < 22) alert("Good Evening!");
        else alert("Good Night!");
    }
};

/* Updates the digital clock in the header every second [cite: 162] */
function runClock() {
    let clock = document.getElementById("clock");
    if (clock) clock.innerText = new Date().toLocaleTimeString();
}
setInterval(runClock, 1000);

/* Handles form submission, logging data to console */
document.addEventListener("submit", function(e) {
    if (e.target.tagName === 'FORM') {
        const form = e.target;
        const emailField = form.querySelector("input[name='email']");
        const messageField = form.querySelector("#message");

        /* Anti Spam 1: Basic email format validation */
        if (emailField && !emailField.value.includes("@")) {
            alert("Enter a valid email");
            e.preventDefault();
            return;
        }

        /* Anti Spam 2: Spam Keyword Detection [cite: 256-258] */
        /* Scans message content for common promotional spam phrases [cite: 257] */
        const spamWords = ["free money", "buy now", "click here", "subscribe", "promo"];
        const lowerMessage = messageField.value.toLowerCase();
        const hasSpam = spamWords.some(word => lowerMessage.includes(word));
        
        if (hasSpam) {
            alert("Your message contains blocked spam keywords.");
            e.preventDefault();
            return;
        }

        /* Retrieves all input values and prints them to the browser console [cite: 165] */
        let data = new FormData(form);
        for (let [name, value] of data.entries()) {
            console.log(name + ": " + value);
        }
    }
});