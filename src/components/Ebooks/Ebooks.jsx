import React from 'react';
import * as S from './Ebooks.styled';
import { BLUE } from 'config/style';
import book1 from 'assets/ebooks/5_things_we_love_on_Hubspot.docx';
import book2 from 'assets/ebooks/7_Steps_for_designing_a_Website_that_Sells.docx';
import book3 from 'assets/ebooks/Inbound_Marketing_Checklist.docx';

import Button from 'components/Button/Button';

const Ebooks = () => {
  const ebookArr = [
    {
      cover:
        'https://images.pexels.com/photos/3624312/pexels-photo-3624312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      download: book1,
      title: '5 things we love on Hubspot',
    },
    {
      cover:
        'https://images.pexels.com/photos/3624312/pexels-photo-3624312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      download: book2,
      title: '7 steps for designing a website that sells',
    },
    {
      cover:
        'https://images.pexels.com/photos/3624312/pexels-photo-3624312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      download: book3,
      title: 'Inbound marketing checklist',
    },
  ];
  return (
    <S.Container id='Resources'>
      <S.Title>Resources</S.Title>
      <S.Wrapper>
        {ebookArr.map((ebook, i) => (
          <S.Card key={i}>
            <S.BookTitle>{ebook.title}</S.BookTitle>
            <S.Cover src={ebook.cover} />
            <a href={ebook.download}>
              <Button scale background='white' color={BLUE}>
                Get ebook
              </Button>
            </a>
          </S.Card>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Ebooks;
