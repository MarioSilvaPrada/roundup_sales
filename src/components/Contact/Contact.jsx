import React from 'react';
import * as S from './Contact.styled';

const Contact = () => {
  return (
    <S.Container id='contact'>
      <S.StyledTitle>Start Growing</S.StyledTitle>
      <S.Wrapper>
        <S.Title>Let's work together</S.Title>
        <S.Form>
          <S.Input placeholder='Company' />
          <S.Input placeholder='Name' />
          <S.Input placeholder='E-mail' />
          <S.TextArea placeholder='Tell us more about your project.' />
          <S.Submit type='submit' value='Start now'/>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Contact;
