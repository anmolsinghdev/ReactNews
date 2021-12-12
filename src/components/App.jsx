import React from 'react';
import NavBar from './NavBar';
import { createGlobalStyle } from 'styled-components';

//CSS Reset
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
};

export default App;
