import styles from "./RobotsPage.module.scss";
import RobotCard from "../../widgets/RobotCard/RobotCard";

function RobotsPage(params) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overview}>
        <p className={styles.title}>Количество ваших роботов:</p>
        <p>100</p>
        <br />
        <p className={styles.title}>Ваш доход с роботов:</p>

        <p>16.25$/сут.</p>
      </div>
      <div className={styles.robotsContain}>
        <p className={styles.title}>Роботы-майнеры</p>
        <p>Ваш баланс для покупок: 100$</p>
        <div className={styles.robotsList}>
          <RobotCard title={"Doge-miner"} price={1} profit={0.04} count={55} />
          <RobotCard title={"Doge-miner"} price={1} profit={0.04} count={55} />
          <RobotCard title={"Doge-miner"} price={1} profit={0.04} count={55} />
        </div>
      </div>
    </div>
  );
}

export default RobotsPage;
