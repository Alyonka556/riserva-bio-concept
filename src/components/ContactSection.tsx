import { useTranslation } from "react-i18next";

import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactText,
  ContactDetails,
  ContactItem,
  ContactLabel,
  ContactAdress,
  ContactEmail,
  ContactPhone,
  ContactButton,
} from "./ContactSection.styled.ts";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <ContactContainer id="contatti">
      <ContactContent>
        <ContactTitle>{t("contact.title")}</ContactTitle>

        <ContactText>{t("contact.text")}</ContactText>
        <ContactDetails>
          <ContactItem>
            <ContactLabel>{t("contact.location")}</ContactLabel>

            <ContactAdress>
              Strada Le Carceri 2, 01017 Tuscania (VT)
            </ContactAdress>
          </ContactItem>

          <ContactItem>
            <ContactLabel>{t("contact.email")}</ContactLabel>
            <ContactEmail href="mailto:info@lariservabio.it">
              info@lariservabio.it
            </ContactEmail>
          </ContactItem>

          <ContactItem>
            <ContactLabel>{t("contact.call")}</ContactLabel>
            <ContactPhone href="tel:+390761434211">
              +39 0761 434211
            </ContactPhone>
            <ContactPhone href="tel:+393296123052">
              +39 329 61 23 052
            </ContactPhone>
            <ContactPhone href="tel:+393294842774">
              +39 329 48 42 774
            </ContactPhone>
          </ContactItem>
        </ContactDetails>
        <ContactButton href="mailto:info@lariservabio.it">
          {t("contact.button")}
        </ContactButton>
      </ContactContent>
    </ContactContainer>
  );
}

export default ContactSection;
