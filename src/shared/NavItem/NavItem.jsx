import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import navActiveStore from "../../store/navActiveStore";

function NavItem({ to, children, ...props }) {
  const onBtnClick = () => {
    navActiveStore.toggleActive();
  };

  return (
    <button className={styles.button} {...props} onClick={onBtnClick}>
      <Link to={to} className={styles.text}>
        {children}
      </Link>
    </button>
  );
}

export default observer(NavItem);
