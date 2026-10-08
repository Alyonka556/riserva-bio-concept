import styled from "styled-components";

export const AwardsPage = styled.main`
  background-color: #faf8f2;
`;

export const AwardsHero = styled.section`
  padding: 100px 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const AwardsHeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AwardsEyebrow = styled.p`
  margin: 0 0 16px;
  color: #667a46;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const AwardsTitle = styled.h1`
  margin: 0 0 24px;
  color: #1f2a1f;
  font-size: 52px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and(max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`;

export const AwardsIntro = styled.p`
  max-width: 680px;
  margin: 0 auto;
  color: #555;
  font-size: 18px;
  line-height: 1.7;
`;

export const FeaturedAward = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px 80px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 60px;
  }
`;

export const FeaturedAwardCard = styled.div`
  padding: 48px;
  border-radius: 12px;
  background-color: #f2f4ec;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 36px 20px;
  }
`;

export const AwardYear = styled.p`
  margin: 0 0 12px;
  color: #667a46;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const AwardName = styled.h2`
  margin: 0 0 12px;
  color: #1f2a1f;
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const AwardResult = styled.p`
  margin: 0;
  color: #555;
  font-size: 18px;
  font-weight: 600;
`;

export const AwardsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px 80px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 60px;
  }
`;

export const AwardsSectionTitle = styled.h2`
  margin: 0 0 32px;
  color: #1f2a1f;
  font-size: 32px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const AwardCard = styled.article`
  padding: 28px;
  border: 1px solid #d9ddce;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 22px 20px;
  }
`;
export const AwardLogo = styled.img`
  display: block;
  width: auto;
  height: 80px;
  object-fit: contain;
  margin: 0 auto 20px;
`;

export const AwardCardYear = styled.p`
  margin: 0 0 8px;
  color: #667a46;
  font-size: 14px;
  font-weight: 700;
`;

export const AwardCardTitle = styled.h3`
  margin: 0;
  color: #1f2a1f;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
`;

export const ProjectSection = styled.section`
  padding: 80px 48px;
  background-color: #46552f;
  color: white;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ProjectContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const ProjectEyebrow = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.8;
`;

export const ProjectTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 38px;
  line-height: 1.2;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ProjectText = styled.p`
  max-width: 700px;
  margin: 0 auto 32px;
  font-size: 18px;
  line-height: 1.7;
`;

export const ProjectMarkets = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 17px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
