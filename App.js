import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin  from "./Coin";



function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      )
      .then(result => {
        setCoins(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase()
  );

  return (
    <div className='crypto-app'>
      <div className='crypto-search'>
        <h1 className='crypto-text'>Crypto Currency Tracker</h1>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            high_24h={coin.high_24h}
            low_24h={coin.low_24h}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
  
}

export default App;