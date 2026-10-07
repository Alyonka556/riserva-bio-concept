import heroHarvest480 from "../assets/hero-harvest-480.webp";
import heroHarvest768 from "../assets/hero-harvest-768.webp";
import heroHarvest1200 from "../assets/hero-harvest-1200.webp";

import { useTranslation } from "react-i18next";

import {
  HeroSection,
  HeroImage,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButton,
} from "./Hero.styled";

function Hero() {
  const { t } = useTranslation();
  return (
    <HeroSection>
      <HeroImage
        src={heroHarvest1200}
        srcSet={`
      ${heroHarvest480} 480w,
      ${heroHarvest768} 768w,
      ${heroHarvest1200} 1200w
    `}
        sizes="100vw"
        alt=""
        fetchPriority="high"
      />

      <HeroOverlay />

      <HeroContent>
        <HeroTitle>{t("hero.title")}</HeroTitle>
        <HeroText>{t("hero.subtitle")}</HeroText>
        <HeroButton href="#olio">{t("hero.button")}</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
