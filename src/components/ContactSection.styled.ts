import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 80px 48px;
  background-color: #f4f1e8;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;
  color: 1f2a1f;
`;

export const ContactText = styled.p`
  max-width: 650px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.7;
  color: #555;
`;

export const ContactDetails = styled.div`
  margin-top: 32px;
`;

export const ContactAdress = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: #555;
`;

export const ContactEmail = styled.a`
  display: block;
  width: fit-content;
  margin: 20px auto 0;
  color: #556b2f;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactPhone = styled.a`
  display: block;
  width: fit-content;
  margin: 12px auto 0;
  color: #556b2f;
  font-size: 17px;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  margin-top: 32px;
  padding: 14px 28px;
  background-color: #556b2f;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3f5222;
  }
`;
