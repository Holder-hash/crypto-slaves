import { useState, useEffect } from "react";

const TopPlayersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        name: "ник",
        slaves: "6",
      },
      {
        name: "ник",
        slaves: "6",
      },
      {
        name: "ник",
        slaves: "6",
      },
      {
        name: "ник",
        slaves: "6",
      },
      {
        name: "ник",
        slaves: "6",
      },
    ]);
  }, []);

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th
            style={{
              borderBottom: "2px solid white",
              padding: "10px 0",
              width: "50%",
            }}
          >
            Ник
          </th>
          <th
            style={{
              borderBottom: "2px solid white",
              padding: "10px 0",
              width: "50%",
              border: "1px solid white",
            }}
          >
            Рабы
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td
              style={{
                borderBottom: "1px solid white",
                padding: "10px 0 10px 10px",
                width: "50%",
                border: "1px solid white",
              }}
            >
              {index < 3 ? (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <img
                    src={`imagePathForIndex${index}.jpg`}
                    alt={`Image ${index}`}
                  />
                  <p
                    style={{
                      fontSize: `${index < 3 ? 25 - index * 3 : 15}px`,
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ) : (
                <p>
                  {index}. {item.name}
                </p>
              )}
            </td>
            <td
              style={{
                borderBottom: "1px solid white",
                padding: "10px 0",
                fontSize: `${index < 3 ? 25 - index * 3 : 15}px`,
                width: "50%",
                textAlign: "center",
              }}
            >
              {item.slaves}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan="2"
            style={{ borderTop: "2px solid white", padding: "10px 0" }}
          ></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TopPlayersTable;
