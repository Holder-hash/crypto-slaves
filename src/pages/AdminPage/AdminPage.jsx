import styles from "./AdminPage.module.scss";
import { useState, useRef } from "react";

function AdminPage() {
  const [lineParams, setLineParams] = useState({
    width: 165,
    posX: 0,
  });

  const navLineRef = useRef(null); // Создаем ссылку на элемент navLine

  function navItemHandler(event) {
    const navItem = event.target; // Получаем элемент <li>, на который был совершен клик
    const { left, width } = navItem.getBoundingClientRect(); // Получаем позицию и ширину элемента <li>
    setLineParams({
      width: width,
      posX: left,
    });
  }

  console.log(lineParams);

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
    </div>
  );
}

export default AdminPage;
