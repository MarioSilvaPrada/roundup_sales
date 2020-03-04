import React from 'react';
import * as S from './Process.styled';

import { BLUE, LIGHT_BLUE } from 'config/style.js';

import agenda from 'assets/agenda.svg';
import strategy from 'assets/strategy.svg';
import support from 'assets/support.svg';
import target from 'assets/target.svg';

const Process = () => {
  let processArr = [
    {
      name: 'Online discovery call',
      content:
        'Our first step comprises an online Discovery Call where one of our Sales Reps will host a live video/phone call to try and understand your current context, problems and future goals.He/she will assess your technology stack and key figures and then proceed to take note of the recommended solution(s).',
      img: support,
    },
    {
      name: 'Process Mapping',
      content:
        'If our call is a good fit and to help lay out the way our strategies and tactics we will proceed to give you some homework regarding the identification and construction of your lead scoring and buyer persona model. You will receive proper training to be able to complete this step. We will then offer you free process mapping of your business (online and offline) strategy to understand critical points and areas of improval. ',
      img: strategy,
    },
    {
      name: 'Strategic Planning and Work Order',
      content:
        'Based on your acceptance of the suggested solution and the complexity of the required measures we will lay out a comprehensive and strategic set of tactics subdivided into smaller tasks which we will sell to you in the form of a work order. You can then suggest adaptations to the suggested nature and quantity of tasks and adjust your proposal to meet your own ideas and financial needs.',
      img: agenda,
    },
    {
      name: 'Execution',
      content:
        'Once we have finished mapping out what needs to be done we will offer you professional help in understanding the methodologies and steps you might need to leverage your business. We will help you procure the technology you might need to complete the aforementioned objectives and, if you wish, manage that technology for your to help you revamp your experience.',
      img: target,
    },
  ];
  return (
    <S.Container id='Process'>
      <S.Title>Process</S.Title>
      <S.Wrapper>
        {processArr.map(({ img, content, name }, i) => (
          <S.Card key={content}>
            <S.IconWrapper><S.Icon alt='icon' src={img} /></S.IconWrapper>
            <S.Name>
              {i + 1}. {name}
            </S.Name>
          </S.Card>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Process;
