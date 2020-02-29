import styled from 'styled-components';
import { MAX_WIDTH, LIGHT_BLUE, BLUE } from 'config/style';

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 2rem 4rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.8rem;
  color: ${BLUE};
`;

export const Content = styled.div`
  padding: 4rem 5rem;
  line-height: 2rem;
  position: relative;
  min-height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wave = styled.div`
  background: ${LIGHT_BLUE};
  opacity: .4;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 15%;
`;
