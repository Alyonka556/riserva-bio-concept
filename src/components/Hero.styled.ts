import styled from "styled-components";

export const HeroSection = styled.section<{ $backgroundImage: string }>`
  text-align: center;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 120px 20px;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 16px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroText = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: white;
`;

export const HeroButton = styled.a`
  display: inline-block;
  margin-top: 32px;
  padding: 14px 28px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  color: white;
  background-color: #667a46;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4f6135;
  }

  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 3px;
  }
`;
