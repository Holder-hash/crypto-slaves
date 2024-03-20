import { Routes, Route } from "react-router-dom";
import Layout from "./app/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./app/routes/PrivateRoute";
import LoginPage from "./pages/LoginPage/MainPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path={"/crypto-slaves"} element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
