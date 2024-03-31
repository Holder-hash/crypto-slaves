import React from "react";
import styles from "./TopUpTable.module.scss";

function TopUpTable() {
  const data = [
    {
      nickname: "@asdfaffsd",
      sum: 0,
    },
    {
      nickname: "@asdfaffsd",
      sum: 0,
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ник</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={index}>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.nickname}</div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.sum}</div>
              </td>
            </tr>
          ))}
          {Array.from({ length: 10 - data.length }, (_, index) => (
            <tr key={data.length + index}>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopUpTable;
