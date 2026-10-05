import CompanySection from "../components/CompanySection";
import Hero from "../components/Hero";
import OilSection from "../components/OilSection";
import TerritorySection from "../components/TerritorySection";
import ContactSection from "../components/ContactSection";

function HomePage() {
  return (
    <main>
      <Hero />
      <OilSection />
      <CompanySection />
      <TerritorySection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
