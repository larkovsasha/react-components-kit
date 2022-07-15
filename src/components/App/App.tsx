import React from 'react';
import { Layout } from 'components';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './App.scss';
import { ButtonPage, HomePage, IconPage } from 'pages';
import { IconButtonPage } from '../../pages/IconButton';
import CollapsePage from '../../pages/CollapsePage';
import { CheckboxPage } from '../../pages/CheckboxPage';
import { HamburgerPage } from '../../pages/Hamburger';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.ICON_BUTTON} element={<IconButtonPage />} />
          <Route path={ROUTES.COLLAPSE} element={<CollapsePage />} />
          <Route path={ROUTES.CHECKBOX} element={<CheckboxPage />} />
          <Route path={ROUTES.HAMBURGER} element={<HamburgerPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
