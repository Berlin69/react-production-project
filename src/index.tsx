import { render } from 'react-dom';
import { Counter } from './components/ui/counter';

import './style/tailwind.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/theme-provider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
