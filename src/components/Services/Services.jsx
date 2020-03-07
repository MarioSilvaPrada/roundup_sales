import React, { useState, useEffect } from 'react';
import * as S from './Services.styled';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import website from 'assets/website.svg';
import mapping from 'assets/mapping.svg';
import trainning from 'assets/trainning.svg';
import improve from 'assets/improve.svg';
import marketing from 'assets/marketing.svg';
import software from 'assets/software.svg';

import arrow from 'assets/arrow.svg';

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

  const [ indexSlide, setIndexSlide ] = useState(0);

  const getCircle = () => {
    let circlerArr = [];
    for (let i = 0; i < content.length; i++) {
      circlerArr.push(
        <S.Circle key={i} isSelected={i === indexSlide} onClick={() => setIndexSlide(i)} />,
      );
    }
    return circlerArr;
  };

  useEffect(
    () => {
      const interval = setInterval(() => {
        if (indexSlide < content.length - 1) {
          setIndexSlide(indexSlide + 1);
        } else {
          setIndexSlide(0);
        }
      }, 4000);

      return () => clearInterval(interval);
    },
    [ indexSlide ],
  );

  return (
    <S.StyledContainer id={id}>
      <S.StyledTitle id='test'>Our services</S.StyledTitle>
      <S.Wrapper>
        {content.map((cont, i) => (
          <S.Content key={i} reverse={i % 2} isVisible={indexSlide === i}>
            <S.StyledImg src={cont.img} />
            <S.RichText>{cont.richText}</S.RichText>
          </S.Content>
        ))}
        <S.Arrow
          left
          alt='arrow'
          src={arrow}
          onClick={
            indexSlide <= 0 ? (
              () => setIndexSlide(content.length - 1)
            ) : (
              () => setIndexSlide(indexSlide - 1)
            )
          }
        />
        <S.Arrow
          alt='arrow'
          src={arrow}
          onClick={
            indexSlide >= content.length - 1 ? (
              () => setIndexSlide(0)
            ) : (
              () => setIndexSlide(indexSlide + 1)
            )
          }
        />
        <S.CircleWrapper>{getCircle()}</S.CircleWrapper>
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
