import styles from "./AdminPage.module.scss";
import { useState, useRef } from "react";

import AllPlayersTable from "../../widgets/admin/AllPlayersTable/AllPlayersTable";

function AdminPage() {
  const [lineParams, setLineParams] = useState({
    width: 165,
    posX: 48,
  });

  const navLineRef = useRef(null);

  function navItemHandler(event) {
    const navItem = event.target;
    const { left, width } = navItem.getBoundingClientRect();
    setLineParams({
      width: width,
      posX: left,
    });
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul>
          <li onClick={navItemHandler}>Все игроки</li>
          <li onClick={navItemHandler}>Пополнения</li>
          <li onClick={navItemHandler}>Запросы на вывод</li>
          <div
            ref={navLineRef}
            className={styles.navLine}
            style={{
              left: `${lineParams.posX - 48}px`,
              width: `${lineParams.width}px`,
            }}
          ></div>
        </ul>
      </nav>
      <div className={styles.slider}>
        <AllPlayersTable />
      </div>
    </div>
  );
}

export default AdminPage;
