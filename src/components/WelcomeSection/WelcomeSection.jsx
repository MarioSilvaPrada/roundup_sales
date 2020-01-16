import React from 'react';
import * as S from './WelcomeSection.styled';
import { BLUE } from '../../config/style';

import Button from '../Button/Button';

const WelcomeSection = ({ data }) => {
  return (
    <S.StyledContainer>
      <S.StyledContent>
        <S.StyledTitle>{data.sectionTitle}</S.StyledTitle>
        <S.StyledText>{data.sectionDescription}</S.StyledText>
        <S.StyledButtons>
          <Button>{data.buttonText[0]}</Button>
          <Button background={'white'} color={BLUE}>{data.buttonText[1]}</Button>
        </S.StyledButtons>
      </S.StyledContent>
      <S.StyledImage src={data.image[0].fields.file.url} />
    </S.StyledContainer>
  );
};

export default WelcomeSection;
