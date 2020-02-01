import React from 'react';
import * as S from './InfoSection.styled';

import website from 'assets/website.svg';
import mapping from 'assets/map.svg';
import trainning from 'assets/trainning.svg';
import improve from 'assets/improve.svg';

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
    {
      img: improve,
      title: 'Syndicated Lead Generation',
      subtitle: 'Increase Sales Opportunities',
      bullets: [
        'Identifying strong market potential',
        'Managing and Converting Inbound Leads',
        'Assessing and analyzing prospects',
        'Value propositioning',
      ],
    },
    {
      img: trainning,
      title: 'Sales Training',
      subtitle: 'Superpower your sales team',
      bullets: [
        'Standardizing Reporting',
        'CRM Best Practices and Hygiene',
        'Sales Content Creation',
        'Prospecting and Email Automation',
      ],
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
        {content.map((cont, i) => {
          console.log(i)
          return (
            <S.Content reverse={i % 2}>
              <S.StyledImg src={cont.img} />
              <S.Bullets>
                <h1>{cont.title}</h1>
                <h5>{cont.subtitle}</h5>
                <ul>{cont.bullets.map((bullet) => <li>{bullet}</li>)}</ul>
              </S.Bullets>
            </S.Content>
          );
        })}
      </S.Wrapper>
    </S.StyledContainer>
  );
};

export default InfoSection;
