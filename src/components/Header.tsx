import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  HeaderContainer,
  Navigation,
  Logo,
  LogoImage,
  NavLink,
  MenuButton,
  LanguageSwitcher,
  LanguageButton,
} from "./Header.styled";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo href="/" aria-label="La Riserva Bio - Home">
        <LogoImage src="./public/favicon-olive.svg" alt="" />
        La Riserva Bio
      </Logo>

      <Navigation aria-label="Navigazione principale" $isOpen={isMenuOpen}>
        <LanguageSwitcher>
          <LanguageButton
            $active={i18n.language === "it"}
            onClick={() => changeLanguage("it")}
          >
            IT
          </LanguageButton>
          <LanguageButton
            $active={i18n.language === "en"}
            onClick={() => changeLanguage("en")}
          >
            EN
          </LanguageButton>
          <LanguageButton
            $active={i18n.language === "de"}
            onClick={() => changeLanguage("de")}
          >
            DE
          </LanguageButton>
          <LanguageButton
            $active={i18n.language === "fr"}
            onClick={() => changeLanguage("fr")}
          >
            FR
          </LanguageButton>
        </LanguageSwitcher>
        <NavLink href="#azienda" onClick={() => setIsMenuOpen(false)}>
          {t("nav.company")}
        </NavLink>
        <NavLink href="#olio" onClick={() => setIsMenuOpen(false)}>
          {t("nav.oil")}
        </NavLink>
        <NavLink href="#territorio" onClick={() => setIsMenuOpen(false)}>
          {t("nav.territory")}
        </NavLink>
        <NavLink href="#contatti" onClick={() => setIsMenuOpen(false)}>
          {t("nav.contacts")}
        </NavLink>
      </Navigation>

      <MenuButton
        aria-label="Apri menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </MenuButton>
    </HeaderContainer>
  );
}

export default Header;
