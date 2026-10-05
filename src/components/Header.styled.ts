import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 24px 48px;

  @media screen and (max-width: 480px) {
    padding: 20px 24px;
    gap: 16px;
  }
`;

export const Navigation = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 12px 24px 16px;

    background-color: white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #1f2d1f;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media screen and (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #667a46;
  }

  &:focus-visible {
    outline: 2px solid #667a46;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const RouterNavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #667a46;
  }
  &:focus-visible {
    outline: 2px solid #667a46;
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  padding: 4px 8px;
  background: transparent;
  color: #1f2d1f;

  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 28px;
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid #556b2f;
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LanguageButton = styled.button<{ $active: boolean }>`
  padding: 4px 6px;
  border: none;
  background: transparent;
  color: ${({ $active }) => ($active ? "#556b2f" : "#777")};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  cursor: pointer;

  &:hover {
    color: #556b2f;
  }

  &:focus-visible {
    outline: 2px solid #556b2f;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
