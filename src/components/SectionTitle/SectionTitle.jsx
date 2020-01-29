import React from 'react';
import * as S from './SectionTitle.styled';
import { BLUE } from 'config/style';

import SectionWave from 'assets/svg/SectionWave';
import BottomSection from 'assets/svg/BottomSection';

const SectionTitle = (props) => (
  <div>
    <SectionWave fill={BLUE} style={{ marginBottom: '-1rem' }} />
    <S.SectionContainer>
      <S.StyledTitle>{props.data.sectionTitle}</S.StyledTitle>
      <S.StyledSubTitle>{props.data.subtitle}</S.StyledSubTitle>
    </S.SectionContainer>
    <SectionWave fill={BLUE} style={{ marginTop: '-.8rem', transform: 'rotate(180deg)' }} />
  </div>
);

export default SectionTitle;
