import styled from 'styled-components';
import { MAX_WIDTH } from '../../config/style';

export const StyledContainer = styled.div`padding: 2rem 5rem;`;

export const StyledWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
  max-width: 440px;
`;

export const StyledImage = styled.img`width: 50rem;`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: .4px;
  margin-bottom: 2rem;
`;

export const StyledText = styled.span`
  font-size: 1rem;
  letter-spacing: .3px;
  line-height: 1.9rem;
  margin-bottom: 2rem;
`;

export const StyledButtons = styled.div`
  width: 100%;

  button:first-child {
    margin-right: 3rem;
  }
`;
