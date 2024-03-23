import { useState, useEffect } from "react";
import coinImage from "../../assets/img/coinRain/coin1.jpg"; // Путь к изображению монеты
import "./CoinRain.scss";

const CoinRain = ({ speed, frequency }) => {
  const [coins, setCoins] = useState([]);

  const createCoin = () => {
    const randomX = Math.random() * window.innerWidth;
    const coin = { id: Date.now(), x: randomX, y: -100 };
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
  }, [frequency]);

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
          src={coinImage}
          alt="coin"
          className="coin"
          style={{ left: coin.x, top: coin.y }}
        />
      ))}
    </div>
  );
};

export default CoinRain;
