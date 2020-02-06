import styled from 'styled-components';
import { Gradient } from 'config/style';

export const SectionContainer = styled.div`
  ${Gradient};
  color: white;
  text-align: center;
  padding: 5rem 2rem;
`;

export const StyledTitle = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  display: block;
  text-transform: uppercase;
`;

export const StyledSubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 50rem;
  margin: 0 auto;
`;
