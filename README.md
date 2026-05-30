# Multi-Timezone Digital Clock ⏰🌍

A beautiful, responsive digital clock that displays the current time in multiple time zones around the world.

## Features

✨ **Digital & Analog Display**
- Shows time in both digital format (HH:MM:SS) and analog clock face
- Real-time updates every second
- Smooth hand animations

🌍 **12 Major Time Zones**
- New York (America/New_York)
- London (Europe/London)
- Tokyo (Asia/Tokyo)
- Sydney (Australia/Sydney)
- Dubai (Asia/Dubai)
- Singapore (Asia/Singapore)
- Los Angeles (America/Los_Angeles)
- Paris (Europe/Paris)
- Bangkok (Asia/Bangkok)
- São Paulo (America/Sao_Paulo)
- Hong Kong (Asia/Hong_Kong)
- Moscow (Europe/Moscow)

🎨 **Modern Design**
- Glassmorphism UI with frosted glass effect
- Gradient background (purple to pink)
- Smooth animations and hover effects
- Responsive grid layout
- Mobile-friendly design
- Glowing digital display

⚡ **Performance**
- Lightweight and fast
- Efficient clock updates
- No external dependencies
- Uses native browser APIs (Intl)

## How to Use

1. Clone the repository
   ```bash
   git clone git@github.com:Hemi-Whiro22/digi_clock.git
   cd digi_clock
   ```

2. Open `index.html` in your web browser
   - Simply double-click the file, or
   - Use a local server: `python -m http.server 8000`

3. The clocks will automatically display and update in real-time

Each card shows:
- Timezone name
- City name
- Digital time (HH:MM:SS)
- Analog clock with moving hands
- Current date

## Customization

### Add a Custom Timezone

Edit `script.js` and add to the `timezones` array:

```javascript
{ city: 'Mumbai', timezone: 'Asia/Kolkata' }
```

Or use the function in the browser console:
```javascript
addTimezone('Mumbai', 'Asia/Kolkata');
```

### Remove a Timezone

Use the function in the browser console:
```javascript
removeTimezone(5); // Removes timezone at index 5
```

### Edit Default Timezones

Modify the `timezones` array in `script.js` to customize which cities are displayed.

## Supported Timezones

The clock uses standard IANA timezone names. Common examples:

**Americas**
- `America/New_York`, `America/Chicago`, `America/Denver`, `America/Los_Angeles`
- `America/Sao_Paulo`, `America/Buenos_Aires`, `America/Toronto`

**Europe**
- `Europe/London`, `Europe/Paris`, `Europe/Berlin`, `Europe/Moscow`
- `Europe/Madrid`, `Europe/Rome`, `Europe/Amsterdam`

**Asia**
- `Asia/Tokyo`, `Asia/Shanghai`, `Asia/Hong_Kong`, `Asia/Bangkok`
- `Asia/Dubai`, `Asia/Kolkata`, `Asia/Singapore`, `Asia/Bangkok`

**Australia & Pacific**
- `Australia/Sydney`, `Australia/Melbourne`, `Pacific/Auckland`

Find more at: [IANA Timezone Database](https://www.iana.org/time-zones)

## Browser Support

| Browser | Status |
|---------|--------|
| Chrome  | ✅ Full support |
| Firefox | ✅ Full support |
| Safari  | ✅ Full support |
| Edge    | ✅ Full support |
| Mobile  | ✅ Full support |

## File Structure

```
digi_clock/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
├── script.js       # Clock logic and timezone updates
└── README.md       # Documentation
```

## Technical Details

- **Timezone Handling**: Uses JavaScript's `Intl.DateTimeFormat` API for accurate timezone conversions
- **Real-time Updates**: Clock updates every 1000ms (1 second)
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Responsive**: CSS Grid layout adapts from 1 column on mobile to 4 columns on large screens
- **Smooth Animations**: CSS transitions and animations for cards and hands

## How It Works

1. **Initialization**: When the page loads, 12 clock cards are dynamically created
2. **Time Calculation**: Each second, the current time is calculated for each timezone using `Intl.DateTimeFormat`
3. **Hand Rotation**: Analog clock hands are rotated based on the calculated time
4. **Display Update**: Digital display and date are updated simultaneously

## Tips

- The analog clock second hand has a green glow for easy visibility
- Minute hand moves smoothly between minute marks
- Hour hand moves continuously throughout the hour
- Each clock card has a subtle hover animation
- Clocks are automatically sorted in the grid

## Performance Notes

- Updates run every second (not every millisecond for better performance)
- Uses CSS transforms for smooth animations (GPU accelerated)
- Minimal DOM manipulation after initialization

Enjoy your multi-timezone clock! ⏰🌍✨
