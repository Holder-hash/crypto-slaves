import React from "react";
import styles from "./AllPlayersTable.module.scss";

function AllPlayersTable() {
  const data = [
    {
      nickname: "@asdfaffsd",
      rechargeAmount: 0,
      referralCount: 0,
      withdrawalAmount: 0,
      referralRevenue: 0,
      percentage: "2",
    },
    {
      nickname: "@asdfaffsd",
      rechargeAmount: 0,
      referralCount: 0,
      withdrawalAmount: 0,
      referralRevenue: 0,
      percentage: "2",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ник</th>
            <th>Сумма пополнений</th>
            <th>Количество рефералов</th>
            <th>Сумма выводов</th>
            <th>С рефералов</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={index}>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.nickname}</div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.rechargeAmount}
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.referralCount}
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.withdrawalAmount}
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.referralRevenue}
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.percentage}</div>
              </td>
            </tr>
          ))}
          {Array.from({ length: 13 - data.length }, (_, index) => (
            <tr key={data.length + index}>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
              <td className={`${styles.emptyCell} ${styles.cell}`}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPlayersTable;
