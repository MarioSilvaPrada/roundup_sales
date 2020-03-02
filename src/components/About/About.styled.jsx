import styled from 'styled-components';
import { MAX_WIDTH, Gradient, BLUE } from 'config/style';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 4rem;
  ${Gradient};
  color: white;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 2.8rem;
`;

export const Content = styled.div`
  line-height: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
`;
