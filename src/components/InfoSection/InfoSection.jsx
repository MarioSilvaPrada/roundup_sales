import React from 'react';
import * as S from './InfoSection.styled';

import website from 'assets/website.svg';
import mapping from 'assets/map.svg';
import trainning from 'assets/trainning.svg';
import improvw from 'assets/improve.svg';

const InfoSection = () => {
  let content = [
    {
      img: website,
      title: 'Website Optimization',
      subtitle: 'Drive Business Goals Online',
      bullets: [
        'Reducing Bounce Rate',
        'Analyzing sources of traffic',
        'Improving your website funnel',
        'Optimizing your website code and content',
        'Monetization Strategies',
      ],
    },
    {
      img: mapping,
      title: 'Process Mapping',
      subtitle: 'Run an efficient and lean company',
      bullets: [ 'Compliance', 'Process/workflow clarification', 'Internal Audit', 'Role clarity' ],
    },
  ];
  return (
    <S.StyledContainer>
      <S.Wrapper>
        <S.StyledTitle>Get a free consultation!</S.StyledTitle>
        <S.StyledDescription>
          We will organize a quick 15 min discovery call to find out more about your specific
          context and goals. From then on, we'll build a tailored project and timeline for your
          company.
        </S.StyledDescription>
        {content.map((cont) => (
          <S.Content>
            <S.StyledImg src={cont.img} />
            <S.Bullets>
              <h1>{cont.title}</h1>
              <h5>{cont.subtitle}</h5>
              <ul>{cont.bullets.map((bullet) => <li>{bullet}</li>)}</ul>
            </S.Bullets>
          </S.Content>
        ))}
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
