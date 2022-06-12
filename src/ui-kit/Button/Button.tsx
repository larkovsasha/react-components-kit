import React, { DOMAttributes, memo } from 'react';
import classNames from 'classnames';
import './Button.scss';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  buttonType?: ButtonType;
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({
  className,
  children,
  onClick,
  buttonType,
  isDisabled,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', className, {
        Button__disabled: isDisabled,
      })}
      data-testid="test-button"
      disabled={isDisabled}
      type={buttonType}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
export const Button = memo(ButtonComponent);
