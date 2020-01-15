import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  background: ${(props) => (props.color ? props.color : 'yellow')};
  padding: 20px 0;
`;
export const StyledText = styled.h1``;
