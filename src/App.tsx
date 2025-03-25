import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Routes />
    </HelmetProvider>
  );
};

export default App;