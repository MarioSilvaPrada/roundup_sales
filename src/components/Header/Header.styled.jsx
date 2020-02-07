import styled from 'styled-components';
import { MAX_WIDTH, BLUE } from '../../config/style';

export const StyledHeader = styled.div`
  width: 100%;
  padding: 20px 15px;
`;

export const StyledNavBar = styled.div`
  display: flex;
  margin-left: 4rem;
`;

export const StyledLogo = styled.img`width: 3.2rem;`;

export const StyledLink = styled.span`
  margin-right: 2rem;
  font-size: .9rem;
  cursor: pointer;
  align-self: center;
  padding: 1rem .5rem ;
  border-bottom: 2px solid transparent;
  transition: .7s;

  &:hover {
    border-bottom: 2px solid ${BLUE};
  }
`;

export const StyledLeftHeader = styled.div`
  display: flex;
  align-items: stretch;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  max-width: ${MAX_WIDTH};
`;
