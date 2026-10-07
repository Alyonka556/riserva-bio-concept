import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import ScrollToHash from "./components/ScrollToHash";

const RiconoscimentiPage = lazy(() => import("./pages/RiconoscimentiPage"));

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/riconoscimenti" element={<RiconoscimentiPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
