import React, { useState, useEffect } from 'react';
import * as S from './InfoSection.styled';
import { Animated } from 'react-animated-css';
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

  const [ position, setPosition ] = useState(0);

  const getPosition = () => {
    const winScroll = window.scrollY;
    const element = document.getElementById('test').offsetTop;

    setPosition(winScroll);
    console.log(winScroll,element);

    if (winScroll >= element) {
      console.log('boa!');
    }
  };

  useEffect(
    () => {
      window.addEventListener('scroll', getPosition);
    },
    [ position ],
  );

  return (
    <S.StyledContainer id={id}>
      <S.StyledTitle id='test'>Our services</S.StyledTitle>
      <S.Wrapper>
        {content.map((cont, i) => (
          <Animated animationIn='fadeInLeft' isVisible={true}>
            <S.Content reverse={i % 2}>
              <S.StyledImg key={i} src={cont.img} />
              <S.RichText>{cont.richText}</S.RichText>
            </S.Content>
          </Animated>
        ))}
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
