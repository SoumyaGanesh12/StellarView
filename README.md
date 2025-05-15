# StellarView – NASA APOD Explorer

**StellarView** is a professional React-based web application that displays NASA’s Astronomy Picture of the Day (APOD). It provides users with daily high-definition space imagery and accompanying explanations directly from NASA's API.

## Tech Stack

- **React** – Frontend library for building dynamic UI
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **NASA APOD API** – Source of daily astronomy content
- **LocalStorage API** – Used to cache API results

## NASA API Key Setup

To use the application, you need an API key from NASA:

1. Visit [https://api.nasa.gov/](https://api.nasa.gov/) to generate a free API key.
2. Create a `.env` file in the root directory of your project and add:

```bash
VITE_NASA_API_KEY=your_api_key_here
```

## Features

- Automatic Daily Fetch: Retrieves the current day's astronomy image and details from NASA's APOD API.
- High-Resolution Imagery: Displays the image in full resolution for immersive viewing.
- Informative Sidebar: Toggleable panel reveals image title, date, and explanation.
- Smart Caching: Stores daily data in local storage to reduce repeated API requests.
- Responsive Layout: Clean and adaptable design for various screen sizes.
- Loading State: Smooth loading experience while the data is being fetched.

## Getting Started

```bash
git clone https://github.com/SoumyaGanesh12/StellarView.git
npm install
npm run dev
```


