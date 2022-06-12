import React from 'react';
import { Button } from '../../ui-kit';
export const ButtonPage = () => {
  const handleButtonClick = (e: React.MouseEvent) => {
    console.log(e);
  };
  return (
    <section className="ButtonPage">
      <h2>Button</h2>
      <Button isDisabled={false} onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
      <h2>Button disabled</h2>
      <Button isDisabled onClick={handleButtonClick}>
        Send
      </Button>
      <hr />
    </section>
  );
};
