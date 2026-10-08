import aipoLogo from "../assets/awards/aipo.png";
import gamberoRossoLogo from "../assets/awards/gambero-rosso.png";
import goldMedalLogo from "../assets/awards/gold-medal.png";
import lionsLogo from "../assets/awards/lions.png";
import oriiLogo from "../assets/awards/orii-del-lazio.png";
import slowFoodLogo from "../assets/awards/slow-food.png";
import { useTranslation } from "react-i18next";

import {
  AwardsPage,
  AwardsHero,
  AwardsHeroContent,
  AwardsEyebrow,
  AwardsTitle,
  AwardsIntro,
  FeaturedAward,
  FeaturedAwardCard,
  AwardLogo,
  AwardYear,
  AwardName,
  AwardResult,
  AwardsSection,
  AwardsSectionTitle,
  AwardsGrid,
  AwardCard,
  AwardCardYear,
  AwardCardTitle,
  ProjectSection,
  ProjectContent,
  ProjectEyebrow,
  ProjectTitle,
  ProjectText,
  ProjectMarkets,
} from "./RiconoscimentiPage.styled";

function RiconoscimentiPage() {
  const { t } = useTranslation();

  return (
    <AwardsPage>
      <AwardsHero>
        <AwardsHeroContent>
          <AwardsEyebrow>{t("awards.eyebrow")}</AwardsEyebrow>

          <AwardsTitle>{t("awards.title")}</AwardsTitle>

          <AwardsIntro>{t("awards.intro")}</AwardsIntro>
        </AwardsHeroContent>
      </AwardsHero>
      <FeaturedAward>
        <FeaturedAwardCard>
          <AwardLogo
            src={oriiLogo}
            alt="Logo Orii del Lazio"
            width={200}
            height={200}
            style={{ height: "100px" }}
          />
          <AwardYear>2025</AwardYear>
          <AwardName>Orii del Lazio</AwardName>
          <AwardResult>{t("awards.firstPrize")}</AwardResult>
        </FeaturedAwardCard>
      </FeaturedAward>

      <AwardsSection>
        <AwardsSectionTitle>{t("awards.historyTitle")}</AwardsSectionTitle>

        <AwardsGrid>
          <AwardCard>
            <AwardLogo
              src={lionsLogo}
              alt="Lions International"
              width={200}
              height={200}
            />
            <AwardCardYear>2024</AwardCardYear>
            <AwardCardTitle>Olio Novo Lions</AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={slowFoodLogo}
              alt="Logo Slow Food"
              width={200}
              height={149}
            />
            <AwardCardYear>2023</AwardCardYear>
            <AwardCardTitle>
              Grande Olio Slow — Guida agli Extravergini
            </AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={oriiLogo}
              alt="Logo Orii del Lazio"
              width={200}
              height={200}
            />
            <AwardCardYear>2021</AwardCardYear>
            <AwardCardTitle>
              Orii del Lazio — {t("awards.secondPrize")}
            </AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={gamberoRossoLogo}
              alt="Logo Gambero Rosso"
              width={200}
              height={200}
            />
            <AwardCardYear>2020</AwardCardYear>
            <AwardCardTitle>Oli d'Italia — Gambero Rosso</AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo src={goldMedalLogo} alt="" />
            <AwardCardYear>2020</AwardCardYear>
            <AwardCardTitle>BiolNovello — Gold Medal</AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={aipoLogo}
              alt="Logo AIPO d'Argento"
              width={200}
              height={200}
            />
            <AwardCardYear>2018</AwardCardYear>
            <AwardCardTitle>
              Aipo d'argento — {t("awards.internationalCompetition")}
            </AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={oriiLogo}
              alt="Logo Orii del Lazio"
              width={200}
              height={200}
            />
            <AwardCardYear>2017</AwardCardYear>
            <AwardCardTitle>Orii del Lazio</AwardCardTitle>
          </AwardCard>

          <AwardCard>
            <AwardLogo
              src={goldMedalLogo}
              alt="Medaglia d'oro BiolNovello"
              width={200}
              height={200}
            />
            <AwardCardYear>2016</AwardCardYear>
            <AwardCardTitle>BiolNovello — Gold Medal</AwardCardTitle>
          </AwardCard>
        </AwardsGrid>
      </AwardsSection>

      <ProjectSection>
        <ProjectContent>
          <ProjectEyebrow>{t("awards.projectEyebrow")}</ProjectEyebrow>

          <ProjectTitle>{t("awards.projectTitle")}</ProjectTitle>

          <ProjectText>{t("awards.projectText")}</ProjectText>

          <ProjectMarkets>
            <span>Francia</span>
            <span>Germania</span>
            <span>Svezia</span>
          </ProjectMarkets>
        </ProjectContent>
      </ProjectSection>
    </AwardsPage>
  );
}

export default RiconoscimentiPage;
