import { type CSSProperties, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import { corridorBackgroundImage } from "./data/visualAssets";
import CasePage from "./pages/CasePage";
import CorridorPage from "./pages/CorridorPage";
import CoverPage from "./pages/CoverPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  const appStyle = {
    "--corridor-image": `url("${corridorBackgroundImage}")`,
  } as CSSProperties;

  return (
    <div className="app-shell" style={appStyle}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollToTop />
      <MainNavigation />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/archivo" element={<CorridorPage />} />
          <Route path="/expediente/:id" element={<CasePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
