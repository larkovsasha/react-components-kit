import { Hamburger } from '../../ui-kit/Hamburger';
import React, { useState } from 'react';

export const HamburgerPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <section className="HamburgerPage">
      <h2>Hamburger</h2>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
    </section>
  );
};
