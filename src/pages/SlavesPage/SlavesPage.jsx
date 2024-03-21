import styles from "./SlavesPage.module.scss";

function SlavesPage() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ваши рабы</p>
      <div className={styles.slavesList}></div>
    </div>
  );
}

export default SlavesPage;
