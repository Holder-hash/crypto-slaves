import "./CoinRain.scss";
import { useState, useEffect } from "react";

const CoinRain = ({ images, speed, frequency }) => {
  const [coins, setCoins] = useState([]);

  const createCoin = () => {
    const randomX = Math.random() * window.innerWidth;
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const coin = { id: Date.now(), x: randomX, y: -100, image: randomImage };
    setCoins((prevCoins) => [...prevCoins, coin]);
  };

  const updateCoinsPosition = () => {
    setCoins((prevCoins) =>
      prevCoins.map((coin) => ({ ...coin, y: coin.y + speed }))
    );
  };

  const removeOffscreenCoins = () => {
    setCoins((prevCoins) =>
      prevCoins.filter((coin) => coin.y <= window.innerHeight)
    );
  };

  useEffect(() => {
    const interval = setInterval(createCoin, frequency);
    return () => clearInterval(interval);
  }, [frequency, images]);

  useEffect(() => {
    const updateInterval = setInterval(updateCoinsPosition, 50);
    const removeInterval = setInterval(removeOffscreenCoins, 1000);
    return () => {
      clearInterval(updateInterval);
      clearInterval(removeInterval);
    };
  }, [speed]);

  return (
    <div className="coin-rain">
      {coins.map((coin) => (
        <img
          key={coin.id}
          src={coin.image}
          alt="coin"
          className="coin"
          style={{ left: coin.x, top: coin.y }}
        />
      ))}
    </div>
  );
};

export default CoinRain;
