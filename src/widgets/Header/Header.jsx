import styles from "./Header.module.scss";
import Nav from "../Nav/Nav.jsx";
import { observer } from "mobx-react-lite";
import navActiveStore from "../../store/navActiveStore";

function Header() {
  function NavBtnHandler() {
    navActiveStore.toggleActive();
  }

  return (
    <>
      <Nav navActiveStore={navActiveStore.navActive} />

      <header>
        <button
          className={`${styles.navBtn} ${
            navActiveStore.navActive ? styles.navBtnActive : ""
          }`}
          onClick={() => NavBtnHandler()}
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

export default observer(Header);
