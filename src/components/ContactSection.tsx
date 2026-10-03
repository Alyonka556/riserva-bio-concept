import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactText,
  ContactDetails,
  ContactAdress,
  ContactEmail,
  ContactPhone,
  ContactButton,
} from "./ContactSection.styled.ts";

function ContactSection() {
  return (
    <ContactContainer id="contatti">
      <ContactContent>
        <ContactTitle>Contatti</ContactTitle>

        <ContactText>
          Vuoi conoscere meglio La Riserva Bio o ricevere informazioni sui
          nostri prodotti?
        </ContactText>
        <ContactDetails>
          <ContactAdress>
            Strada Le Carceri 2, 01017 Tuscania (VT)
          </ContactAdress>

          <ContactEmail href="mailto:info@lariservabio.it">
            info@lariservabio.it
          </ContactEmail>
          <ContactPhone href="tel:+390761434211">+39 0761 434211</ContactPhone>
          <ContactPhone href="tel:+393296123052">
            +39 329 61 23 052
          </ContactPhone>

          <ContactPhone href="tel:+393294842774">
            +39 329 48 42 774
          </ContactPhone>
        </ContactDetails>
        <ContactButton href="mailto:info@lariservabio.it">
          Contattaci
        </ContactButton>
      </ContactContent>
    </ContactContainer>
  );
}

export default ContactSection;
