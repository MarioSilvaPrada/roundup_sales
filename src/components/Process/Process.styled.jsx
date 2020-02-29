import styled from 'styled-components';
import { MAX_WIDTH, BLUE } from 'config/style';

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;

  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.2rem;

  @media (max-width: 940px) {
    width: 50%;
  }

  @media (max-width: 740px) {
    width: 90%;
  }
`;

export const Content = styled.p`
  font-size: .8rem;
  line-height: 1.8rem;
`;

export const Name = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.8rem;
  color: ${BLUE};
`;
