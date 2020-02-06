import styled from 'styled-components';
import { MAX_WIDTH, BLUE } from 'config/style';

export const Container = styled.div`
  max-width: 80%;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  margin: 3rem auto 2rem;
  padding: 2rem 0;
`;

export const Wrapper = styled.div`
    max-width: 50%;
    margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1.2rem;
  border: 2px solid ${BLUE};
  border-radius: 5px;
  padding-left: 2rem;
  margin-bottom: 2rem;
`;

export const TextArea = styled.textarea`
  border: 2px solid ${BLUE};
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 1rem 2rem;
  height: 10rem;
`;
