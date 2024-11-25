import Layout from "./components/layout.tsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WeatherDashboard from "./pages/WeatherDashboard.tsx";
import CityPage from "./pages/CityPage.tsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/city/:city" element={<CityPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
