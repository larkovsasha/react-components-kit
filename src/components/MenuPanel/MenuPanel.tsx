import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './MenuPanel.scss';

const MenuPanel: React.FC = () => {
  const routesKeys = Object.keys(ROUTES);
  return (
    <nav className="MenuPanel">
      <div className="MenuPanel-Brand">
        <div className="MenuPanel-BrandTitle">
          <Link className="MenuPanel-BrandTitleLink" to={ROUTES.HOME}>
            UI
          </Link>
        </div>
        <div className="MenuPanel-BrandVersion">v1.0.0</div>
      </div>
      <div className="MenuPanel-Title">Components</div>
      <div className="MenuPanel-List">
        {routesKeys.map((routeKey) => (
          <NavLink
            className={(isActive) =>
              'MenuPanel-ListItem' +
              (isActive ? ' MenuPanel-ListItem__active' : '')
            }
            to={ROUTES[routeKey]}
            key={ROUTES[routeKey]}
          >
            {routeKey.toLowerCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
export default MenuPanel;
