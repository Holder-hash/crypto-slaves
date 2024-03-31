import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/MainPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RobotsPage from "./pages/RobotsPage/RobotsPage";
import SlavesPage from "./pages/SlavesPage/SlavesPage";
import TopUpPage from "./pages/TopUpPage/TopUpPage";
import WithdrawPage from "./pages/WithdrawPage/WithdrawPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AgreementPage from "./pages/AgreementPage/AgreementPage";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/crypto-slaves"} element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="robots" element={<RobotsPage />} />
          <Route path="slaves" element={<SlavesPage />} />
          <Route path="topup" element={<TopUpPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="agreement" element={<AgreementPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
