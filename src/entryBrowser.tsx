import React from 'react';
import { createRoot } from 'react-dom/client';
import Wrapper from './bootstrap/Wrapper';

const rootHTMLElement = document.getElementById('root');

if (!rootHTMLElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootHTMLElement);
root.render(<Wrapper />);
