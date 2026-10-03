import companyOlive from "../assets/company-olive.jpg";

import {
  CompanyContainer,
  CompanyContent,
  CompanyTitle,
  CompanyText,
  CompanyInfo,
  CompanyImage,
} from "./CompanySection.styled";

function CompanySection() {
  return (
    <CompanyContainer id="azienda">
      <CompanyContent>
        <CompanyImage
          src={companyOlive}
          alt="Racolta delle olive La Riserva Bio"
        ></CompanyImage>
        <CompanyInfo>
          <CompanyTitle>La nostra azienda</CompanyTitle>
          <CompanyText>
            La Riserva Bio nasce a Tuscania, nel cuore della Tuscia, dalla
            passione per la terra e per la produzione di olio extra vergine di
            oliva biologico.
          </CompanyText>
        </CompanyInfo>
      </CompanyContent>
    </CompanyContainer>
  );
}

export default CompanySection;
