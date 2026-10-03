import "./App.css";
import CompanySection from "./components/CompanySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OilSection from "./components/OilSection";
import TerritorySection from "./components/TerritorySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OilSection />
        <CompanySection />
        <TerritorySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
