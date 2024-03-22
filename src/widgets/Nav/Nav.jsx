import styles from "./Nav.module.scss";
import NavItem from "../../shared/NavItem/NavItem";

export default function Nav({ navActiveStore }) {
  return (
    <nav className={`${styles.nav} ${navActiveStore ? styles.navActive : ""}`}>
      <div className={styles.navInner}>
        <div className={styles.userInfo}>
          <img src="" />
          <div>
            <p className={styles.userName}>username</p>
            <p className={styles.userBalance}>баланс: 400.01$(30.05$/сут.)</p>
          </div>
        </div>
        <div className={styles.NavItemContain}>
          <NavItem to={"/crypto-slaves/main"}>Главная</NavItem>
          <NavItem to={"/crypto-slaves/robots"}>Роботы</NavItem>
          <NavItem to={"/crypto-slaves/slaves"}>Рабы</NavItem>
          <NavItem to={"/crypto-slaves/topup"}>Пополнить</NavItem>
          <NavItem to={"/crypto-slaves/withdraw"}>Вывести</NavItem>
          <NavItem to={"/crypto-slaves/about"}>Об игре</NavItem>
        </div>
        <div className={styles.logo}>
          <p>
            CRYPTO
            <br />
            SLAVES
          </p>
        </div>
      </div>
    </nav>
  );
}
