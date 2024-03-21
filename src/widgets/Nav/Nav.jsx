import styles from "./Nav.module.scss";
import NavItem from "../../shared/NavItem/NavItem";

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
        <div className={styles.NavItemContain}>
          <NavItem>Главная</NavItem>
          <NavItem>Роботы</NavItem>
          <NavItem>Рабы</NavItem>
          <NavItem>Пополнить</NavItem>
          <NavItem>Вывести</NavItem>
          <NavItem>Об игре</NavItem>
        </div>
        <div className={styles.logo}>
          <p>CRYPTO SLAVES</p>
        </div>
      </div>
    </nav>
  );
}
