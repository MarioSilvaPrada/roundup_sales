import styled from 'styled-components';
import { MAX_WIDTH } from '../../config/style';

export const StyledContainer = styled.div`
  padding: 5rem;
  @media (max-width: 940px) {
    padding: 3rem;
  }
`;

export const StyledWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  position: relative;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
  max-width: 440px;
  @media (max-width: 940px) {
    margin-bottom: 30px;
    align-items: center;
  }
`;

export const StyledImage = styled.img`
  width: 50rem;

  @media (max-width: 940px) {
    width: 100%;
  }

`;

export const StyledTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: .4px;
  margin-bottom: 2rem;
`;

export const StyledText = styled.span`
  font-size: 1rem;
  letter-spacing: .3px;
  line-height: 1.9rem;
  margin-bottom: 2rem;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

export const StyledButtons = styled.div`

  button:first-child {
    margin-right: 3rem;
  }
`;
