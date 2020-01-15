import React, { useState, useEffect } from 'react';
import { client } from './ContentfulClient';

import * as S from './App.styled';

import Wave from './components/Wave';
import Header from './components/Header/Header';

import { BLUE } from './config/style';

const App = () => {
  const [ data, setData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    client.getEntries().then((entries) => {
      setData(entries);
      setIsLoading(false);
    });

    // client.getEntry('7nAVhgvNaAAtay77brCEC9').then(function(entry) {
    //   setData(entry.fields);
    //   setIsLoading(false);
    // });
  });

  return isLoading ? (
    <div className='App'>
      <h1>Loading</h1>
    </div>
  ) : (
    <div className='App'>
      <Header />

      <div className='section'>
        <Wave fill={BLUE} style={{marginBottom: '-5px'}}/>
        <S.StyledFooter color={BLUE}>teste</S.StyledFooter>
      </div>
    </div>
  );
};

export default App;
