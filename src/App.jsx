import React, { useState, useEffect } from 'react';
import { client } from './ContentfulClient';

import * as S from './App.styled';

import Header from 'components/Header/Header';
import WelcomeSection from 'components/WelcomeSection/WelcomeSection';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import InfoSection from 'components/InfoSection/InfoSection';
import Contact from 'components/Contact/Contact';

const App = () => {
  const [ data, setData ] = useState({});
  const [ headerData, setHeaderData ] = useState({});
  const [ welcomeData, setWelcomeData ] = useState({});
  const [ sectionTitle, setSectionTitle ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    client.getEntries().then((entries) => {
      console.log(entries.items);
      entries.items.map(function(entry) {
        if (entry.fields.title === 'Header') {
          setHeaderData(entry.fields);
        } else if (entry.fields.title === 'Welcome Section') {
          setWelcomeData(entry.fields);
        } else if (entry.fields.title === 'sectionTitle1') {
          setSectionTitle(entry.fields);
        } else {
          setData(entry);
        }
      });
      setIsLoading(false);
    });

    // client.getEntry('7nAVhgvNaAAtay77brCEC9').then(function(entry) {
    //   setData(entry.fields);
    //   setIsLoading(false);
    // });
  }, []);

  return (
    <S.StyledApp>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Header data={headerData} />
          <WelcomeSection data={welcomeData} />
          <SectionTitle data={sectionTitle} />
          <InfoSection />
          <Contact />

          {/* <div className='section'>
            <Wave fill={BLUE} style={{ marginBottom: '-5px' }} />
            <S.StyledFooter color={BLUE}>teste</S.StyledFooter>
          </div> */}
        </div>
      )}
    </S.StyledApp>
  );
};

export default App;
