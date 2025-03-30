//Timer for Count Up (25)

const animationDuration = 2000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
	let frame = 0;
	const countTo = parseInt(el.innerHTML, 10);

	const counter = setInterval(() => {
		frame++;

		const progress = easeOutQuad(frame / totalFrames);

		const currentCount = Math.round(countTo * progress);

		if (parseInt(el.innerHTML, 10) !== currentCount) {
			el.innerHTML = currentCount;
		}

		if (frame === totalFrames) {
			clearInterval(counter);
		}
	}, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);

// Load Particles.js with a specific configuration
particlesJS("particles-js", {
	particles: {
		number: {
			value: 80, // Number of particles
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#ffffff", // Particle color
		},
		shape: {
			type: "circle", // Shape of particles
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
		},
		size: {
			value: 5,
			random: true,
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
	},
	retina_detect: true,
});

// NavBar
const navbarToggler = document.getElementById("navbar-toggler");
const navbarNav = document.getElementById("navbarNav");
const navbarClose = document.getElementById("navbar-close");
const desktopNav = document.getElementById("desktop-nav");

// Toggle the mobile menu visibility on click of hamburger
navbarToggler.addEventListener("click", () => {
	navbarNav.classList.remove("hidden"); // Show the menu
});

// Close the mobile menu on click of the close button (X)
navbarClose.addEventListener("click", () => {
	navbarNav.classList.add("hidden"); // Hide the menu
});




//


// Get the initial countdown data from the PHP hidden span
let countdownData = JSON.parse(document.getElementById("countdown-data").textContent);

// Function to pad numbers below 10 with a leading zero (e.g., 9 becomes 09)
function pad(number) {
	return number < 10 ? "0" + number : number;
}

// Update the countdown every second
function updateCountdown() {
	if (countdownData.months > 0 || countdownData.days > 0 || countdownData.hours > 0 || countdownData.minutes > 0 || countdownData.seconds > 0) {
		// Decrease seconds
		countdownData.seconds--;

		// Handle seconds overflow
		if (countdownData.seconds < 0) {
			countdownData.seconds = 59;
			countdownData.minutes--;
		}

		// Handle minutes overflow
		if (countdownData.minutes < 0) {
			countdownData.minutes = 59;
			countdownData.hours--;
		}

		// Handle hours overflow
		if (countdownData.hours < 0) {
			countdownData.hours = 23;
			countdownData.days--;
		}

		// Handle days overflow
		if (countdownData.days < 0) {
			countdownData.days = 29; // Assuming 30 days in a month, adjust if necessary
			countdownData.months--;
		}

		// Format the countdown string (Days, Hours, Minutes, Seconds)
		let formattedTime = `${countdownData.months}M ${countdownData.days}d ${pad(countdownData.hours)}h:${pad(countdownData.minutes)}m:${pad(countdownData.seconds)}s Left`;

		// Update the countdown display on the page
		document.getElementById("countdown-display").textContent = formattedTime;
	} else {
		// If the event has completed
		document.getElementById("countdown-display").textContent = "Completed";
		clearInterval(countdownInterval); // Stop the countdown
	}
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);


