import React from 'react';
import * as S from 'components/WelcomeSection/WelcomeSection.styled';
import { BLUE } from 'config/style';

import Button from 'components/Button/Button';

const WelcomeSection = ({ data, id }) => {
  return (
    <S.StyledContainer id={id}>
      <S.StyledWelcomeContainer>
        <S.StyledContent>
          <S.StyledTitle>{data.sectionTitle}</S.StyledTitle>
          <S.StyledText>{data.sectionDescription}</S.StyledText>
          <S.StyledButtons>
            <a href='#contact'>
              <Button>{data.buttonText[0]}</Button>
            </a>
            {/* <Button background={'white'} color={BLUE}>{data.buttonText[1]}</Button> */}
          </S.StyledButtons>
        </S.StyledContent>
        <S.StyledImage src={data.image[0].fields.file.url} />
      </S.StyledWelcomeContainer>
    </S.StyledContainer>
  );
};

export default WelcomeSection;
