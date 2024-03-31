import styles from "./AdminPage.module.scss";
import { useState } from "react";

function AdminPage() {
  const [lineParams, setLineParams] = useState({
    width: 165,
    posX: 0,
  });
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul>
          <li>Все игроки</li>
          <li>Пополнения</li>
          <li>Запросы на вывод</li>
          <div
            className={styles.navLine}
            style={{
              left: `${lineParams.posX}px`,
              width: `${lineParams.width}px`,
            }}
          ></div>
        </ul>
      </nav>
    </div>
  );
}

export default AdminPage;
