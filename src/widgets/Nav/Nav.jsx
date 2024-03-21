import styles from "./Nav.module.scss";

export default function Nav({ navActive }) {
  return (
    <nav className={`${styles.nav} ${navActive ? styles.navActive : ""}`}>
      <div className={styles.navInner}>
        <div className={styles.userInfo}>
          <img src="" />
          <div>
            <p className={styles.userName}>username</p>
            <p className={styles.userBalance}>баланс: 400.01$(30.05$/сут.)</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
