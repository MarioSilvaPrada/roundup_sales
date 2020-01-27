import React from 'react';
import * as S from './SectionTitle.styled';
import { BLUE } from 'config/style';

import TopSection from 'assets/svg/TopSection';
import BottomSection from 'assets/svg/BottomSection';

const SectionTitle = (props) => (
  <div>
    <TopSection fill={BLUE} style={{marginBottom: '-1rem'}}/>
    <S.SectionContainer>
      <S.StyledTitle>{props.data.sectionTitle}</S.StyledTitle>
      <S.StyledSubTitle>{props.data.subtitle}</S.StyledSubTitle>
    </S.SectionContainer>
    <BottomSection fill={BLUE} />
  </div>
);

export default SectionTitle;
