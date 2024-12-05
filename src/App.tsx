import { Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/about-page/about-page.async';
import { MainPageAsync } from './pages/main-page/main-page.async';
import { useTheme } from './theme/use-theme';
import { Theme } from './theme/theme-context';
import { twMerge } from './helpers/class-names/tw-merge';
import { IconDay, IconNight } from './components/icons';

const htmlSelector = document.querySelector('html');

const App = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    htmlSelector.classList.remove(Theme.DARK, Theme.LIGHT);
    htmlSelector.classList.add(theme);
  }, [theme]);

  return (
    <div className="app bg-plt-light text-plt-dark dark:bg-plt-dark dark:text-plt-light">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button
        onClick={toggleTheme}
        className={twMerge(
          'flex gap-2 items-center border p-2 rounded',
          theme === Theme.DARK ? 'border-plt-light' : 'border-plt-dark'
        )}
      >
        {theme === Theme.DARK && <IconNight />}
        {theme === Theme.LIGHT && <IconDay />}
        <span>Переключение темы</span>
      </button>
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
