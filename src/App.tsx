import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/about-page/about-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { useTheme } from './theme/use-theme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app bg-plt-primary text-plt-secondary dark:bg-plt-secondary dark:text-plt-primary">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button>Переключение темы</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
