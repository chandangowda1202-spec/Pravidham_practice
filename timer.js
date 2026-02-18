let timerInterval;
let seconds = 0;
const ring = document.querySelector(".progress-ring");
const circumference = 2 * Math.PI * 100;

function updateTimer() {
  seconds++;
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("timeDisplay").innerText = `${mins}:${secs}`;

  const progress = seconds % 3600;
  const offset = circumference - (progress / 3600) * circumference;
  ring.style.strokeDashoffset = offset;
}

document.getElementById("startBtn").onclick = () => {
  timerInterval = setInterval(updateTimer, 1000);
};

document.getElementById("stopBtn").onclick = () => {
  clearInterval(timerInterval);
};
