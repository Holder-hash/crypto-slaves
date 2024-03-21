import styles from "./SlavesItem.module.scss";

function SlavesItem({ username, img, profit }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={img} alt="" />
        <p className={styles.username}>{username}</p>
      </div>
      <div>
        <p className={styles.profit}>{profit}$/сут.</p>
      </div>
    </div>
  );
}

export default SlavesItem;
