let timer;
let totalTime = 0;  // Total time in seconds
let remainingTime = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');

// Set time based on selected egg type
document.getElementById('soft').addEventListener('click', () => setTime(3)); // Soft (3 mins)
document.getElementById('medium').addEventListener('click', () => setTime(5)); // Medium (5 mins)
document.getElementById('hard').addEventListener('click', () => setTime(7)); // Hard (7 mins)

// Start the timer
document.getElementById('start').addEventListener('click', () => {
    if (!isRunning && totalTime > 0) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
});

// Stop the timer
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

// Reset the timer
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    remainingTime = totalTime;
    updateDisplay();
});

// Set time for the egg type and start the timer
function setTime(minutes) {
    totalTime = minutes * 60;  // Convert minutes to seconds
    remainingTime = totalTime;
    updateDisplay();
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Update the timer display
function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;
}

// Pad single-digit numbers with leading zero
function pad(number) {
    return number < 10 ? `0${number}` : number;
}

// Update the remaining time every second
function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        updateDisplay();
    } else {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up! Your eggs are ready!");
    }
}
