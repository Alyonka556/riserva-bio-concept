import { useTranslation } from "react-i18next";

import territoryOlive from "../assets/territory.webp";

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
          src={territoryOlive}
          alt="Olivetto biologico nel territorio di Tuscania"
        />
      </TerritoryContent>
    </TerritoryContainer>
  );
}

export default TerritorySection;
