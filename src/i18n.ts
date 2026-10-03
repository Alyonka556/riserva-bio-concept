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
      },
    },
  },

  lng: "it",
  fallbackLng: "it",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
