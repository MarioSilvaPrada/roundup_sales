import React, { useState, useEffect } from 'react';
import './App.css';

import wave from './assets/wave.svg';

import { client } from './ContentfulClient';

const App = () => {
  const [ data, setData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    // client.getEntries().then((entries) => {
    //   setData(entries);
    //   setIsLoading(false);
    // });

    client.getEntry('7nAVhgvNaAAtay77brCEC9').then(function(entry) {
      // logs the entry metadata
      setData(entry.fields);
      setIsLoading(false);
    });
  });

  return isLoading ? (
    <div className='App'>
      <h1>Loading</h1>
    </div>
  ) : (
    <div className='App'>
      <h1>{data.title}</h1>
      <p>{data.textSection}</p>
      <img src={data.image.fields.file.url} />
     <div className='section'>
        <img className='wave' src={wave} />
        <div className='devision' />
     </div>
    </div>
  );
};

export default App;
