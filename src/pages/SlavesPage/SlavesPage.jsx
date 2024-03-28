import styles from "./SlavesPage.module.scss";
import SlavesItem from "../../widgets/SlavesItem/SlavesItem";

function SlavesPage() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ваши рабы</p>
      <button className={styles.inviteBtn}>Пригласить друзей</button>
      <div className={styles.slavesList}>
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
        <SlavesItem username={"username"} profit={0.01} />
      </div>
    </div>
  );
}

export default SlavesPage;
