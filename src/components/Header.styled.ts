import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 24px 48px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #1f2d1f;
`;

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #667a46;
  }
`;
