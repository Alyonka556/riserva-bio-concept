import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  min-height: 480px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 120px 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    min-height: 400px;
    padding: 80px 20px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
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
