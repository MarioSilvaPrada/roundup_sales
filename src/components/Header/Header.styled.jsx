import styled from 'styled-components';
import { MAX_WIDTH } from '../../config/style';

export const StyledHeader = styled.div`
  width: 100%;
  padding: 20px 15px;
`;

export const StyledNavBar = styled.div`
  display: flex;
  margin-left: 4rem;
`;

export const StyledLogo = styled.img`width: 50px;`;

export const StyledLink = styled.span`
  margin-right: 2rem;
  font-size: .9rem;
  cursor: pointer;
`;

export const StyledLeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  max-width: ${MAX_WIDTH};
`;
