import styles from "./WithdrawHistoryTable.module.scss";

function WithdrawHistoryTable() {
  const data = [
    { A: "22-02-2022 22:22", B: "20", C: "Ожидание" },
    { A: "22-02-2022 22:22", B: "20", C: "Успешно" },
    { A: "22-02-2022 22:22", B: "20", C: "Отклонено" },
    { A: "22-02-2022 22:22", B: "20", C: "Успешно" },
    { A: "22-02-2022 22:22", B: "20", C: "Успешно" },
  ];

  return (
    <table>
      <thead className={styles.thead}>
        <tr>
          <th>
            <span>Дата</span>
            <span>Сумма</span>
            <span>Статус</span>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((row, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: index % 2 === 1 && "#B6B3B3",
            }}
          >
            <td>
              <span>{row.A}</span>
              <span>{row.B}$</span>
              <span
                style={{
                  color:
                    row.C == "Успешно"
                      ? "green"
                      : row.C == "Отклонено"
                      ? "red"
                      : "white",
                }}
              >
                {row.C}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WithdrawHistoryTable;
