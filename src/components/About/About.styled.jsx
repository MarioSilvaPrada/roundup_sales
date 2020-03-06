import styled from 'styled-components';
import { MAX_WIDTH, Gradient, BLUE } from 'config/style';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 8% 4rem;
  ${Gradient};
  color: white;
  clip-path: polygon(0 8vw, 100% 0, 100% 100%, 0% calc(100% - 8vw));
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 2.8rem;
`;

export const Content = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  line-height: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  padding: 3rem 0 5rem;
`;
