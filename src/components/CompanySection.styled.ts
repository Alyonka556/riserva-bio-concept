import styled from "styled-components";

export const CompanyContainer = styled.section`
  padding: 60px 48px;
  background-color: #f2f4ec;

  @media screen and (max-width: 1024px) {
    padding: 40px 20px;
  }
`;

export const CompanyContent = styled.div`
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

export const CompanyInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const CompanyImage = styled.img`
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

export const CompanyTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;
  color: #1f2a1f;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const CompanyText = styled.p`
  max-width: 700px;
  font-size: 18px;
  line-height: 1.7;
  margin: 0;
  color: #555;
`;
