import React from 'react';
import * as S from './About.styled';

const About = () => {
  return (
    <S.Container id='about'>
      <S.Title>About us</S.Title>
      <S.Content>
        <p>
          Welcome to RoundUp Sales, your number one source for all things Inbound Marketing, Sales
          and Software Procurement related. We're dedicated to providing you the very best of
          consultancy services, with an emphasis on coherent, business-driven, measurable tactics
          and strategies that will allow you to deliver on your vision and rapidly grow your own
          venture.
        </p>
        <p>
          Founded in 2020 by Joaquim Henriques and Mário Prada, RoundUp Sales has come a long way
          from its beginnings in Lisbon, Portugal. When Joaquim and Mário first started out, their
          passion for KPI driven Innovation and business, digital transformation, drove them to
          start their own business.
        </p>
        <p>
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any
          questions or comments, please don't hesitate to contact us.
        </p>
        <p>Sincerely,</p>
        <i>RoundUp Sales</i>
      </S.Content>
    </S.Container>
  );
};

export default About;
