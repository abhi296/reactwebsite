import React from 'react'

const Coin  =
({
    name,
    price,
    symbol,
    image,
    high_24h,
    low_24h,
    priceChange
  }) => {
    return (
      <div className='crypto-container'>
        <div className='crypto-row'>
          <div className='crypto'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='crypto-symbol'>{symbol}</p>
          </div>
          <div className='crypto-data'>
            <p className='crypto-price'>INR{price}</p>
            <p className='crypto-high24'>INR{high_24h}&#129045;</p>
  
            {priceChange < 0 ? (
              <p className='red'>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className='green'>{priceChange.toFixed(2)}%</p>
            )}
  
            <p className='crypto-low24'>INR{low_24h}&#129047;</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Coin;
