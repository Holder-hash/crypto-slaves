import styles from "./MainPage.module.scss";
import TopPlayersTable from "../../widgets/TopPlayersTable/TopPlayersTable";

export default function MainPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>Общие сведения</p>
        <div className={styles.generalInfo}>
          <ul>
            <li>
              Всего игроков: <span>12 581</span>
            </li>
            <li>
              За 24 часа: <span>12 581</span>
            </li>
            <li>
              Бюджет проекта: <span>12 581</span>
            </li>
            <li>
              Всего выплачено: <span>12 581</span>
            </li>
          </ul>
        </div>
        <p className={styles.title} style={{ margin: "30px 0" }}>
          ТОП 100
        </p>
        <div className={styles.topPlayers}>
          <TopPlayersTable />
        </div>
      </div>
    </>
  );
}
