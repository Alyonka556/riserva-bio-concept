import styled from "styled-components";

export const HeroSection = styled.section`
  text-align: center;
  padding: 80px 20px;
`;
export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 16px;
`;

export const HeroText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
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
`;
