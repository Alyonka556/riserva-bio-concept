import { useState } from "react";

import {
  HeaderContainer,
  Navigation,
  Logo,
  NavLink,
  MenuButton,
} from "./Header.styled";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo href="/" aria-label="La Riserva Bio - Home">
        La Riserva Bio
      </Logo>

      <Navigation aria-label="Navigazione principale" $isOpen={isMenuOpen}>
        <NavLink href="#azienda" onClick={() => setIsMenuOpen(false)}>
          Azienda
        </NavLink>
        <NavLink href="#olio" onClick={() => setIsMenuOpen(false)}>
          Il nostro olio
        </NavLink>
        <NavLink href="#territorio" onClick={() => setIsMenuOpen(false)}>
          Territorio
        </NavLink>
        <NavLink href="#contatti" onClick={() => setIsMenuOpen(false)}>
          Contatti
        </NavLink>
      </Navigation>

      <MenuButton
        aria-label="Apri menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </MenuButton>
    </HeaderContainer>
  );
}

export default Header;
