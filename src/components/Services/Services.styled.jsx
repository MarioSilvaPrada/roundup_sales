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
  overflow: hidden;

  @media (max-width: 940px) {
    min-height: 60rem;
  }
`;

export const StyledImg = styled.img`
  width: 30rem;
  margin: 0 2rem;
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
    padding: 4rem 2rem;
  }

  @media (max-width: 740px) {
    padding: 5rem 2rem;
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
  right: ${(props) => (props.left ? 'auto' : '2rem')};
  left: ${(props) => (props.left ? '2rem' : 'auto')};
  ${(props) => props.left && 'transform: rotate(180deg)'};
  width: 2rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    transform: ${(props) => (props.left ? 'translate(-.5rem) rotate(180deg)' : 'translate(.5rem)')};
  }

  @media (max-width: 940px) {
    right: ${(props) => (props.left ? 'auto' : '1rem')};
    left: ${(props) => (props.left ? '1rem' : 'auto')};
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: ${(props) => (props.isSelected ? LIGHT_BLUE : 'none')};
  border: 2px solid ${LIGHT_BLUE};
  cursor: pointer;
`;
