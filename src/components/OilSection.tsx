import { useTranslation } from "react-i18next";

import oliveImage480 from "../assets/hero-olive-480.webp";
import oliveImage768 from "../assets/hero-olive-768.webp";
import oliveImage1200 from "../assets/hero-olive-1200.webp";

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
          src={oliveImage1200}
          srcSet={`
    ${oliveImage480} 480w,
    ${oliveImage768} 768w,
    ${oliveImage1200} 1200w
  `}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          decoding="async"
          alt="Olio biologico La Riserva Bio"
        />
      </OilContent>
    </OilContainer>
  );
}

export default OilSection;
