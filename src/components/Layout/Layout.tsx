import React, { ReactNode } from 'react';
import { Header, MenuPanel } from 'components';
import './layout.scss';
interface ILayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <MenuPanel />
      <Header />
      <div className="layout__container">{children}</div>
    </div>
  );
};
export default Layout;
