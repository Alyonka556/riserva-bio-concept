import { HeroSection, HeroTitle, HeroText, HeroButton } from "./Hero.styled";

function Hero() {
  return (
    <HeroSection>
      <HeroTitle>La Riserva Bio</HeroTitle>
      <HeroText>Olio Biologico italiano, dalla terra alla tavola</HeroText>

      <HeroButton href="#olio">Scopri il nostro olio</HeroButton>
    </HeroSection>
  );
}

export default Hero;
