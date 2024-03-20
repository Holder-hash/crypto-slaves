import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <button className={styles.navBtn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className={styles.logo}>CRYPTO SLAVES</h1>
    </header>
  );
}
