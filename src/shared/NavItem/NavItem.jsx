import styles from "./NavItem.module.scss";

export default function NavItem({ children }) {
  return (
    <button className={styles.button}>
      <p className={styles.text}>{children}</p>
    </button>
  );
}
