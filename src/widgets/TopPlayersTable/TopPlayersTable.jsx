import { useState, useEffect } from "react";
import topPlayerImg0 from "../../assets/img/topPlayersImg/topPlayerImg0.png";
import topPlayerImg1 from "../../assets/img/topPlayersImg/topPlayerImg1.png";
import topPlayerImg2 from "../../assets/img/topPlayersImg/topPlayerImg2.png";

const TopPlayersTable = () => {
  const [data, setData] = useState([]);
  const topPlayerImages = [topPlayerImg0, topPlayerImg1, topPlayerImg2];

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
              borderBottom: "1px solid white",
              padding: "10px 0",
              width: "50%",
            }}
          >
            Ник
          </th>
          <th
            style={{
              borderBottom: "1px solid white",
              borderLeft: "1px solid white",
              padding: "10px 0",
              width: "50%",
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
                borderRight: "1px solid white",
                padding: "10px 0 10px 10px",
                width: "50%",
              }}
            >
              {index < 3 ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={topPlayerImages[index]}
                    alt={`top ${index + 1}`}
                    style={{ width: "19px", height: "23px" }}
                  />

                  <p
                    style={{
                      fontSize: `${index < 3 ? 25 - index * 3 : 15}px`,
                    }}
                  >
                    &nbsp;&nbsp;{item.name}
                  </p>
                </div>
              ) : (
                <p>
                  {index}.&nbsp;&nbsp;{item.name}
                </p>
              )}
            </td>
            <td
              style={{
                padding: "10px 2px",
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
    </table>
  );
};

export default TopPlayersTable;
