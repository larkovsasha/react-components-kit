import React, { useState } from 'react';
import { CheckboxGroupProvider } from './CheckboxGroup.context';

interface ICheckboxGroupProps {
  groupName: string;
  onChange: (checkedItems: TValuesObject<true>) => void;
  checkedItems?: string[];
  children?: React.ReactElement[] | React.ReactElement;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  groupName,
  onChange,
  checkedItems,
  children,
}) => {
  const [checkedItemsState, setCheckedItemsState] = useState<string[]>(
    checkedItems || []
  );

  const handleCheckboxItemClick = (name: string) => {
    const newState = checkedItemsState.includes(name)
      ? checkedItemsState.filter((el) => el !== name)
      : [...checkedItemsState, name];
    const resObj = newState.reduce((prev, current) => {
      return { ...prev, [current]: true };
    }, {});
    onChange(resObj);
    setCheckedItemsState(newState);
  };

  return (
    <>
      <div>{groupName}</div>
      <CheckboxGroupProvider
        value={{
          onCheckBoxItemClick: handleCheckboxItemClick,
          checkedItems: checkedItemsState,
        }}
      >
        {children}
      </CheckboxGroupProvider>
    </>
  );
};
