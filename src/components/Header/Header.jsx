import React from 'react';
import * as S from './Header.styled';
import { BLUE } from '../../config/style';

import Button from '../Button/Button';

const Header = ({ data }) => {
  return (
    <S.StyledHeader>
      <S.StyledHeaderContainer>
        <S.StyledLeftHeader>
          <S.StyledLogo src={data.logo.fields.file.url} />
          <S.StyledNavBar>
            {data.link.map((link) => <S.StyledLink>{link}</S.StyledLink>)}
          </S.StyledNavBar>
        </S.StyledLeftHeader>
        <Button background={BLUE}>{data.buttonText}</Button>
      </S.StyledHeaderContainer>
    </S.StyledHeader>
  );
};

export default Header;
