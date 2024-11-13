import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '../src/components/App.jsx';

// 1. Імпортуємо провайдер
import { Provider } from 'react-redux';
// 2. Імпортуємо створений раніше стор
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
