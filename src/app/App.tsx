import React, { Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BladeProvider } from '@razorpay/blade/components';
import { bankingTheme, paymentTheme } from '@razorpay/blade/tokens';
import { routes } from '../shared/routes';
import Navbar from '../shared/components/Navbar';
import { BladeThemeTokensContext } from '../bootstrap/Wrapper/Wrapper';

import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const App = (): React.ReactElement => {
  const { theme } = useContext(BladeThemeTokensContext);

  return (
    <BladeProvider
      themeTokens={theme === 'payment' ? paymentTheme : bankingTheme}
      colorScheme={theme === 'payment' ? 'light' : 'dark'}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Suspense>
    </BladeProvider>
  );
};

export default App;
