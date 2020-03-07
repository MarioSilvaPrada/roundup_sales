import React from 'react';
import * as S from './Contact.styled';

const Contact = () => {
  return (
    <S.Container id='contact'>
      <S.StyledTitle>Start Growing</S.StyledTitle>
      <S.Wrapper>
        <S.Title>Let's work together</S.Title>
        <S.Form
          method='POST'
          target='hidden_iframe'
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfBVRIm59mawEHxTBgxXcKtmVeKwHAQOcYWbfO1JKfI_65LKw/formResponse'
        >
          <S.Input placeholder='Company' name='entry.220757503' required />
          <S.Input placeholder='Name' name='entry.1848325132' required />
          <S.Input placeholder='E-mail' name='emailAddress' required />
          <S.TextArea
            placeholder='Tell us more about your project.'
            name='entry.210111838'
            required
          />
          <S.Submit type='submit' value='Start now' />
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Contact;
