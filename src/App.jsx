import React, { useState, useEffect } from 'react';
import { client } from './ContentfulClient';

import * as S from './App.styled';

import Wave from './components/Wave';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';

import { BLUE } from './config/style';

const App = () => {
  const [ data, setData ] = useState({});
  const [ headerData, setHeaderData ] = useState({});
  const [ welcomeData, setWelcomeData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    client.getEntries().then((entries) => {
      entries.items.map(function(entry) {
        if (entry.fields.title === 'Header') {
          setHeaderData(entry.fields);
        } else if (entry.fields.title === 'Welcome Section') {
          setWelcomeData(entry.fields);
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
          <WelcomeSection data={welcomeData}/>

          <div className='section'>
            <Wave fill={BLUE} style={{ marginBottom: '-5px' }} />
            <S.StyledFooter color={BLUE}>teste</S.StyledFooter>
          </div>
        </div>
      )}
    </S.StyledApp>
  );
};

export default App;
