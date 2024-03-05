import React from 'react';
import { createRoot } from 'react-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;
