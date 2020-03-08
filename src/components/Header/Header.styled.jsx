import styled, { css, keyframes } from 'styled-components';
import { MAX_WIDTH, BLUE, Gradient } from '../../config/style';

const animationHeader = keyframes`
  0% { transform: translateY(-20rem); }
  100% { transform: translateY(0); }
`;

const FixedHeader = css`
  position: fixed;
  top: 0;
  left: 0;
  background: ${Gradient};
  border-bottom: 1px solid white;
  color: white;
  animation: ${animationHeader} .3s;
  z-index: 100;
`;

export const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  position: absolute;
  ${(props) => props.isFixed && FixedHeader};

  @media (max-width: 940px) {
    padding: 15px;
  }
`;

export const StyledNavBar = styled.div`
  display: flex;
  margin-left: 4rem;
  @media (max-width: 940px) {
    margin-left: 0rem;
    text-align: center;
  }
`;

export const StyledLogo = styled.img`width: 3rem;`;

export const StyledLink = styled.a`
  margin-left: 1rem;
  font-size: .9rem;
  cursor: pointer;
  align-self: center;
  padding: 1rem .5rem;
  border-bottom: 2px solid transparent;
  transition: .7s;

  &:hover {
    border-bottom: 2px solid ${(props) => (props.isFixed ? 'white' : BLUE)};
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

export const ButtonWrapper = styled.a`
  display: ${(props) => (props.isFixed ? 'block' : 'none')};
  @media (max-width: 440px) {
    display: none;
  }
`;
