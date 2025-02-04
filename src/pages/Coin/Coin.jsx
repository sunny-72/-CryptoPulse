import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Coin.css';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

function Coin() {
  const { coinId } = useParams(); // Get the coinId from URL params
  const [coinData, setCoinData] = useState(null); // Set initial state to null (to handle undefined case)
  const [loading, setLoading] = useState(true); // Add a loading state to track fetching status
  const [error, setError] = useState(null); // Track errors
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext); // Get currency from context

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-uEKmYfHTfaWXnVTt93sWZLar', // API key
      },
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      if (!response.ok) {
        throw new Error('Failed to fetch coin data');
      }
      const data = await response.json();
      setCoinData(data); // Set the coin data
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {
      setError(err.message); // Catch any errors and set the error state
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-uEKmYfHTfaWXnVTt93sWZLar',
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData(); // Fetch data when the component is mounted or currency changes
    fetchHistoricalData(); // Fetch historical data as well
  }, [currency, coinId]); // Run when currency or coinId changes

  // Handle loading, error, or empty data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // if (!coinData) {
  //   return <div>No data available for this coin.</div>;
  // }

  // if (!historicalData) {
  //   return <div>No historical data available for this coin.</div>;
  // }

  return (
    <div className='coin'>
      {/* Coin Name and Image Section */}
      <div className="coin-name">
        <img src={coinData.image.large} alt={coinData.name} /> {/* Display coin image */}
        <p><b>{coinData.name}</b></p>
        <p>{coinData.symbol.toUpperCase()}</p>
      </div>

      {/* Coin Chart Section */}
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>

      {/* Coin Information Section */}
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>
            {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>
            {currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>24 Hour High</li>
          <li>
            {currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>24 Hour Low</li>
          <li>
            {currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Coin;
