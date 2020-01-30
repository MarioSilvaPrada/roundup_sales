import styled from 'styled-components';
import { MAX_WIDTH } from 'config/style';

export const StyledContainer = styled.div`
  padding: 20px 15px;
  max-width: ${MAX_WIDTH};
`;

export const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.9rem;
`;

export const StyledDescription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: .8rem;
  line-height: 1.5rem;
`;

export const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const StyledImg = styled.img`width: 20rem;`;
export const Content = styled.div`
  display: flex;
  ${(props) => props.reverse && 'flex-direction: row-reverse'};
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    list-style-type: circle;
    line-height: 1.5rem;
  }
`;
