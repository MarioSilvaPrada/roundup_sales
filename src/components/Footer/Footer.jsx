import React from 'react';
import * as S from './Footer.styled';

const Footer = ({ id }) => (
  <S.Container>
    <S.Wrapper>
      <S.Links>
        {id.map((link) => <a href={`#${link}`}>{link}</a>)}
        <a href='#contact'>Contact us</a>
      </S.Links>
      <S.Copyrights>
        All rights reserved &copy; {new Date().getFullYear()}, <b>Round Up Sales</b>
      </S.Copyrights>
    </S.Wrapper>
  </S.Container>
);

export default Footer;
