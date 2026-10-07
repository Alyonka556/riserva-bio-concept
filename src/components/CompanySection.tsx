import { useTranslation } from "react-i18next";

import companyOlive480 from "../assets/company-olive-480.webp";
import companyOlive768 from "../assets/company-olive-768.webp";
import companyOlive1200 from "../assets/company-olive-1200.webp";

import {
  CompanyContainer,
  CompanyContent,
  CompanyTitle,
  CompanyText,
  CompanyInfo,
  CompanyImage,
} from "./CompanySection.styled";

function CompanySection() {
  const { t } = useTranslation();

  return (
    <CompanyContainer id="azienda">
      <CompanyContent>
        <CompanyImage
          src={companyOlive1200}
          srcSet={`
            ${companyOlive480} 480w,
            ${companyOlive768} 768w,
            ${companyOlive1200} 1200w
          `}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          decoding="async"
          alt="Raccolta delle olive La Riserva Bio"
        />

        <CompanyInfo>
          <CompanyTitle>{t("company.title")}</CompanyTitle>
          <CompanyText>{t("company.text")}</CompanyText>
        </CompanyInfo>
      </CompanyContent>
    </CompanyContainer>
  );
}

export default CompanySection;
