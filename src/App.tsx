import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RiconoscimentiPage from "./pages/RiconoscimentiPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/riconoscimenti" element={<RiconoscimentiPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
