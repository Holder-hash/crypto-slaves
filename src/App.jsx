import { Routes, Route } from "react-router-dom";
import Layout from "./app/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./app/routes/PrivateRoute";
import LoginPage from "./pages/LoginPage/MainPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path={"/crypto-slaves"} element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
