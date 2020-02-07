import styled from 'styled-components';
import { MAX_WIDTH, BLUE } from 'config/style';

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  margin: 3rem auto 2rem;
  padding: 20px 15px;;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 3rem auto 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem 3rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;

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

export const Submit = styled.input`
  border-radius: 5px;
  border: 2px solid ${BLUE};
  background: ${BLUE};
  cursor: pointer;
  width: auto;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  transition: .5s;

  :hover {
    opacity: .8;
  }
`;

export const TextArea = styled.textarea`
  border: 2px solid ${BLUE};
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  height: 10rem;
  resize: none;
`;
