import styles from "./AdminPage.module.scss";

function AdminPage() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul>
          <li>Все игроки</li>
          <li>Пополнения</li>
          <li>Запросы на вывод</li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminPage;
