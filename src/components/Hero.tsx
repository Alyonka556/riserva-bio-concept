import heroHarvest from "../assets/hero-harvest.webp";
import { useTranslation } from "react-i18next";

import { HeroSection, HeroTitle, HeroText, HeroButton } from "./Hero.styled";

function Hero() {
  const { t } = useTranslation();
  return (
    <HeroSection $backgroundImage={heroHarvest}>
      <HeroTitle>{t("hero.title")}</HeroTitle>
      <HeroText>{t("hero.subtitle")}</HeroText>

      <HeroButton href="#olio">{t("hero.button")}</HeroButton>
    </HeroSection>
  );
}

export default Hero;
