window.onload = function() {
    let hour = new Date().getHours();
    /* Checks if the clock element exists on the shell page before alerting */
    if (document.getElementById("clock")) { 
        if (hour < 12) alert("Good Morning!");
        else if (hour < 18) alert("Good Afternoon!");
        else if (hour < 22) alert("Good Evening!");
        else alert("Good Night!");
    }
};

/* Updates the digital clock in the header every second */
function runClock() {
    let clock = document.getElementById("clock");
    if (clock) clock.innerText = new Date().toLocaleTimeString();
}
setInterval(runClock, 1000);

/* Handles form submission, logging data to console as required by Exercise 2 */
document.addEventListener("submit", function(e) {
    if (e.target.tagName === 'FORM') {
        const form = e.target;
        const emailField = form.querySelector("input[name='email']");

        /* Basic email format validation as required by Exercise 4 */
        if (emailField && !emailField.value.includes("@")) {
            alert("Enter a valid email");
            e.preventDefault();
            return;
        }

        /* Retrieves all input values and prints them to the browser console */
        let data = new FormData(form);
        for (let [name, value] of data.entries()) {
            console.log(name + ": " + value);
        }
        
        /* The form will now proceed to submit to FormSubmit without anti-spam interference */
    }
});