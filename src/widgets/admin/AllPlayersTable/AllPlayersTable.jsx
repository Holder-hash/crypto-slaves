import React from "react";
import styles from "./AllPlayersTable.module.scss";

function AllPlayersTable() {
  const data = [
    {
      id: 1,
      name: "John",
      age: 30,
      city: "New York",
      country: "USA",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Alice",
      age: 25,
      city: "London",
      country: "UK",
      email: "alice@example.com",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <h2>Данные</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Город</th>
            <th>Страна</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.email}</td>
            </tr>
          ))}
          {Array.from({ length: 10 - data.length }, (_, index) => (
            <tr key={data.length + index}>
              <td className={styles.emptyCell}>&nbsp;</td>
              <td className={styles.emptyCell}>&nbsp;</td>
              <td className={styles.emptyCell}>&nbsp;</td>
              <td className={styles.emptyCell}>&nbsp;</td>
              <td className={styles.emptyCell}>&nbsp;</td>
              <td className={styles.emptyCell}>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPlayersTable;
