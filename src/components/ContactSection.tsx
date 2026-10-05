import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactText,
  ContactDetails,
  ContactItem,
  ContactLabel,
  ContactAddress,
  ContactEmail,
  ContactPhone,
  ContactForm,
  FormInput,
  FormTextarea,
  FormButton,
  FormLabel,
  SuccessMessage,
} from "./ContactSection.styled.ts";

function ContactSection() {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("xljgrzzk");

  return (
    <ContactContainer id="contatti">
      <ContactContent>
        <ContactTitle>{t("contact.title")}</ContactTitle>

        <ContactText>{t("contact.text")}</ContactText>
        <ContactDetails>
          <ContactItem>
            <ContactLabel>{t("contact.location")}</ContactLabel>

            <ContactAddress>
              Strada Le Carceri 2, 01017 Tuscania (VT)
            </ContactAddress>
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
        {state.succeeded ? (
          <SuccessMessage>{t("contact.success")}</SuccessMessage>
        ) : (
          <ContactForm onSubmit={handleSubmit}>
            <FormLabel htmlFor="name">{t("contact.name")}</FormLabel>
            <FormInput
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={t("contact.name")}
              required
            />
            <ValidationError
              prefix={t("contact.name")}
              field="name"
              errors={state.errors}
            />

            <FormLabel htmlFor="email">{t("contact.email")}</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t("contact.email")}
              required
            />

            <ValidationError
              prefix={t("contact.email")}
              field="email"
              errors={state.errors}
            />

            <FormLabel htmlFor="message">{t("contact.message")}</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              placeholder={t("contact.message")}
              required
            />
            <ValidationError
              prefix={t("contact.message")}
              field="messagio"
              errors={state.errors}
            />

            <ValidationError errors={state.errors} />

            <FormButton type="submit" disabled={state.submitting}>
              {state.submitting ? "..." : t("contact.submit")}
            </FormButton>
          </ContactForm>
        )}
      </ContactContent>
    </ContactContainer>
  );
}
export default ContactSection;
