import React from 'react';
import * as S from './Header.styled';


const Header = ({ data }) => {
  return (
    <S.StyledHeader>
      <S.StyledHeaderContainer>
        <S.StyledLeftHeader>
          <S.StyledLogo src={data.logo.fields.file.url} />
          <S.StyledNavBar>
            {data.link.map((link) => <S.StyledLink key={link} href={`#${link}`}>{link}</S.StyledLink>)}
          </S.StyledNavBar>
        </S.StyledLeftHeader>
      </S.StyledHeaderContainer>
    </S.StyledHeader>
  );
};

export default Header;
