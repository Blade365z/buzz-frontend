import React, { useState, type Dispatch } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import errorService from '@razorpay/universe-cli/errorService';
import ErrorBoundary from '@razorpay/universe-cli/errorService/ErrorBoundary';
import App from '../../app';

if (__STAGE__ !== 'development' && process.env.UNIVERSE_PUBLIC_SENTRY_DSN) {
  errorService.init({
    dsn: process.env.UNIVERSE_PUBLIC_SENTRY_DSN,
    version: `${__APP_NAME__}@${__VERSION__}`,
    environment: __STAGE__,
  });
}

export const BladeThemeTokensContext = React.createContext({
  theme: '',
  setTheme: (() => null) as Dispatch<string>,
});

const Wrapper: React.FC = () => {
  const [theme, setTheme] = useState<string>('payment');
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <React.Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <BladeThemeTokensContext.Provider
              value={{
                theme,
                setTheme,
              }}
            >
              <App key={theme} />
            </BladeThemeTokensContext.Provider>
          </BrowserRouter>
        </React.Suspense>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default Wrapper;
