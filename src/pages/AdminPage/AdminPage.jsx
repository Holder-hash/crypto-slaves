import styles from "./AdminPage.module.scss";
import { useState, useRef } from "react";

import AllPlayersTable from "../../widgets/admin/AllPlayersTable/AllPlayersTable";
import TopUpTable from "../../widgets/admin/TopUpTable/TopUpTable";
import RequestsTable from "../../widgets/admin/RequestsTable/RequestsTable";

function AdminPage() {
  const [sliderIndex, setSliderIndex] = useState();

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
          <li
            onClick={(event) => {
              navItemHandler(event);
              setSliderIndex(0);
            }}
          >
            Все игроки
          </li>
          <li
            onClick={(event) => {
              navItemHandler(event);
              setSliderIndex(1);
            }}
          >
            Пополнения
          </li>
          <li
            onClick={(event) => {
              navItemHandler(event);
              setSliderIndex(2);
            }}
          >
            Запросы на вывод
          </li>
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
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${100 * sliderIndex}%)`,
        }}
      >
        <AllPlayersTable />
        <TopUpTable />
        <RequestsTable />
      </div>
    </div>
  );
}

export default AdminPage;
