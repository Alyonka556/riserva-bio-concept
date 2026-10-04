import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 60px 48px;
  background-color: #faf8f2;

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
  color: #1f2a1f;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ContactText = styled.p`
  max-width: 650px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.7;
  color: #555;
`;

export const ContactDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  margin-top: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const ContactItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactLabel = styled.strong`
  display: block;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #1f2a1f;
`;

export const ContactAddress = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: #555;

  @media screen and (max-width: 768px) {
    max-width: 280px;
    overflow-wrap: break-word;
  }
`;

export const ContactEmail = styled.a`
  display: block;
  margin: 0;
  color: #556b2f;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid #556b2f;
    outline-offset: 3px;
    border-radius: 2px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactPhone = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto 12px;
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

  &:focus-visible {
    outline: 3px solid #556b2f;
    outline-offset: 3px;
  }
`;
