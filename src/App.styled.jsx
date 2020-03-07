import styled from 'styled-components';
import { Gradient } from 'config/style';

export const StyledFooter = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${(props) => (props.color ? props.color : 'black')};
`;

export const StyledApp = styled.div``;

export const TopButton = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: ${Gradient};
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(${(props) => (props.isVisible ? 0 : '20rem')});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: .8s;
`;
