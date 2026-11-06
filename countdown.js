const weddingDate = new Date(2026, 10, 21);
const countdown = document.querySelector('#countdown');
const countdownMessage = document.querySelector('#countdown-message');
const countdownValues = {
	days: countdown.querySelector('[data-unit="days"]'),
	hours: countdown.querySelector('[data-unit="hours"]'),
	minutes: countdown.querySelector('[data-unit="minutes"]'),
	seconds: countdown.querySelector('[data-unit="seconds"]')
};

function updateCountdown() {
	const remaining = weddingDate.getTime() - Date.now();

	if (remaining <= 0) {
		countdown.hidden = true;
		countdownMessage.hidden = false;
		return false;
	}

	const totalSeconds = Math.floor(remaining / 1000);
	countdownValues.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(3, '0');
	countdownValues.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
	countdownValues.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
	countdownValues.seconds.textContent = String(totalSeconds % 60).padStart(2, '0');
	return true;
}

if (updateCountdown()) {
	const timer = window.setInterval(() => {
		if (!updateCountdown()) {
			window.clearInterval(timer);
		}
	}, 1000);
}