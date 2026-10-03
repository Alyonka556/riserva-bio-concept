import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 32px 48px;
  background-color: #46552f;
  color: white;

  @media screen and (max-width: 768px) {
    padding: 28px 20px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterLogo = styled.p`
  margin: 0 0 22px;
  font-size: 22px;
  font-weight: 600;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
`;
