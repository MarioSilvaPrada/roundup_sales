import React from 'react';
import * as S from './Header.styled';
import Button from 'components/Button/Button';
import { BLUE, BOX_SHADOW } from 'config/style';

import logo from 'assets/logo.svg';
import logoWhite from 'assets/logo_white.svg';

const Header = ({ isFixed }) => {
  return (
    <S.StyledHeader isFixed={isFixed}>
      <S.StyledHeaderContainer>
        <S.StyledLeftHeader>
          <S.StyledLogo alt='logo' src={isFixed ? logoWhite : logo} />
          <S.StyledNavBar>
            <S.StyledLink href={'#Process'}>Process</S.StyledLink>
            <S.StyledLink href={'#Services'}>Services</S.StyledLink>
            <S.StyledLink href={'#Resources'}>Resources</S.StyledLink>
            <S.StyledLink href={'#about'}>About</S.StyledLink>
          </S.StyledNavBar>
        </S.StyledLeftHeader>
        <S.ButtonWrapper href='#contact' isFixed={isFixed}>
          <Button style={{boxShadow: BOX_SHADOW}} background={'white'} color={BLUE}>
            Start Growing
          </Button>
        </S.ButtonWrapper>
      </S.StyledHeaderContainer>
    </S.StyledHeader>
  );
};

export default Header;
