import styles from "./NavItem.module.scss";
import { Link } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <button className={styles.button}>
      <Link to={to} className={styles.text}>
        {children}
      </Link>
    </button>
  );
}
