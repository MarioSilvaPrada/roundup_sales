import styled from 'styled-components';
import { BLUE } from '../../config/style';

export const StyledButton = styled.button`
  text-align: center;
  min-width: 7rem;
  padding: 1rem 1.1rem;
  border: 2px solid ${(props) => (props.background ==='white' ? props.color : BLUE)};
  background: ${(props) => (props.background ? props.background : BLUE)};
  color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: .3rem;
  cursor: pointer;
  transition: .5s;
  font-size: 1.1rem;

  :hover {
    opacity: .8;
    ${props => props.scale && 'transform: scale(1.1)'};
  }
`;
