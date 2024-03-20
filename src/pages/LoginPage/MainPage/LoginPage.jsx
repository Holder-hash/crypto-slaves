import styles from "./LoginPage.module.scss";
import iconRUS from "../../../assets/img/iconRUS.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  function authBtnHandler() {
    navigate("/crypto-slaves/main");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.languageBox}>
        <p>LANGUAGE</p>
        <img src={iconRUS} alt="russian" />
      </div>
      <div className={styles.authWrapper}>
        <h1 className={styles.logo}>CRYPTO SLAVES</h1>
        <button onClick={() => authBtnHandler()}>ВОЙТИ ЧЕРЕЗ TELEGRAM</button>
      </div>
      <p className={styles.copy}>CryptoSlaves 2024</p>
    </div>
  );
}
