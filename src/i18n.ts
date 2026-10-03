import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    it: {
      translation: {
        hero: {
          title: "La Riserva Bio",
          subtitle: "Olio Biologico italiano, dalla terra alla tavola.",
          button: "Scopri il nostro olio",
        },
        nav: {
          company: "Azienda",
          oil: "Il nostro olio",
          territory: "Territorio",
          contacts: "Contatti",
        },
        oil: {
          title: "Il nostro olio",
          text1:
            "Olio Extra Vergine di Oliva Biologico, prodotto nel territorio di Tuscania.",
          text2:
            "Un olio biologico che nasce dagli ulivi del territorio di Tuscania, nel cuore della Tuscia.",
          organic: "100% Biologico",
          tuscania: "Tuscania",
          extraVirgin: "Extra Vergine",
        },
        contact: {
          title: "Contatti",
          text: "Vuoi conoscere meglio La Riserva Bio o ricevere informazioni sui nostri prodotti?",
          location: "Dove siamo",
          email: "Email",
          call: "Chiamaci",
          button: "Contattaci",
        },
        company: {
          title: "La nostra azienda",
          text: "La Riserva Bio nasce a Tuscania, nel cuore della Tuscia, dalla passione per la terra e per la produzione di olio extra vergine di oliva biologico.",
        },
        territory: {
          title: "Il territorio",
          text: "Nel cuore della Tuscia, il territorio di Tuscania offre un ambiente ideale per la coltivazione degli ulivi e la produzione di olio extra vergine di oliva biologico.",
        },
        footer: {
          text: "Olio Extra Vergine di Oliva Biologico - Tuscania",
        },
      },
    },

    en: {
      translation: {
        hero: {
          title: "La Riserva Bio",
          subtitle: "Italian organic olive oil, from the land to your table.",
          button: "Discover our olive oil",
        },
        nav: {
          company: "Company",
          oil: "Our oil",
          territory: "Territory",
          contacts: "Contacts",
        },
        oil: {
          title: "Our olive oil",
          text1:
            "Organic Extra Virgin Olive Oil, produced in the territory of Tuscania.",
          text2:
            "An organic olive oil born from the olive groves of Tuscania, in the heart of Tuscia.",
          organic: "100% Organic",
          tuscania: "Tuscania",
          extraVirgin: "Extra Virgin",
        },
        contact: {
          title: "Contacts",
          text: "Would you like to learn more about La Riserva Bio or receive information about our products?",
          location: "Where to find us",
          email: "Email",
          call: "Call us",
          button: "Contact us",
        },
        company: {
          title: "Our company",
          text: "La Riserva Bio was born in Tuscania, in the heart of Tuscia, from a passion for the land and the production of organic extra virgin olive oil.",
        },
        territory: {
          title: "The territory",
          text: "In the heart of Tuscia, the territory of Tuscania offers an ideal environment for olive cultivation and the production of organic extra virgin olive oil.",
        },
        footer: {
          text: "Organic Extra Virgin Olive Oil - Tuscania",
        },
      },
    },
  },

  lng: localStorage.getItem("language") || "it",
  fallbackLng: "it",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
