import styles from "./RobotCard.module.scss";
import { useState } from "react";

function RobotCard({ title, price, profit, count }) {
  const [inpCount, setInpCount] = useState(0);

  const handleInputChange = (event) => {
    setInpCount(parseInt(event.target.value) || 0);
  };

  return (
    <div className={styles.wrapper}>
      <img src="" alt="" />
      <div className={styles.infoBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.info}>Цена: {price}$</p>
        <p className={styles.info}>Прибыль: {profit}$/сут.</p>
        <p className={styles.info}>У вас: {count} шт.</p>
        <div className={styles.countBox}>
          <button onClick={() => setInpCount(inpCount - 1)}>-</button>
          <input type="number" value={inpCount} onChange={handleInputChange} />
          <button onClick={() => setInpCount(inpCount + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
