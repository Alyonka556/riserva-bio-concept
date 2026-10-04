import styled from "styled-components";

export const TerritoryContainer = styled.section`
  padding: 60px 48px;

  @media screen and (max-width: 1024px) {
    padding: 40px 20px 60px;
  }
`;

export const TerritoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TerritoryInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const TerritoryTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;
  color: #1f2a1f;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const TerritoryText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin: 0;
  color: #555;
`;

export const TerritoryImage = styled.img`
  flex: 1;
  width: 100%;
  max-width: 500px;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 1024px) {
    height: 280px;
  }
`;
