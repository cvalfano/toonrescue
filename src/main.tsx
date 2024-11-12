import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { FontProvider } from './context/FontContext';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </StrictMode>
);