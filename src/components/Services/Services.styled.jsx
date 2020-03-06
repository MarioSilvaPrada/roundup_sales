import styled from 'styled-components';
import { MAX_WIDTH, BOX_SHADOW, BLUE, LIGHT_BLUE } from 'config/style';

export const StyledContainer = styled.div`
  padding: 20px 15px;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  box-shadow: ${BOX_SHADOW};
  min-height: 35rem;
  border-radius: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 30rem;
  @media (max-width: 740px) {
    width: 20rem;
  }
`;

export const Content = styled.div`
  ${(props) => props.reverse && 'flex-direction: row-reverse'};
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100%;

  display: ${(props) => (props.isVisible ? 'flex' : 'none')};

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
    margin: 0;
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

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.left ? 'auto' : '1rem')};
  left: ${(props) => (props.left ? '1rem' : 'auto')};
  ${(props) => props.left && 'transform: rotate(180deg)'};
  width: 3rem;
  cursor: pointer;
`;

export const CircleWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 50%;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: ${props => props.isSelected ? LIGHT_BLUE : 'none'};
  border: 2px solid ${LIGHT_BLUE};
`;
