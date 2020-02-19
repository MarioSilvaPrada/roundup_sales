import React from 'react';
import * as S from './InfoSection.styled';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import website from 'assets/website.svg';
import mapping from 'assets/mapping.svg';
import trainning from 'assets/trainning.svg';
import improve from 'assets/improve.svg';

const InfoSection = ({ data }) => {
  console.log(documentToReactComponents(data.point));
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
  ];
  return (
    <S.StyledContainer>
      <S.Wrapper>
        {content.map((cont, i) => (
          <S.Content reverse={i % 2}>
            <S.StyledImg key={i} src={cont.img} />
            <S.RichText>{cont.richText}</S.RichText>
          </S.Content>
        ))}
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
