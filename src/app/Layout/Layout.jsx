import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/crypto-slaves/login" && <Header />}
      <main>
        <Outlet />
      </main>
      {location.pathname != "/crypto-slaves/login" && <Footer />}
    </>
  );
}