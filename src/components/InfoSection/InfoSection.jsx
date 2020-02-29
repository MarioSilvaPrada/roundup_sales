import React, { useState, useEffect } from 'react';
import * as S from './InfoSection.styled';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import website from 'assets/website.svg';
import mapping from 'assets/mapping.svg';
import trainning from 'assets/trainning.svg';
import improve from 'assets/improve.svg';
import marketing from 'assets/marketing.svg';
import software from 'assets/software.svg';

const InfoSection = ({ data, id }) => {
  let content = [
    {
      img: website,
      richText: documentToReactComponents(data.point),
    },
    {
      img: mapping,
      richText: documentToReactComponents(data.point2),
    },
    {
      img: improve,
      richText: documentToReactComponents(data.point3),
    },
    {
      img: trainning,
      richText: documentToReactComponents(data.point4),
    },
    {
      img: software,
      richText: documentToReactComponents(data.point5),
    },
    {
      img: marketing,
      richText: documentToReactComponents(data.point6),
    },
  ];

  return (
    <S.StyledContainer id={id}>
      <S.StyledTitle id='test'>Our services</S.StyledTitle>
      <S.Wrapper>
        {content.map((cont, i) => (
          <S.Content key={i} reverse={i % 2}>
            <S.StyledImg  src={cont.img} />
            <S.RichText>{cont.richText}</S.RichText>
          </S.Content>
        ))}
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
