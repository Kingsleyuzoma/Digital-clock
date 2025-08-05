


//clock
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    document.getElementById("clock").textContent = display;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("timezone").textContent = `Timezone: ${timezone}`;

 
}

 
function pad(n) {
    return n < 10 ? "0" + n : n;
}

setInterval(updateClock, 1000);
updateClock();

//THEME TOGGLE
document.getElementById("toggleTheme").addEventListener("click" , () => {
    document.body.classList.toggle("light");
});






//STOPWATCH
let stopwatchInterval;
let elapsed = 0;

function startStopwatch() {
    if (stopwatchInterval) return;

    stopwatchInterval = setInterval(() => {
        elapsed++;
        const hrs = Math.floor(elapsed / 3600);
        const mins = Math.floor((elapsed % 3600) / 60);
        const secs = elapsed % 60;
        document.getElementById("stopwatch").textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    elapsed = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}