import styled from 'styled-components';
import { MAX_WIDTH } from 'config/style';

export const StyledContainer = styled.div`
  padding: 20px 15px;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const StyledImg = styled.img`width: 30rem;`;
export const Content = styled.div`
  display: flex;
  ${(props) => props.reverse && 'flex-direction: row-reverse'};
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;

  @media (max-width: 940px) {
    flex-direction: column-reverse;
  }
`;

export const RichText = styled.div`
  display: flex;
  flex-direction: column;

  li {
    list-style-type: circle;
  }
`;
