import {
  HeaderContainer,
  Navigation,
  Logo,
  NavLink,
  MenuButton,
} from "./Header.styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo href="/" aria-label="La Riserva Bio - Home">
        La Riserva Bio
      </Logo>

      <Navigation aria-label="Navigazione principale">
        <NavLink href="#azienda">Azienda</NavLink>
        <NavLink href="#olio">Il nostro olio</NavLink>
        <NavLink href="#territorio">Territorio</NavLink>
        <NavLink href="#contatti">Contatti</NavLink>
      </Navigation>

      <MenuButton aria-label="Apri menu">☰</MenuButton>
    </HeaderContainer>
  );
}

export default Header;
