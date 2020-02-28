import React from 'react';
import * as S from './Header.styled';

import logo from 'assets/logo.svg';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.StyledHeaderContainer>
        <S.StyledLeftHeader>
          <S.StyledLogo src={logo} />
          <S.StyledNavBar>
            <S.StyledLink href={'#Home'}>Home</S.StyledLink>
            <S.StyledLink href={'#Services'}>Services</S.StyledLink>
            <S.StyledLink href={'#About us'}>About us</S.StyledLink>
            <S.StyledLink href={'/resources'}>Resources</S.StyledLink>
          </S.StyledNavBar>
        </S.StyledLeftHeader>
      </S.StyledHeaderContainer>
    </S.StyledHeader>
  );
};

export default Header;
