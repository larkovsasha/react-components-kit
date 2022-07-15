import classNames from 'classnames';
import React from 'react';
import './Hamburger.scss';

// eslint-disable-next-line no-unused-vars
enum HamburgerColor {
  // eslint-disable-next-line no-unused-vars
  BLACK = 'black',
  // eslint-disable-next-line no-unused-vars
  WHITE = 'white',
}

type HamburgerColorType = 'black' | 'white';

export interface IHamburgerProps {
  className?: string;
  color?: HamburgerColorType;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Hamburger: React.FC<IHamburgerProps> = ({
  color,
  isActive,
  onClick,
  className,
}) => {
  console.log(123);
  return (
    <div className={classNames(className, 'Hamburger')} onClick={onClick}>
      <div
        className={classNames('Burger', {
          Burger__black: color === HamburgerColor.BLACK,
          Burger__white: color === HamburgerColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};
