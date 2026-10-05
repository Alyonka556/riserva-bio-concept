import { useTranslation } from "react-i18next";
import companyOlive from "../assets/company-olive.webp";

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
          src={companyOlive}
          alt="Raccolta delle olive La Riserva Bio"
        ></CompanyImage>
        <CompanyInfo>
          <CompanyTitle>{t("company.title")}</CompanyTitle>
          <CompanyText>{t("company.text")}</CompanyText>
        </CompanyInfo>
      </CompanyContent>
    </CompanyContainer>
  );
}

export default CompanySection;
