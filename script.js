let timer;
let isRunning = false;
let seconds = 0;
let lapCounter = 1;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById('startBtn').innerText = 'Pause';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startBtn').innerText = 'Resume';
        isRunning = false;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    document.getElementById('startBtn').innerText = 'Start';
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    document.getElementById('startBtn').innerText = 'Start';
    isRunning = false;
    seconds = 0;
    lapCounter = 1;
    updateDisplay();
    clearLapTimes();
}

function updateStopwatch() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    display.innerText = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function recordLapTime() {
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCounter}: ${document.getElementById('display').innerText}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

function clearLapTimes() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
}
