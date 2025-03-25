import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create root once
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  // Remove StrictMode for production as it causes double rendering 
  // which can make animations run twice
  <App />
);