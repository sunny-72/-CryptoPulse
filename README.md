# CryptoPulse

**CryptoPulse** is a React-based web application designed to help users track cryptocurrency prices, view detailed coin statistics, and explore various market trends in real-time. It leverages powerful charts and data visualizations to provide an engaging and informative user experience.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Project Repository](#project-repository)
- [Credits](#credits)
- [License](#license)
- [Contact Information](#contact-information)

## Live Demo
Explore the **CryptoPulse** website live by clicking [**this link**](https://ShyamSingh841442.github.io/CryptoPulse/).

## Features
- **Real-Time Cryptocurrency Data**: Fetch live data on various cryptocurrencies using external APIs.
- **Interactive Charts**: View interactive charts for market trends, price fluctuations, and more.
- **Coin Details**: Click on any coin to view detailed statistics such as market cap, volume, and price.
- **Responsive Design**: Enjoy seamless browsing on any device with a mobile-first approach.
- **User-Friendly Navigation**: Smooth navigation between pages using React Router.

## Installation
To get a local copy up and running, follow these steps:

### Prerequisites
Ensure you have Node.js and npm installed on your machine.

### Steps
    1. Clone the repository:
       git clone https://github.com/ShyamSingh841442/CryptoPulse.git
       
    2. Navigate into the project directory:
       cd CryptoPulse
       
    3. Install dependencies:
       npm install
       
    4. Start the development server:
       npm run dev
    
       
    The app will be available at http://localhost:3000 in your browser.

## Technologies Used
  - React.js: For building the user interface.
  - React Router: For client-side routing.
  - Tailwind CSS: For styling components with utility-first CSS.
  - React Google Charts: For displaying interactive charts.
  - Vite: A modern build tool for faster development.


## Project Structure
    The project’s file structure is organized as follows:
          crypto-pulse/
          ├── dist/
          │   ├── assets/
          │   └── index.html
          ├── public/
          │   └── vite.svg
          ├── src/
          │   ├── assets/
          │   ├── components/
          │   │   ├── Footer/
          │   │   │   ├── Footer.css
          │   │   │   └── Footer.jsx
          │   │   ├── LineChart.jsx
          │   │   ├── Navbar/
          │   │       ├── Navbar.css
          │   │       └── Navbar.jsx
          │   ├── context/
          │   │   └── CoinContext.jsx
          │   ├── pages/
          │   │   ├── Coin/
          │   │   │   ├── Coin.css
          │   │   │   └── Coin.jsx
          │   │   ├── Home/
          │   │       ├── Home.css
          │   │       └── Home.jsx
          │   ├── App.jsx
          │   ├── index.css
          │   └── main.jsx
          ├── .gitignore
          ├── eslint.config.js
          ├── index.html
          ├── package-lock.json
          ├── package.json
          ├── postcss.config.js
          ├── README.md
          ├── tailwind.config.js
          └── vite.config.js

## Usage
  - Homepage: Displays an overview of cryptocurrencies, including their current price, market cap, and volume.
  - Coin Details: Click on any cryptocurrency to view detailed information such as price history, market data, and charts.
  - Charts: View price trends over different time frames using Google Charts.


## Project Repository
   The source code for MovieMania is available on GitHub: https://github.com/ShyamSingh841442/CryptoPulse.git

##  Credits
   - CoinGecko API: Used for fetching real-time cryptocurrency data.
   - React Icons: For adding various icons across the UI.
   - Vite: For faster build times and optimized development experience.
   - Tailwind CSS: For styling components with utility-first CSS.

    
## License
   This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact Information
   For any questions or feedback, feel free to reach out:
   - Name: Shyam Kumar (BTech Student, CSE)
   - Email: [shyamsingh841442@gmail.com](mailto:shyamsingh841442@gmail.com)  
   - LinkedIn: [Shyam Kumar LinkedIn](https://www.linkedin.com/in/shyamsingh841442)

Thank you for checking out CryptoPulse! Enjoy tracking the latest cryptocurrency trends and prices.




