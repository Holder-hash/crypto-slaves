import React from "react";
import styles from "./RequestsTable.module.scss";
import copyImg from "../../../assets/img/copy.png";

function RequestsTable() {
  const data = [
    {
      id: 0,
      nickname: "",
      totalBalance: "",
      withdrawableBalance: "",
      withdrawalRequest: "20.00$ | BitCoin btc241k...asdjasidk",
    },
    {
      id: 1,
      nickname: "",
      totalBalance: "",
      withdrawableBalance: "",
      withdrawalRequest: "20.00$ | Ethereum eth241k...asasdfdk",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>Ник</th>
            <th>Общий баланс</th>
            <th>Доступный баланс на вывод (Реф. баланс + 30% от пополнений)</th>
            <th>Запрошенная сумма/реквизиты для вывода</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={index}>
              <td className={styles.cell}>
                <input type="checkbox" className={styles.checkbox} />
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.nickname}</div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>{player.totalBalance}</div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.withdrawableBalance}
                </div>
              </td>
              <td className={styles.cell}>
                <div className={styles.valueWrapper}>
                  {player.withdrawalRequest}
                  <img src={copyImg} alt="" />
                </div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestsTable;
