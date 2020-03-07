import React, { useState, useEffect } from 'react';
import { client } from './ContentfulClient';

import * as S from './App.styled';

import Header from 'components/Header/Header';
import WelcomeSection from 'components/WelcomeSection/WelcomeSection';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Services from 'components/Services/Services';
import Process from 'components/Process/Process';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';
import Ebooks from 'components/Ebooks/Ebooks';
import About from 'components/About/About';

import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  const [ data, setData ] = useState({});
  const [ headerData, setHeaderData ] = useState({});
  const [ welcomeData, setWelcomeData ] = useState({});
  const [ sectionTitle, setSectionTitle ] = useState({});
  const [ topics, setTopics ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  const [ position, setPosition ] = useState(0);

  useEffect(() => {
    client.getEntries().then((entries) => {
      entries.items.map(function(entry) {
        if (entry.fields.title === 'Header') {
          setHeaderData(entry.fields);
        } else if (entry.fields.title === 'Welcome Section') {
          setWelcomeData(entry.fields);
        } else if (entry.fields.title === 'sectionTitle1') {
          setSectionTitle(entry.fields);
        } else if (entry.fields.title === 'Topics') {
          setTopics(entry.fields);
        } else {
          setData(entry);
        }
      });
      setIsLoading(false);
    });
  }, []);


  const onScroll = () => {
    const positionToTop = window.pageYOffset;
    // const other = document.getElementById('Resources').offsetTop;
    setPosition(positionToTop);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', onScroll);
    },
    [ position ],
  );

  const getPosition = position > 700;

  return (
    <S.StyledApp>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Header isFixed={getPosition}/>
          <WelcomeSection data={welcomeData} id={headerData.link[0]} />
          <SectionTitle data={sectionTitle} />
          <Process />
          <Services data={topics} id={headerData.link[1]} />
          <Ebooks />
          <About />
          <Contact />
          <S.TopButton onClick={() => window.scrollTo(0, 0)} isVisible={getPosition}>
            <FaArrowUp size={'2rem'} color={'white'} />
          </S.TopButton>
          <Footer id={headerData.link} />
        </div>
      )}
    </S.StyledApp>
  );
};

export default App;
