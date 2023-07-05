import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('loads and displays greeting', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
    );
    expect(screen.getByText('Welcome to Frontend Universe!')).toBeDefined();
  });
});
