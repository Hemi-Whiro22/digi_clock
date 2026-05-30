// Define timezones with their cities
const timezones = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Singapore', timezone: 'Asia/Singapore' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Bangkok', timezone: 'Asia/Bangkok' },
    { city: 'São Paulo', timezone: 'America/Sao_Paulo' },
    { city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { city: 'Moscow', timezone: 'Europe/Moscow' }
];

// Initialize clocks
function initializeClocks() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = '';

    timezones.forEach((item, index) => {
        const clockCard = createClockCard(item, index);
        clocksGrid.appendChild(clockCard);
    });

    updateAllClocks();
}

// Create a single clock card
function createClockCard(item, index) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.id = `clock-${index}`;

    card.innerHTML = `
        <div class="timezone-label">${item.timezone.split('/')[1]}</div>
        <div class="city-name">${item.city}</div>
        <div class="digital-time" id="digital-${index}">00:00:00</div>
        <div class="analog-clock" id="analog-${index}">
            <div class="clock-numbers" id="numbers-${index}"></div>
            <div class="hand hour-hand" id="hour-${index}"></div>
            <div class="hand minute-hand" id="minute-${index}"></div>
            <div class="hand second-hand" id="second-${index}"></div>
            <div class="clock-center"></div>
        </div>
        <div class="date-info" id="date-${index}">Mon, Jan 1</div>
    `;

    // Create clock numbers
    const numbersContainer = card.querySelector(`#numbers-${index}`);
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.className = 'number';
        const angle = (i - 3) * 30 * Math.PI / 180;
        const x = Math.cos(angle) * 35;
        const y = Math.sin(angle) * 35;
        number.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        number.innerHTML = `<span>${i}</span>`;
        numbersContainer.appendChild(number);
    }

    return card;
}

// Update all clocks
function updateAllClocks() {
    timezones.forEach((item, index) => {
        updateClock(item.timezone, index);
    });
}

// Update individual clock
function updateClock(timezone, index) {
    try {
        // Get current time in the specified timezone
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        const timeString = formatter.format(new Date());
        const dateString = dateFormatter.format(new Date());

        // Parse time components
        const [hours, minutes, seconds] = timeString.split(':').map(Number);

        // Update digital time
        const digitalElement = document.getElementById(`digital-${index}`);
        if (digitalElement) {
            digitalElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        // Update analog clock hands
        updateAnalogClock(hours, minutes, seconds, index);

        // Update date
        const dateElement = document.getElementById(`date-${index}`);
        if (dateElement) {
            dateElement.textContent = dateString;
        }
    } catch (error) {
        console.error(`Error updating clock for ${timezone}:`, error);
    }
}

// Update analog clock hands
function updateAnalogClock(hours, minutes, seconds, index) {
    // Convert to 12-hour format for analog clock
    const h = hours % 12;

    // Calculate angles
    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 3600) * 360;
    const hourAngle = (h / 12) * 360 + (minutes / 720) * 360;

    // Apply rotations
    const hourHand = document.getElementById(`hour-${index}`);
    const minuteHand = document.getElementById(`minute-${index}`);
    const secondHand = document.getElementById(`second-${index}`);

    if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeClocks();
    
    // Update clocks every second
    setInterval(updateAllClocks, 1000);
});

// Optional: Add custom timezone
function addTimezone(city, timezone) {
    timezones.push({ city, timezone });
    initializeClocks();
}

// Optional: Remove timezone by index
function removeTimezone(index) {
    timezones.splice(index, 1);
    initializeClocks();
}
