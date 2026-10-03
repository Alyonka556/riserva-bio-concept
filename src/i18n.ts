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
    de: {
      translation: {
        hero: {
          title: "La Riserva Bio",
          subtitle:
            "Italienisches Bio-Olivenöl, vom Land direkt auf Ihren Tisch.",
          button: "Unser Olivenöl entdecken",
        },

        nav: {
          company: "Unternehmen",
          oil: "Unser Olivenöl",
          territory: "Region",
          contacts: "Kontakt",
        },

        oil: {
          title: "Unser Olivenöl",
          text1:
            "Bio-Olivenöl Extra Vergine, hergestellt in der Region Tuscania.",
          text2:
            "Ein biologisches Olivenöl aus den Olivenhainen von Tuscania, im Herzen der Tuscia.",
          organic: "100 % Bio",
          tuscania: "Tuscania",
          extraVirgin: "Extra Vergine",
        },

        contact: {
          title: "Kontakt",
          text: "Möchten Sie mehr über La Riserva Bio erfahren oder Informationen zu unseren Produkten erhalten?",
          location: "Wo Sie uns finden",
          email: "E-Mail",
          call: "Rufen Sie uns an",
          button: "Kontaktieren Sie uns",
        },

        company: {
          title: "Unser Unternehmen",
          text: "La Riserva Bio entstand in Tuscania, im Herzen der Tuscia, aus der Leidenschaft für das Land und die Herstellung von biologischem Olivenöl Extra Vergine.",
        },

        territory: {
          title: "Die Region",
          text: "Im Herzen der Tuscia bietet die Region Tuscania ideale Bedingungen für den Olivenanbau und die Herstellung von biologischem Olivenöl Extra Vergine.",
        },

        footer: {
          text: "Bio-Olivenöl Extra Vergine - Tuscania",
        },
      },
    },
    fr: {
      translation: {
        hero: {
          title: "La Riserva Bio",
          subtitle:
            "Huile d’olive biologique italienne, de la terre à votre table.",
          button: "Découvrir notre huile d’olive",
        },

        nav: {
          company: "Notre entreprise",
          oil: "Notre huile",
          territory: "Territoire",
          contacts: "Contacts",
        },

        oil: {
          title: "Notre huile d’olive",
          text1:
            "Huile d’olive extra vierge biologique, produite sur le territoire de Tuscania.",
          text2:
            "Une huile d’olive biologique issue des oliveraies de Tuscania, au cœur de la Tuscia.",
          organic: "100 % Biologique",
          tuscania: "Tuscania",
          extraVirgin: "Extra vierge",
        },

        contact: {
          title: "Contacts",
          text: "Vous souhaitez en savoir plus sur La Riserva Bio ou obtenir des informations sur nos produits ?",
          location: "Où nous trouver",
          email: "E-mail",
          call: "Appelez-nous",
          button: "Contactez-nous",
        },

        company: {
          title: "Notre entreprise",
          text: "La Riserva Bio est née à Tuscania, au cœur de la Tuscia, de la passion pour la terre et la production d’huile d’olive extra vierge biologique.",
        },

        territory: {
          title: "Le territoire",
          text: "Au cœur de la Tuscia, le territoire de Tuscania offre des conditions idéales pour la culture des oliviers et la production d’huile d’olive extra vierge biologique.",
        },

        footer: {
          text: "Huile d’olive extra vierge biologique - Tuscania",
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
