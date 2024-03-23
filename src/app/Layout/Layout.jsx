import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import CoinRain from "../CoinRain/CoinRain";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <CoinRain speed={5} frequency={500} />
      <div className="mainWrapper">
        {location.pathname != "/crypto-slaves/" && <Header />}
        <main style={{ marginBottom: "4rem", minHeight: "73vh" }}>
          <Outlet />
        </main>
        {location.pathname != "/crypto-slaves/" && <Footer />}
      </div>
    </>
  );
}
