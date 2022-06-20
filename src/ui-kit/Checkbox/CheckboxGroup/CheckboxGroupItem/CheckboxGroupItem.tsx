import { Checkbox } from '../../Checkbox';
import React from 'react';
import { useCheckboxItem } from '../CheckboxGroup.context';

interface CheckboxGroupItemProps {
  id: string;
  label: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxGroupComponent: React.FC<CheckboxGroupItemProps> = ({
  id,
  label,
  className,
  onChange,
}) => {
  const { onCheckBoxItemClick, isChecked } = useCheckboxItem(label);

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckBoxItemClick(label);
    if (onChange) onChange(e);
  };
  return (
    <Checkbox
      id={id}
      label={label}
      className={className}
      isChecked={isChecked}
      onChange={handleCheckboxClick}
    />
  );
};
export const CheckboxGroupItem = React.memo(CheckboxGroupComponent);
