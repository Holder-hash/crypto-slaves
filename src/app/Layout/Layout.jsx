import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import CoinRain from "../CoinRain/CoinRain";
import { Outlet, useLocation } from "react-router-dom";
import coin0 from "../../assets/img/coinRain/coin0.png";
import coin1 from "../../assets/img/coinRain/coin1.png";
import coin2 from "../../assets/img/coinRain/coin2.png";
import coin3 from "../../assets/img/coinRain/coin3.png";
import coin4 from "../../assets/img/coinRain/coin4.png";
import coin5 from "../../assets/img/coinRain/coin5.png";

export default function Layout() {
  const images = [coin0, coin1, coin2, coin3, coin4, coin5];
  const location = useLocation();

  return (
    <>
      <CoinRain images={images} speed={3} frequency={500} />
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
