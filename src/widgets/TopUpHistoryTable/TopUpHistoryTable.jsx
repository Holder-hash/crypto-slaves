import styles from "./TopUpHistoryTable.module.scss";

function TopUpHistoryTable() {
  const data = [
    { A: "22-02-2022 22:22", B: "20" },
    { A: "22-02-2022 22:22", B: "20" },
    { A: "22-02-2022 22:22", B: "20" },
    { A: "22-02-2022 22:22", B: "20" },
    { A: "22-02-2022 22:22", B: "20" },
  ];

  return (
    <table>
      <thead className={styles.thead}>
        <tr>
          <th>
            <span>Дата</span>
            <span>Сумма</span>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row, index) => (
          <tr
            key={index}
            style={{ backgroundColor: index % 2 === 1 && "#B6B3B3" }}
          >
            <td>
              <span>{row.A}</span>
              <span>{row.B}$</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TopUpHistoryTable;
