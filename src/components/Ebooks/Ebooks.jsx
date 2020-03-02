import React from 'react';
import * as S from './Ebooks.styled';
import { BLUE } from 'config/style';
// ebooks
import book1 from 'assets/ebooks/5 things we love on Hubspot CRM.pdf';
import book2 from 'assets/ebooks/7 steps for designing a website that sells.pdf';
import book3 from 'assets/ebooks/Inbound Marketing Checklist.pdf';
import book4 from 'assets/ebooks/Deal Evaluation Checklist.pdf';

// covers
import cover1 from 'assets/ebooks/5_things_cover.png';
import cover2 from 'assets/ebooks/7_steps_cover.png';
import cover3 from 'assets/ebooks/Inbound_cover.png';
import cover4 from 'assets/ebooks/Deal_cover.png';

import Button from 'components/Button/Button';

const Ebooks = () => {
  const ebookArr = [
    {
      cover: cover1,
      download: book1,
      title: '5 things we love on Hubspot',
    },
    {
      cover: cover2,
      download: book2,
      title: '7 steps for designing a website that sells',
    },
    {
      cover: cover3,
      download: book3,
      title: 'Inbound marketing checklist',
    },
    {
      cover: cover4,
      download: book4,
      title: 'Deal Evaluation Checklist',
    },
  ];
  return (
    <S.Container id='Resources'>
      <S.Title>Resources</S.Title>
      <S.Wrapper>
        {ebookArr.map((ebook, i) => (
          <S.Card key={i}>
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
