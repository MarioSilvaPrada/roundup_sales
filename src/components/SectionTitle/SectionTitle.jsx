import React from 'react';
import * as S from './SectionTitle.styled';

const SectionTitle = (props) => (
    <S.SectionContainer>
      <S.StyledTitle>{props.data.sectionTitle}</S.StyledTitle>
      <S.StyledSubTitle>{props.data.subtitle}</S.StyledSubTitle>
    </S.SectionContainer>
);

export default SectionTitle;
