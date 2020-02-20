import React from 'react';
import * as S from './Contact.styled';

const Contact = () => {
  return (
    <S.Container id='contact'>
      <S.StyledTitle>Contact us</S.StyledTitle>
      <S.Wrapper>
        <S.Title>Let's work together</S.Title>
        <S.Form>
          <S.Input placeholder='Name' />
          <S.Input placeholder='E-mail' />
          <S.TextArea placeholder='Tell us more about your problem' />
          <S.Submit type='submit' value='Send'/>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Contact;
