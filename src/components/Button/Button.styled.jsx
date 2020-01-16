import styled from 'styled-components';
import { BLUE } from '../../config/style';

export const StyledButton = styled.button`
  text-align: center;
  min-width: 5rem;
  padding: .5rem 1.2rem;
  border: 2px solid ${(props) => (props.background ==='white' ? props.color : BLUE)};
  background: ${(props) => (props.background ? props.background : BLUE)};
  color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: .3rem;
  cursor: pointer;
  transition: .5s;
  font-size: .8rem;

  :hover {
    opacity: .8;
  }
`;
