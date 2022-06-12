import React from 'react';
import { Layout } from 'components';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './App.scss';
import { ButtonPage, HomePage, IconPage } from 'pages';
import { IconButtonPage } from '../../pages/IconButton';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
          <Route path={ROUTES.ICON_BUTTON} element={<IconButtonPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
