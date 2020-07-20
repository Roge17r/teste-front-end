import React from 'react';
import GlobalStyle from './styles/global';

import Register from './pages/Register';
import Drivers from './pages/Drivers';

const App: React.FC = () => {
  return (
    <>
      <Drivers />
      <GlobalStyle />
    </>
  );
};

export default App;
