import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundMain = styled.main`
  min-height: 65vh;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #faf8f2;
`;

export const ErrorCode = styled.p`
  margin: 0 0 12px;
  font-size: 72px;
  line-height: 1;
  font-weight: 700;
  color: #697a3f;

  @media (max-width: 480px) {
    font-size: 56px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 36px;
  color: #2f3825;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  margin: 0 0 32px;
  color: #5f6259;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  background: #697a3f;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #566633;
  }

  &:focus-visible {
    outline: 3px solid #2f3825;
    outline-offset: 3px;
  }
`;
