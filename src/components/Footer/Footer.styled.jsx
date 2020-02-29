import styled from 'styled-components';
import { Gradient } from 'config/style';

export const Container = styled.div`
  ${Gradient};
  width: 100%;
  height: 20rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  a {
    margin-right: 2rem;
    cursor: pointer;
    padding: 1rem;
    border-bottom: 2px solid transparent;
    transition: .5s;
  }

  a:hover {
    border-bottom: 2px solid white;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Copyrights = styled.p`
  font-style: italic;
  font-size: .8rem;
`;
