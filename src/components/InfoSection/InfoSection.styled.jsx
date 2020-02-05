import styled from 'styled-components';
import { MAX_WIDTH } from 'config/style';

export const StyledContainer = styled.div`
  padding: 20px 15px;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledDescription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: .8rem;
  line-height: 1.5rem;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const Poster = styled.div`
  border: 1px solid grey;
  border-radius: 50px;
  background: #f9f9f9;
  padding: 1rem;
`;

export const StyledImg = styled.img`width: 30rem;`;
export const Content = styled.div`
  display: flex;
  ${(props) => props.reverse && 'flex-direction: row-reverse'};
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
`;


export const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  letter-spaccing: 1.2rem;
  line-height: 1.8rem;

  h1,
  h5 {
    margin: 0;
  }
  h5 {
    margin: 1rem 0 .5rem;
    font-style: italic;
  }

  li {
    list-style-type: circle;
  }
`;
