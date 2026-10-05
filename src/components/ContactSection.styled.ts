import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 60px 48px;
  background-color: #faf8f2;

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
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

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormLabel = styled.label`
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #1f2a1f;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #c9c6bb;
  border-radius: 6px;
  background-color: white;
  color: #1f2a1f;
  font-size: 16px;
  font-family: inherit;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid #556b2f;
    outline-offset: 2px;
    border-color: #556b2f;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 14px 16px;
  border: 1px solid #c9c6bb;
  border-radius: 6px;
  background-color: white;
  color: #1f2a1f;
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  resize: vertical;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid #556b2f;
    outline-offset: 2px;
    border-color: #556b2f;
  }
`;

export const FormButton = styled.button`
  align-self: center;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  background-color: #556b2f;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3f5222;
  }

  &:focus-visible {
    outline: 3px solid #556b2f;
    outline-offset: 3px;
  }
`;

export const SuccessMessage = styled.p`
  max-width: 600px;
  margin: 48px auto 0;
  padding: 20px 24px;
  border: 1px solid #a8b58a;
  border-radius: 6px;
  background-color: #f2f4ec;
  color: #3f5222;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`;
