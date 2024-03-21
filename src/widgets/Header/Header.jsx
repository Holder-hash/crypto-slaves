import styles from "./Header.module.scss";
import Nav from "../Nav/Nav.jsx";
import { useState } from "react";

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <Nav navActive={navActive} />

      <header>
        <button
          className={`${styles.navBtn} ${navActive ? styles.navBtnActive : ""}`}
          onClick={() => setNavActive(!navActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className={styles.logo}>CRYPTO SLAVES</h1>
      </header>
    </>
  );
}
