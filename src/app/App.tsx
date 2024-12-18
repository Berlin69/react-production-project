import { twMerge } from 'shared/lib/class-names/tw-merge';
import { AboutPageAsync } from 'pages/about-page/ui/about-page.async';
import { MainPageAsync } from 'pages/main-page/ui/main-page.async';
import { Suspense, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { IconDay, IconNight } from 'shared/icons';
import { useTheme } from './providers/theme-provider';
import { Theme } from './providers/theme-provider/lib/theme-context';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { AppRouter } from './providers/router';

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
      <AppRouter />
    </div>
  );
};

export default App;
