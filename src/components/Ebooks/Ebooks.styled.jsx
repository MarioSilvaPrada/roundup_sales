import styled from 'styled-components';
import { MAX_WIDTH, BLUE } from 'config/style';

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 5rem 0 1rem;
  font-size: 2.8rem;
  color: ${BLUE};
`;

export const Cover = styled.img`
  width: 20rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  box-shadow: 10px 9px 20px 6px rgba(33,43,54,0.2);
`;

export const BookTitle = styled.p`
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: bold;
    width: 80%;
    text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 2rem 4rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 2rem;
`;
