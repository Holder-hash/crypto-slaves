import styles from "./LoginPage.module.scss";
import iconRUS from "../../../assets/img/iconRUS.png";

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.languageBox}>
        <p>LANGUAGE</p>
        <img src={iconRUS} alt="russian" />
      </div>
      <div className={styles.authWrapper}>
        <h1 className={styles.logo}>CRYPTO SLAVES</h1>
        <button>ВОЙТИ ЧЕРЕЗ TELEGRAM</button>
      </div>
      <p className={styles.copy}>CryptoSlaves 2024</p>
    </div>
  );
}
