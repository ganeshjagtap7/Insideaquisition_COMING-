# Waitlist Landing Page

A minimal, single-page React application with LaunchList waitlist integration. This landing page features a clean, modern design perfect for collecting email signups for upcoming products or services.

## Features

- 🎨 Minimal, modern design with gradient background
- 📱 Fully responsive (mobile-first)
- ⚡ Built with React + Vite for fast development
- 📧 LaunchList widget integration for waitlist management
- 🔧 Environment variable configuration

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd waitlist-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env
```

Edit `.env` and replace `BexQk0` with your LaunchList form key if different.

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal).

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## LaunchList Integration

This project integrates with [LaunchList](https://getlaunchlist.com) for waitlist management.

### Setup

1. The LaunchList script is automatically loaded in `index.html`:
```html
<script src="https://getlaunchlist.com/js/widget.js" defer></script>
```

2. The widget is embedded in `src/App.jsx`:
```jsx
<div class="launchlist-widget" data-key-id="BexQk0" data-height="180px"></div>
```

3. To use a different form key:
   - Update the `data-key-id` attribute in `src/App.jsx`, or
   - Set `VITE_LAUNCHLIST_KEY` in `.env` and update the component to use it

### Documentation

For more information on LaunchList integration, visit:
- [LaunchList Integration Docs](https://getlaunchlist.com/help/docs/integrations)

## Customization

### Styling

- `src/App.css` - Main component styles
- `src/index.css` - Global styles and resets

### Form Key

The LaunchList form key is currently set to `BexQk0`. To change it:
1. Update the `data-key-id` attribute in `src/App.jsx`
2. Or use environment variables (requires code update to read from `import.meta.env.VITE_LAUNCHLIST_KEY`)

## Project Structure

```
waitlist-landing/
├── src/
│   ├── App.jsx          # Main component with LaunchList widget
│   ├── App.css          # Component styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point with LaunchList script
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── .env.example         # Environment variable template
└── README.md            # This file
```

## License

MIT
