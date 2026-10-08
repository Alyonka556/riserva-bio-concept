import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import ScrollToHash from "./components/ScrollToHash";

const RiconoscimentiPage = lazy(() => import("./pages/RiconoscimentiPage"));

function App() {
  const location = useLocation();

  const isNotFound =
    location.pathname !== "/" && location.pathname !== "/riconoscimenti";
  return (
    <>
      <ScrollToHash />
      {!isNotFound && <Header />}

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/riconoscimenti" element={<RiconoscimentiPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {!isNotFound && <Footer />}
    </>
  );
}

export default App;
