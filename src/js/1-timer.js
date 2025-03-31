document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("datetime-picker");
    const startBtn = document.getElementById("start-btn");
    const timerDisplay = document.getElementById("timer");
    
    let countdownInterval;

    startBtn.addEventListener("click", () => {
        clearInterval(countdownInterval);
        const targetDate = new Date(datePicker.value).getTime();
        if (isNaN(targetDate)) {
            alert("Будь ласка, виберіть коректну дату!");
            return;
        }

        countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                timerDisplay.textContent = "00:00:00";
                alert("Час вийшов!");
                return;
            }

            const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

            timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    });
});
