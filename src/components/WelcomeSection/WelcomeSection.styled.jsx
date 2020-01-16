import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
`;

export const StyledImage = styled.img`width: 30rem;`;

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
