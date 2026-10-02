import styled from "styled-components";

export const OilContainer = styled.section`
  padding: 80px 48px;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const OilContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const OilTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 20px;
`;

export const OilText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 16px;
`;

export const OilInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const OilProduct = styled.div`
  flex: 1;
  min-height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f4f1e8;
  border-radius: 8px;
`;

export const OilFeatures = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const OilFeature = styled.span`
  padding: 8px 14px;
  border: 1px solid #667a46;
  border-radius: 20px;

  font-size: 14px;
  color: #667a46;
`;
