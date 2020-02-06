import styled from 'styled-components';

export const SectionContainer = styled.div`
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8f94fb,
    #4e54c8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
