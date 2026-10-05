import { useTranslation } from "react-i18next";

import oliveImage from "../assets/hero-olive.webp";

import {
  OilContainer,
  OilContent,
  OilTitle,
  OilText,
  OilInfo,
  OilProduct,
  OilFeatures,
  OilFeature,
} from "./OilSection.styled";

function OilSection() {
  const { t } = useTranslation();

  return (
    <OilContainer id="olio">
      <OilContent>
        <OilInfo>
          <OilTitle>{t("oil.title")}</OilTitle>
          <OilText>{t("oil.text1")}</OilText>
          <OilText>{t("oil.text2")}</OilText>
          <OilFeatures>
            <OilFeature>{t("oil.organic")}</OilFeature>
            <OilFeature>{t("oil.tuscania")}</OilFeature>
            <OilFeature>{t("oil.extraVirgin")}</OilFeature>
          </OilFeatures>
        </OilInfo>
        <OilProduct
          src={oliveImage}
          alt="Olio biologico La Riserva Bio"
        ></OilProduct>
      </OilContent>
    </OilContainer>
  );
}

export default OilSection;
