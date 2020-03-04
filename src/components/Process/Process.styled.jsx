import styled from 'styled-components';
import { MAX_WIDTH, BLUE, Gradient } from 'config/style';

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
  min-height: 2rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.8rem;
  color: ${BLUE};
`;


export const Icon = styled.img`
  width: 5rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Gradient};
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
`
