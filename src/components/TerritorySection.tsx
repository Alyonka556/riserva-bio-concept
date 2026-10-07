import { useTranslation } from "react-i18next";

import territoryOlive480 from "../assets/territory-480.webp";
import territoryOlive768 from "../assets/territory-768.webp";
import territoryOlive1200 from "../assets/territory-1200.webp";

import {
  TerritoryContainer,
  TerritoryContent,
  TerritoryInfo,
  TerritoryTitle,
  TerritoryText,
  TerritoryImage,
} from "./TerritorySection.styled";

function TerritorySection() {
  const { t } = useTranslation();

  return (
    <TerritoryContainer id="territorio">
      <TerritoryContent>
        <TerritoryInfo>
          <TerritoryTitle>{t("territory.title")}</TerritoryTitle>
          <TerritoryText>{t("territory.text")}</TerritoryText>
        </TerritoryInfo>
        <TerritoryImage
          src={territoryOlive1200}
          srcSet={`
    ${territoryOlive480} 480w,
    ${territoryOlive768} 768w,
    ${territoryOlive1200} 1200w
  `}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          decoding="async"
          alt="Olivetto biologico nel territorio di Tuscania"
        />
      </TerritoryContent>
    </TerritoryContainer>
  );
}

export default TerritorySection;
