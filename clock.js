// Get the clock element
var clock = document.getElementById('clock');

// Function to update the clock
function updateClock() {
    var now = new Date(); // Get the current date and time

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad single digit hours, minutes, and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Set the clock content with the current time
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update the clock immediately
updateClock();
