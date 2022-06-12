import React, { DOMAttributes, memo } from 'react';
import classNames from 'classnames';
import { IconType, iconTypesComponents } from './IconTypesComponents';

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
  onClick?: () => void;
}

const getIcon = (type: IconType): JSX.Element =>
  iconTypesComponents[type] as JSX.Element;

const IconComponent: React.FC<IIconProps> = ({
  className,
  type,
  onClick,
  ...rest
}) => {
  return (
    <div className={classNames('Icon', className)} onClick={onClick} {...rest}>
      {getIcon(type)}
    </div>
  );
};
export const Icon = memo(IconComponent);
