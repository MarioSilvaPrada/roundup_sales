import React from 'react';
import * as S from './Footer.styled';

const Footer = ({ id }) => (
  <S.Container>
    <S.Wrapper>
      <S.Links>
        <a href={'#Process'}>Process</a>
        <a href={'#Services'}>Services</a>
        <a href={'#Resources'}>Resources</a>
        <a href={'#about'}>About us</a>
      </S.Links>
      <S.Copyrights>
        All rights reserved &copy; {new Date().getFullYear()}, <b>Round Up Sales</b>
      </S.Copyrights>
    </S.Wrapper>
  </S.Container>
);

export default Footer;
