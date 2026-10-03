import { useTranslation } from "react-i18next";

import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterText,
} from "./Footer.styled";

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>La Riserva Bio</FooterLogo>

        <FooterText>{t("footer.text")}</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
