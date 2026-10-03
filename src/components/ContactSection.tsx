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
  return (
    <ContactContainer id="contatti">
      <ContactContent>
        <ContactTitle>Contatti</ContactTitle>

        <ContactText>
          Vuoi conoscere meglio La Riserva Bio o ricevere informazioni sui
          nostri prodotti?
        </ContactText>
        <ContactDetails>
          <ContactItem>
            <ContactLabel>Dove siamo</ContactLabel>

            <ContactAdress>
              Strada Le Carceri 2, 01017 Tuscania (VT)
            </ContactAdress>
          </ContactItem>

          <ContactItem>
            {" "}
            <ContactLabel>Email</ContactLabel>
            <ContactEmail href="mailto:info@lariservabio.it">
              info@lariservabio.it
            </ContactEmail>
          </ContactItem>

          <ContactItem>
            {" "}
            <ContactLabel>Chiamaci</ContactLabel>
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
          Contattaci
        </ContactButton>
      </ContactContent>
    </ContactContainer>
  );
}

export default ContactSection;
