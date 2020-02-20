import styled from 'styled-components';
import { MAX_WIDTH, BOX_SHADOW, BLUE } from 'config/style';

export const StyledContainer = styled.div`
  padding: 20px 15px;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

export const StyledImg = styled.img`
  width: 30rem;
  @media (max-width: 740px) {
    width: 20rem;
  }
`;
export const Content = styled.div`
  display: flex;
  ${(props) => props.reverse && 'flex-direction: row-reverse'};
  justify-content: space-between;
  align-items: center;
  box-shadow: ${BOX_SHADOW};
  padding: 4rem 5rem;
  border-radius: 2rem;
  transform: translate(${(props) => (props.reverse ? '20%' : '-20%')});
  min-height: 35rem;

  @media (max-width: 1600px) {
    transform: translate(0);
  }
  @media (max-width: 940px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 740px) {
    padding: 2rem;
  }
`;

export const RichText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;

  h1,
  h2 {
    line-height: 2.8rem;
  }

  h3,
  h4,
  h5 {
    line-height: 2rem;
  }

  li {
    list-style-type: circle;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.8rem;
  color: ${BLUE};
`;
