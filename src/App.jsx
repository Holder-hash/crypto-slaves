import { Routes, Route } from "react-router-dom";
import Layout from "./app/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path={"/crypto-slaves"} element={<Layout />}>
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
